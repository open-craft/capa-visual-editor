import * as markdowns from './testHelpers/markdown';
import {
    getMultipleChoiceOptions,
    getSingleChoiceOptions,
    getEditorData,
    getHints,
    getScorringSettings,
    getShortAnswerOptions
} from '../dataParser';

describe('Default edx markdown', () => {
    it('SingleSelect - dropdownWithHintsAndFeedback', () => {
        expect(getSingleChoiceOptions(markdowns.dropdownWithHintsAndFeedback)).toEqual({
            "accessibleTypes": [
                {"label": "Radio button", "value": "radio"},
                {"label": "Select list", "value": "select"}
            ],
            "selectedType": {
                "label": "Select list", "value": "select"
            },
            "singleSelectAnswersList": [
                {"correct": false, "feedback": "You can specify optional feedback like this, which appears after this answer is submitted.", "id": 3, "title": "an incorrect answer"},
                {"correct": true, "feedback": "Some feedback", "id": 4, "title": "the correct answer"},
                {"correct": false, "feedback": "You can specify optional feedback for none, a subset, or all of the answers.", "id": 5, "title": "an incorrect answer"}
            ]
        });
    });
    it('Hints - dropdownWithHintsAndFeedback', () => {
        expect(getHints(markdowns.dropdownWithHintsAndFeedback)).toEqual([
            {id: 0, value: "You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button."},
            {id: 1, value: "If you add more than one hint, a different hint appears each time learners select the hint button."}
        ]);
    });
})
