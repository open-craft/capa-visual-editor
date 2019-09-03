import { groupFeedbackWordMapping } from './Utils';
import * as markdown from './tests/testHelpers/markdown';


window.LXCData = window.LXCData || {};
window.LXCData.markdown = process.env.NODE_ENV === 'development' ? markdown.textInputWithHintsAndFeedback : window.LXCData.markdown;

function getHints(testMarkdown) {
    const markdown = process.env.NODE_ENV === 'test' ? testMarkdown : window.LXCData.markdown;
    if (!markdown || !markdown.trim()) {
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
    }
    for (let d in markdown.split('\n')) {
        let row = markdown.split('\n')[d];
        const hint = getHint(row);
        if (hint.length) {
            hints.push({
                id: hints.length,
                value: hint
            });
        }
    }
    return hints;
}

function getShortAnswerOptions(testMarkdown) {
    const textOption = {id:1, value: 'text', label: 'text'};
    const numberOption = {id:2, value: 'number', label: 'number'};
    const typeOptions = [
        textOption,
        numberOption
    ];
    if (process.env.NODE_ENV !== 'test' && (!window.LXCData.markdown || !window.LXCData.markdown.trim())) {
        return {
            typeOptions: typeOptions,
            shortAnswersList: []
        };
    }
    let markdownListData = process.env.NODE_ENV === 'test' ? testMarkdown : window.LXCData.markdown.split('\n');
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

function getMultipleChoiceOptions(testMarkdown) {
    let multipleChoiceOptions = [];
    let data = {
        multiSelectAnswersList: multipleChoiceOptions,
        groupFeedbackList: []
    };
    if (process.env.NODE_ENV !== 'test' && (!window.LXCData.markdown || !window.LXCData.markdown.trim())) {
        return data;
    }
    let markdownListData = process.env.NODE_ENV === 'test' ? testMarkdown : window.LXCData.markdown.split('\n');
    let feedback = '';
    let counter = 0;
    for (let d in markdownListData) {
        let row = markdownListData[d];
        // multiple choices
        if (row.startsWith('[ ]') || row.startsWith('[x]')) {

            // title
            let title = row.slice(row.indexOf(']') + 1).trim();

            const feedbacksStart = row.indexOf('{{');
            const selectedFeedbackStart = row.indexOf(' selected:') || row.indexOf('{selected:');  // two ways to define selected feedback
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
                    title = row.slice(row.indexOf(']') + 1, feedbacksStart).trim();
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

function getSingleChoiceOptions(testMarkdown) {
    const markdown = process.env.NODE_ENV === 'test' ? testMarkdown : window.LXCData.markdown;
    if (!markdown || !markdown.trim()) {
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
    let markdownListData = markdown.split('\n');
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

function getEditorData(testMarkdown) {

    const markdown = process.env.NODE_ENV === 'test' ? testMarkdown : window.LXCData.markdown;
    if (!markdown || !markdown.trim()) {
        return '';
    }
    let description = '';
    const markdownData = markdown.trim().split('\n');
    for (let i in markdownData) {
        const row = markdownData[i];
        if (['{', '(', '[', '=', '|'].indexOf(row.trim()[0]) === -1) {
            const questionTextStart = row.indexOf('>>');
            const questionTextEnd = row.indexOf('<<');
            let questionText = row;
            if (questionTextStart !== -1 && questionTextEnd !== -1 && (questionTextEnd > questionTextStart)) {
                questionText = row.replace('>>', '<p>').replace('<<', '</p>');
            }
            description += questionText + '\n';
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
