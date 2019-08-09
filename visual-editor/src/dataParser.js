import { groupFeedbackWordMapping } from './Utils';

const markdown = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<

( ) an incorrect answer
(x) the correct answer
( ) an incorrect answer`;

const singleWithHintAndFeedback = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<

( ) an incorrect answer {{You can specify optional feedback like this, which appears after this answer is submitted.}}
(x) the correct answer
( ) an incorrect answer {{You can specify optional feedback for none, a subset, or all of the answers.}}

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||`;

const multiMarkdown = `You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this.<<

[x] a correct answer {{ selected: You can specify optional feedback that appears after the learner selects and submits this answer. }, { unselected: You can specify optional feedback that appears after the learner clears and submits this answer.}}
[ ] an incorrect answer
[ ] an incorrect answer {{ selected: You can specify optional feedback for none, all, or a subset of the answers. }, { unselected: You can specify optional feedback for selected answers, cleared answers, or both.}}
[x] a correct answer


{{ ((A B D)) You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted. }}
{{ ((A B C D)) You can specify optional feedback for one, several, or all answer combinations. }}

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||`;

const dropdownWithHintsAndFeedback = `You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.
>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<
[[
an incorrect answer {{You can specify optional feedback like this, which appears after this answer is submitted.}}
(the correct answer) {{Some feedback}}
an incorrect answer {{You can specify optional feedback for none, a subset, or all of the answers.}}
]]

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||`;


const numericalWithHintsFeedback = `You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<

= 100 +-5 {{You can specify optional feedback like this, which appears after this answer is submitted.}}

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||`;

const textInputWithHintsAndFeedback = `You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<

= the correct answer {{You can specify optional feedback like this, which appears after this answer is submitted.}}
or= optional acceptable variant of the correct answer
not= optional incorrect answer such as a frequent misconception  {{You can specify optional feedback for none, a subset, or all of the answers.}}

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||
`;

const markdownWithImage = `<p>You can use this template as a guide to the simple editor markdown and OLX markup to</p>


<p><img src="/asset-v1:RaccoonGang+TT-101+2019_T1+type@asset+block@IMG_20190529_172209.jpg" alt="image" /></p>

[x] a correct answer {{ selected: You can specify optional }, { unselected: You can specify optional }}
[ ] an incorrect answer {{ selected: You can specify optional feedback for none, all, or a subset of the answers. }, { unselected: You can specify optional feedback for selecte }}
[x] a correct answer
[ ] hz ^)t

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||`;


window.LXCData = window.LXCData || {};
window.LXCData.markdown = process.env.NODE_ENV === 'development' ? markdownWithImage : window.LXCData.markdown;


function getHints() {

    if (!window.LXCData.markdown || !window.LXCData.markdown.trim()) {
        return [];
    }
    let hints = [];

    function getHint(row) {
        let hint = '';
        if (row.startsWith('||')) {
            const hintStart = row.indexOf('||');
            const hintEnd = row.slice(hintStart + 2).indexOf('||');
            hint = row.slice(hintStart + 2, hintEnd + 2);
        }
        return hint;
    };
    for (let d in window.LXCData.markdown.split('\n')) {
        let row = window.LXCData.markdown.split('\n')[d];
        const hint = getHint(row);
        if (hint.length) {
            hints.push({
                id: d,
                value: hint
            })
        }
    };
    return hints;
};


