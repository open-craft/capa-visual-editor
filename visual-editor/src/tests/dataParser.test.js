import * as markdowns from './testHelpers/markdown';
import {
    getMultipleChoiceOptions,
    getSingleChoiceOptions,
    getEditorData,
    getHints,
    getShortAnswerOptions
} from '../dataParser';

describe('Default edx markdown (dropdownWithHintsAndFeedback)', () => {
    it('Single select - dropdownWithHintsAndFeedback', () => {
        expect(getSingleChoiceOptions(markdowns.dropdownWithHintsAndFeedback)).toEqual({
            "accessibleTypes": [
                {"label": "Radio button", "value": "radio"},
                {"label": "Select list", "value": "select"}
            ],
            "selectedType": {
                "label": "Select list", "value": "select"
            },
            "singleSelectAnswersList": [
                {
                    "correct": false,
                    "feedback": "You can specify optional feedback like this, which appears after this answer is submitted.",
                    "id": 3,
                    "title": "an incorrect answer"
                },
                {"correct": true, "feedback": "Some feedback", "id": 4, "title": "the correct answer"},
                {
                    "correct": false,
                    "feedback": "You can specify optional feedback for none, a subset, or all of the answers.",
                    "id": 5,
                    "title": "an incorrect answer"
                }
            ]
        });
    });
    it('Hints - dropdownWithHintsAndFeedback', () => {
        expect(getHints(markdowns.dropdownWithHintsAndFeedback)).toEqual([
            {
                id: 0,
                value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."
            },
            {
                id: 1,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
    it('Editor data - dropdownWithHintsAndFeedback', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for dropdown with hints and feedback problems. Edit this component to replace this template with your own assessment.
<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. </p>`;
        expect(getEditorData(markdowns.dropdownWithHintsAndFeedback).trim()).toEqual(response.trim());
    });
});

describe('Default edx markdown (singleSelect)', () => {
    it('Single select - singleSelect', () => {
        expect(getSingleChoiceOptions(markdowns.singleSelect)).toEqual({
            "accessibleTypes": [
                {"label": "Radio button", "value": "radio"},
                {"label": "Select list", "value": "select"}
            ],
            "selectedType": {
                "label": "Radio button", "value": "radio"
            },
            "singleSelectAnswersList": [
                {"correct": false, "feedback": "", "id": 4, "title": "an incorrect answer"},
                {"correct": true, "feedback": "", "id": 5, "title": "the correct answer"},
                {"correct": false, "feedback": "", "id": 6, "title": "an incorrect answer"}
            ]
        });
    });
    it('Editor data - singleSelect', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice problems. Edit this component to replace this template with your own assessment.

<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. </p>`;
        expect(getEditorData(markdowns.singleSelect).trim()).toEqual(response.trim());
    });
});

describe('Default edx markdown (singleSelectWithHintAndFeedback)', () => {
    it('Single select - singleSelectWithHintAndFeedback', () => {
        expect(getSingleChoiceOptions(markdowns.singleSelectWithHintAndFeedback)).toEqual({
            "accessibleTypes": [
                {"label": "Radio button", "value": "radio"},
                {"label": "Select list", "value": "select"}
            ],
            "selectedType": {
                "label": "Radio button", "value": "radio"
            },
            "singleSelectAnswersList": [
                {
                    "correct": false,
                    "feedback": "You can specify optional feedback like this, which appears after this answer is submitted.",
                    "id": 4,
                    "title": "an incorrect answer"
                },
                {"correct": true, "feedback": "", "id": 5, "title": "the correct answer"},
                {
                    "correct": false,
                    "feedback": "You can specify optional feedback for none, a subset, or all of the answers.",
                    "id": 6,
                    "title": "an incorrect answer"
                }
            ]
        });
    });
    it('Hints - singleSelectWithHintAndFeedback', () => {
        expect(getHints(markdowns.singleSelectWithHintAndFeedback)).toEqual([
            {
                id: 0,
                value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."
            },
            {
                id: 1,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
    it('Editor data - singleSelectWithHintAndFeedback', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.

<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. </p>`;
        expect(getEditorData(markdowns.singleSelectWithHintAndFeedback).trim()).toEqual((response.trim()));
    });
});

describe('Default edx markdown (multiSelect)', () => {
    it('Multi select - multiSelect', () => {
        expect(getMultipleChoiceOptions(markdowns.multiSelect.split('\n'))).toEqual({
            groupFeedbackList: [
                {
                    id: 0,
                    answers: [0, 1, 3],
                    feedback: "You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted."
                },
                {
                    id: 1,
                    answers: [0, 1, 2, 3],
                    feedback: "You can specify optional feedback for one, several, or all answer combinations."
                }
            ],
            multiSelectAnswersList: [
                {
                    id: 0,
                    title: "a correct answer",
                    correct: true,
                    selectedFeedback: " You can specify optional feedback that appears after the learner selects and submits this answer.",
                    unselectedFeedback: "You can specify optional feedback that appears after the learner clears and submits this answer."
                },
                {id: 1, title: "an incorrect answer", correct: false, selectedFeedback: "", unselectedFeedback: ""},
                {
                    id: 2,
                    title: "an incorrect answer",
                    correct: false,
                    selectedFeedback: " You can specify optional feedback for none, all, or a subset of the answers.",
                    unselectedFeedback: "You can specify optional feedback for selected answers, cleared answers, or both."
                },
                {id: 3, title: "a correct answer", correct: true, selectedFeedback: "", unselectedFeedback: ""},
            ]
        })
    });
    it('Hints - multiSelect', () => {
        expect(getHints(markdowns.multiSelect)).toEqual([
            {
                id: 0,
                value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."
            },
            {
                id: 1,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
    it('Editor data - multiSelect', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.

<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this.</p>`;
        expect(getEditorData(markdowns.multiSelect).trim()).toEqual((response.trim()));
    });
});

describe('Default edx markdown (numericalWithHintsFeedback)', () => {
    it('Short answer options - numericalWithHintsFeedback', () => {
        expect(getShortAnswerOptions(markdowns.numericalWithHintsFeedback.split('\n'))).toEqual({
            shortAnswersList: [
                {
                    correct: true,
                    currentType: {id: 1, label: "text", value: "text"},
                    feedback: "You can specify optional feedback like this, which appears after this answer is submitted.",
                    id: 0,
                    value: "100 +-5"
                }
            ],
            typeOptions: [
                {id: 1, label: "text", value: "text"},
                {id: 2, label: "number", value: "number"}
            ]
        })
    });
    it('Hints - numericalWithHintsFeedback', () => {
        expect(getHints(markdowns.numericalWithHintsFeedback)).toEqual([
            {
                id: 0,
                value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."
            },
            {
                id: 1,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
    it('Editor data - numericalWithHintsFeedback', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for numerical input with hints and feedback problems. Edit this component to replace this template with your own assessment.

<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. </p>`;
        expect(getEditorData(markdowns.numericalWithHintsFeedback).trim()).toEqual((response.trim()));
    });
});

describe('Default edx markdown (textInputWithHintsAndFeedback)', () => {
    it('Short answer options - textInputWithHintsAndFeedback', () => {
        expect(getShortAnswerOptions(markdowns.textInputWithHintsAndFeedback.split('\n'))).toEqual({
            shortAnswersList: [
                {
                    correct: true,
                    currentType: {id: 1, value: "text", label: "text"},
                    feedback: "You can specify optional feedback like this, which appears after this answer is submitted.",
                    id: 0,
                    value: "the correct answer"
                }, {
                    correct: true,
                    currentType: {id: 1, value: "text", label: "text"},
                    feedback: "",
                    id: 1,
                    value: "optional acceptable variant of the correct answer"
                }, {
                    correct: false,
                    currentType: {id: 1, value: "text", label: "text"},
                    feedback: "You can specify optional feedback for none, a subset, or all of the answers.",
                    id: 2,
                    value: "optional incorrect answer such as a frequent misconception"
                }
            ],
            typeOptions: [
                {id: 1, label: "text", value: "text"},
                {id: 2, label: "number", value: "number"}
            ]
        })
    });
    it('Hints - textInputWithHintsAndFeedback', () => {
        expect(getHints(markdowns.textInputWithHintsAndFeedback)).toEqual([
            {
                id: 0,
                value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."
            },
            {
                id: 1,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
    it('Editor data - textInputWithHintsAndFeedback', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for text input with hints and feedback problems. Edit this component to replace this template with your own assessment.

<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. </p>`;
        expect(getEditorData(markdowns.textInputWithHintsAndFeedback).trim()).toEqual((response.trim()));
    });
});

describe('Custom edx markdown (markdownWithImage)', () => {
    it('Multi select - markdownWithImage', () => {
        expect(getMultipleChoiceOptions(markdowns.markdownWithImage.split('\n'))).toEqual({
            multiSelectAnswersList: [
                {
                    id: 0,
                    title: "a correct answer",
                    correct: true,
                    selectedFeedback: " You can specify optional",
                    unselectedFeedback: "You can specify optional "
                },
                {
                    id: 1,
                    title: "an incorrect answer",
                    correct: false,
                    selectedFeedback: " You can specify optional feedback for none, all, or a subset of the answers.",
                    unselectedFeedback: "You can specify optional feedback for selecte "
                },
                {id: 2, title: "a correct answer", correct: true, selectedFeedback: "", unselectedFeedback: ""},
                {id: 3, title: "hz ^)t", correct: false, selectedFeedback: "", unselectedFeedback: ""}
            ],
            groupFeedbackList: []
        })
    });
    it('Hints - markdownWithImage', () => {
        expect(getHints(markdowns.markdownWithImage)).toEqual([
            {
                id: 0,
                value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."
            },
            {
                id: 1,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
    it('Editor data - markdownWithImage', () => {
        const response = `<p>You can use this template as a guide to the simple editor markdown and OLX markup to</p>


<p><img src="/asset-v1:RaccoonGang+TT-101+2019_T1+type@asset+block@IMG_20190529_172209.jpg" alt="image" /></p>`;
        expect(getEditorData(markdowns.markdownWithImage).trim()).toEqual((response.trim()));
    });
});

describe('Custom edx markdown (multipleSelectWithUnselected)', () => {
    it('Multi select - multipleSelectWithUnselected', () => {
        expect(getMultipleChoiceOptions(markdowns.multipleSelectWithUnselected.split('\n'))).toEqual({
            multiSelectAnswersList: [
                {
                    id: 0,
                    title: "a correct answer",
                    correct: true,
                    selectedFeedback: " You can specify optional feedback that appears after the learner selects and submits this answer.",
                    unselectedFeedback: "You can specify optional feedback that appears after the learner clears and submits this answer. "
                },
                {
                    id: 1,
                    title: "an incorrect answer",
                    correct: false,
                    selectedFeedback: "",
                    unselectedFeedback: "example "
                },
                {
                    id: 2,
                    title: "an incorrect answer",
                    correct: false,
                    selectedFeedback: " You can specify optional feedback for none, all, or a subset of the answers.",
                    unselectedFeedback: "You can specify optional feedback for selected answers, cleared answers, or both. "
                },
                {id: 3, title: "a correct answer", correct: true, selectedFeedback: "", unselectedFeedback: ""}
            ],
            groupFeedbackList: [
                {
                    id: 0,
                    answers: [0, 1, 3],
                    feedback: "You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted."
                },
                {
                    id: 1,
                    answers: [0, 1, 2, 3],
                    feedback: "You can specify optional feedback for one, several, or all answer combinations."
                }
            ]
        })
    });
    it('Hints - multipleSelectWithUnselected', () => {
        expect(getHints(markdowns.multipleSelectWithUnselected)).toEqual([
            {
                id: 0,
                value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."
            },
            {
                id: 1,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
    it('Editor data - multipleSelectWithUnselected', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.

<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this.</p>`;
        expect(getEditorData(markdowns.multipleSelectWithUnselected).trim()).toEqual((response.trim()));
    });
});

describe('Broken edx markdown (singleSelect)', () => {
    it('Broken start of editor data - singleSelectWithBrokenStartDescription', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice problems. Edit this component to replace this template with your own assessment.

>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<`;
        expect(getEditorData(markdowns.singleSelectWithBrokenStartOfDescription).trim()).toEqual(response.trim());
    });
    it('Broken end of editor data - singleSelectWithBrokenEndOfDescription', () => {
        const response = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <`;
        expect(getEditorData(markdowns.singleSelectWithBrokenEndOfDescription).trim()).toEqual(response.trim());
    });
    it('Unselected single select - singleSelectUnselected', () => {
        expect(getSingleChoiceOptions(markdowns.singleSelectUnselected)).toEqual({
            "accessibleTypes": [
                {"label": "Radio button", "value": "radio"},
                {"label": "Select list", "value": "select"}
            ],
            "selectedType": {
                "label": "Radio button", "value": "radio"
            },
            "singleSelectAnswersList": [
                {"correct": false, "feedback": "", "id": 4, "title": "an incorrect answer"},
                {"correct": false, "feedback": "", "id": 5, "title": "the correct answer"},
                {"correct": false, "feedback": "", "id": 6, "title": "an incorrect answer"}
            ]
        });
    });
    it('Single select without item title - singleSelectsWithoutChoiceItemTitle', () => {
        expect(getSingleChoiceOptions(markdowns.singleSelectsWithoutItemTitle)).toEqual({
            "accessibleTypes": [
                {"label": "Radio button", "value": "radio"},
                {"label": "Select list", "value": "select"}
            ],
            "selectedType": {
                "label": "Radio button", "value": "radio"
            },
            "singleSelectAnswersList": [
                {"correct": false, "feedback": "", "id": 4, "title": ""},
                {"correct": true, "feedback": "", "id": 5, "title": "the correct answer"},
                {"correct": false, "feedback": "", "id": 6, "title": "an incorrect answer"}
            ]
        });
    });
    it('Single select with broken feedback - singleSelectWithBrokenHintAndFeedback', () => {
        expect(getSingleChoiceOptions(markdowns.singleSelectWithBrokenHintAndFeedback)).toEqual({
            "accessibleTypes": [
                {"label": "Radio button", "value": "radio"},
                {"label": "Select list", "value": "select"}
            ],
            "selectedType": {
                "label": "Radio button", "value": "radio"
            },
            "singleSelectAnswersList": [
                {"correct": false, "feedback": "", "id": 4, "title": "an incorrect answer {You can specify optional feedback like this, which appears after this answer is submitted.}}"},
                {"correct": true, "feedback": "", "id": 5, "title": "the correct answer"},
                {"correct": false, "feedback": "You can specify optional feedback for none, a subset, or all of the answers.", "id": 6, "title": "an incorrect answer"}
            ]
        });
    });
    it('Single select with broken hints - singleSelectWithBrokenHintAndFeedback', () => {
        expect(getHints(markdowns.singleSelectWithBrokenHintAndFeedback)).toEqual([
            {
                id: 0,
                value: "If you add more than one hint, a different hint appears each time learners select the hint button."
            }
        ]);
    });
});

describe('Broken edx markdown (Multi select)', () => {
    it('Unselected multiple choice - brokenMultiSelectWithGroupFeedback', () => {
        expect(getMultipleChoiceOptions(markdowns.brokenMultiSelectWithGroupFeedback.split('\n')).multiSelectAnswersList[0].correct).toBe(false);
        expect(getMultipleChoiceOptions(markdowns.brokenMultiSelectWithGroupFeedback.split('\n')).multiSelectAnswersList[1].correct).toBe(false);
        expect(getMultipleChoiceOptions(markdowns.brokenMultiSelectWithGroupFeedback.split('\n')).multiSelectAnswersList[2].correct).toBe(false);
        expect(getMultipleChoiceOptions(markdowns.brokenMultiSelectWithGroupFeedback.split('\n')).multiSelectAnswersList[3].correct).toBe(false);
    });
    it('Selected all multiple choice - selectedAllMultiSelectAndBrokenFeedback', () => {
        expect(getMultipleChoiceOptions(markdowns.selectedAllMultiSelectAndBrokenFeedback.split('\n')).multiSelectAnswersList[0].correct).toBe(true);
        expect(getMultipleChoiceOptions(markdowns.selectedAllMultiSelectAndBrokenFeedback.split('\n')).multiSelectAnswersList[1].correct).toBe(true);
        expect(getMultipleChoiceOptions(markdowns.selectedAllMultiSelectAndBrokenFeedback.split('\n')).multiSelectAnswersList[2].correct).toBe(true);
        expect(getMultipleChoiceOptions(markdowns.selectedAllMultiSelectAndBrokenFeedback.split('\n')).multiSelectAnswersList[3].correct).toBe(true);
    });
    it('Broken feedback - selectedAllMultiSelectAndBrokenFeedback', () => {
        expect(getMultipleChoiceOptions(markdowns.selectedAllMultiSelectAndBrokenFeedback.split('\n')).multiSelectAnswersList).toEqual([
            {id: 0, title: "a correct answer { selected: You can specify optional feedback that appears after the learner selects and submits this answer. }, { unselected: You can specify optional feedback that appears after the learner clears and submits this answer.}}", correct: true, selectedFeedback: "", unselectedFeedback: ""},
            {id: 1, title: "an incorrect answer", correct: true, selectedFeedback: "", unselectedFeedback: ""},
            {id: 2, title: "an incorrect answer", correct: true, selectedFeedback: "", unselectedFeedback: "You can specify optional feedback for selected answers, cleared answers, or both."},
            {id: 3, title: "a correct answer", correct: true, selectedFeedback: "", unselectedFeedback: ""}
        ]);
    });
    it('Broken group feedback - brokenMultiSelectWithGroupFeedback', () => {
        expect(getMultipleChoiceOptions(markdowns.brokenMultiSelectWithGroupFeedback.split('\n')).groupFeedbackList).toEqual([
            {
                id: 0,
                answers: [0, 1, 2, 3],
                feedback: "You can specify optional feedback for one, several, or all answer combinations."
            }
        ]);
    });
});

describe('Brocken edx markdown (Short answer)', () => {
    it('Broken acceptable variant - brokenAcceptableVariantTextInputWithHintsAndFeedback', () => {
        expect(getShortAnswerOptions(markdowns.brokenAcceptableVariantTextInputWithHintsAndFeedback.split('\n')).shortAnswersList).toEqual([]);
    });
    it('Broken optional acceptable variant - brokenOptionalAcceptableVariantTextInputWithHintsAndFeedback', () => {
        expect(getShortAnswerOptions(markdowns.brokenOptionalAcceptableVariantTextInputWithHintsAndFeedback.split('\n')).shortAnswersList).toEqual([
            {
                id: 0,
                value: "the correct answer",
                currentType: {id: 1, value: "text", label: "text"},
                feedback: "You can specify optional feedback like this, which appears after this answer is submitted.",
                correct: true
            },
            {
                id: 1,
                value: "optional incorrect answer such as a frequent misconception",
                currentType: {id: 1, value: "text", label: "text"},
                feedback: "You can specify optional feedback for none, a subset, or all of the answers.",
                correct: false
            }
        ]);
    });
    it('Broken incorrect variant - brokenIncorrectVariantTextInputWithHintsAndFeedback', () => {
        expect(getShortAnswerOptions(markdowns.brokenIncorrectVariantTextInputWithHintsAndFeedback.split('\n')).shortAnswersList).toEqual([
            {
                id: 0,
                value: "the correct answer",
                currentType: {id: 1, value: "text", label: "text"},
                feedback: "You can specify optional feedback like this, which appears after this answer is submitted.",
                correct: true
            },
            {
                id: 1,
                value: "optional acceptable variant of the correct answer",
                currentType: {id: 1, value: "text", label: "text"},
                feedback: "",
                correct: true
            }
        ]);
    });
});