function getShortAnswerOptions() {
    const textOption = {id:1, value: 'text', label: 'text'};
    const numberOption = {id:2, value: 'number', label: 'number'};
    const typeOptions = [
        textOption,
        numberOption
    ];
    if (!window.LXCData.markdown || !window.LXCData.markdown.trim()) {
        return {
            typeOptions: typeOptions,
            shortAnswersList: []
        };
    }
    let markdownListData = window.LXCData.markdown.split('\n');
    let shortAnswersList = [];
    let gotAnswer = false;
    for (let i in markdownListData) {
        const row = markdownListData[i].trim();
        const feedbackStart = row.indexOf('{{');
        const feedbackEnd = row.indexOf('}}');
        let feedback = '';
        let answer = '';
        let correct = true;
        if (row.startsWith('=') && !gotAnswer) {
            gotAnswer = true;
            if (feedbackStart > -1) {
                feedback = row.slice(feedbackStart+2, feedbackEnd);
                answer = row.slice(1, feedbackStart).trim();
            } else {
                answer = row.slice(1).trim();
            }
        } else if (row.startsWith('=') && gotAnswer) {
            break;
        } else if (gotAnswer && row.startsWith('or=')) {  // the next correct answer
            if (feedbackStart > -1) {
                answer = row.slice(3, feedbackStart).trim();
                feedback = row.slice(feedbackStart+2, feedbackEnd);
            } else {
                answer = row.slice(3).trim();
            }
        } else if (gotAnswer && row.startsWith('not=')) {  // the incorrect answer
            if (feedbackStart > -1) {
                answer = row.slice(4, feedbackStart).trim();
                feedback = row.slice(feedbackStart+2, feedbackEnd);
            } else {
                answer = row.slice(4).trim();
            }
            correct = false;
        }
        const currentType = !isNaN(answer) ? numberOption : textOption;
        if (answer) {

            shortAnswersList.push({
                id : shortAnswersList.length,
                value: answer,
                currentType: currentType,
                feedback: feedback,
                correct: correct
            })
        }
    };
    return {
        typeOptions: typeOptions,
        shortAnswersList: shortAnswersList
    }
}


function getMultipleChoiceOptions() {
    let multipleChoiceOptions = [];
    let data = {
        multiSelectAnswersList: multipleChoiceOptions,
        groupFeedbackList: []
    };
    if (!window.LXCData.markdown || !window.LXCData.markdown.trim()) {
        return data;
    }
    let markdownListData = window.LXCData.markdown.split('\n');
    let feedback = '';
    let counter = 0;
    for (let d in markdownListData) {
        let row = markdownListData[d];
        // multiple choices
        if (row.startsWith('[ ]') || row.startsWith('[x]')) {

            // title
            let title = row.slice(row.indexOf(']') + 1).trim();

            const feedbacksStart = row.indexOf('{{');
            const selectedFeedbackStart = row.indexOf('selected:');
            const selectedFeedbackEnd = row.slice(selectedFeedbackStart + 1).indexOf('}') + selectedFeedbackStart;
            const unselectedFeedbackStart = row.indexOf('unselected:');
            const unselectedFeedbackEnd = row.slice(unselectedFeedbackStart + 1).indexOf('}}') + unselectedFeedbackStart;

            let selectedFeedback = '';
            let unselectedFeedback = '';
            let titleChanged = false;
            if (feedbacksStart !== -1 && selectedFeedbackStart !== -1) {
                selectedFeedback = row.slice(selectedFeedbackStart + 10, selectedFeedbackEnd);
                title = row.slice(row.indexOf(']') + 1, feedbacksStart).trim();
                titleChanged = true;
            }
            if (feedbacksStart !== -1 && unselectedFeedbackStart !== -1) {
                unselectedFeedback = row.slice(unselectedFeedbackStart + 12, unselectedFeedbackEnd + 1);
                if (!titleChanged) {
                    row.slice(row.indexOf(']') + 1, unselectedFeedbackEnd).trim();
                }
            }
            multipleChoiceOptions.push({
                id: counter++,
                title: title,
                correct: row.startsWith('[ ]') ? false : true,
                selectedFeedback: selectedFeedback,
                unselectedFeedback: unselectedFeedback
            });
        }
        // group Feedback
        if (row.startsWith('{{')) {
            const groupFeedbackEnd = row.indexOf('}}');
            const goupStart = row.indexOf('((');
            const groupEnd = row.indexOf('))');
            let t = row.slice(goupStart+2, groupEnd).split(' ');
            let groupChoices = [];
            for (let i in t) {
                let letter = t[i];
                groupChoices.push(groupFeedbackWordMapping.indexOf(letter));
            }
            feedback = row.slice(groupEnd+2, groupFeedbackEnd).trim()

            if (groupChoices.length && feedback) {
                data.groupFeedbackList.push({
                    id: data.groupFeedbackList.length,
                    answers: groupChoices,
                    feedback: feedback
                })
            }

        }
    };
    return data;
}

function getSingleChoiceOptions() {

    if (!window.LXCData.markdown || !window.LXCData.markdown.trim()) {
        return {
            singleSelectAnswersList: [],
            selectedType: {
                value: 'radio',
                label: 'Radio button'
            },
            accessibleTypes: [{
                    value: 'radio',
                    label: 'Radio button'
                },
                {
                    value: 'select',
                    label: 'Select list'
                },
            ]
        };
    }

    let singleChoiceOptions = [];
    let dropDownMode = false;
    let markdownListData = window.LXCData.markdown.split('\n');
    for (let d in markdownListData) {
        let row = markdownListData[d].trim();
        if (row.startsWith('[[')) {
            dropDownMode = true;
            continue;
        }
        if (row.startsWith(']]')) {
            break;
        }
        if (dropDownMode) {

            if (row.startsWith('(')) {
                let feedback = '';
                let title = row.slice(row.indexOf('(') + 1, row.indexOf(')')).trim();
                const feedbackStart = row.indexOf('{{');
                const feedbackEnd = row.indexOf('}}');
                if (feedbackStart !== -1 && feedbackEnd !== -1 && feedbackEnd > feedbackStart) { // assum the row contains feedback
                    feedback = row.slice(feedbackStart + 2, feedbackEnd).trim();
                    title = title.slice(0, feedbackStart).trim();
                }
                let correct = true;
                singleChoiceOptions.push({
                    id: Number(d),
                    title: title,
                    correct: correct,
                    feedback: feedback
                });

            } else {
                let feedback = '';
                let title = '';
                // let title = row.slice(row.indexOf(')') + 1).trim();

                const feedbackStart = row.indexOf('{{');
                const feedbackEnd = row.indexOf('}}');
                if (feedbackStart !== -1 && feedbackEnd !== -1 && feedbackEnd > feedbackStart) { // assum the row contains feedback
                    feedback = row.slice(feedbackStart + 2, feedbackEnd).trim();
                    title = row.slice(0, feedbackStart).trim();
                } else {
                    title = row.trim();
                }
                let correct = false;
                singleChoiceOptions.push({
                    id: Number(d),
                    title: title,
                    correct: correct,
                    feedback: feedback
                });
            }

        } else {

            if (row.startsWith('( )') || row.startsWith('(x)')) {
                let feedback = '';
                let title = row.slice(row.indexOf(')') + 1).trim();
                const feedbackStart = row.indexOf('{{');
                const feedbackEnd = row.indexOf('}}');
                if (feedbackStart !== -1 && feedbackEnd !== -1 && feedbackEnd > feedbackStart) { // assum the row contains feedback
                    feedback = row.slice(feedbackStart + 2, feedbackEnd).trim();
                    title = title.slice(0, feedbackStart - 4).trim();
                }
                let correct = row.startsWith('(x)') ? true : false;
                singleChoiceOptions.push({
                    id: Number(d),
                    title: title,
                    correct: correct,
                    feedback: feedback
                });

            }
        }
    };

    return {
        singleSelectAnswersList: singleChoiceOptions,
        selectedType: dropDownMode ? {
            value: 'select',
            label: 'Select list'
        } : {
            value: 'radio',
            label: 'Radio button'
        },
        accessibleTypes: [{
                value: 'radio',
                label: 'Radio button'
            },
            {
                value: 'select',
                label: 'Select list'
            },
        ]
    };
}

function getEditorData() {

    if (!window.LXCData.markdown || !window.LXCData.markdown.trim()) {
        return '';
    }
    let description = '';
    const markdownData = window.LXCData.markdown.trim().split('\n');
    for (let i in markdownData) {
        const row = markdownData[i];
        if (['{', '(', '[', '=', '|'].indexOf(row.trim()[0]) === -1) {
            description += row + '\n';
        } else {
            break;
        }
    }
    return description;
}

function getScorringSettings() {
    return {
        selectedAttemptsOption: window.LXCData.max_attempts,
        selectedPointOption: window.LXCData.weight
    }
}

export {
    getMultipleChoiceOptions,
    getSingleChoiceOptions,
    getEditorData,
    getHints,
    getScorringSettings,
    getShortAnswerOptions
};
