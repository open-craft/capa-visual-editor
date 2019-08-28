const singleSelect = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<

( ) an incorrect answer
(x) the correct answer
( ) an incorrect answer`;

const singleSelectWithHintAndFeedback = `You can use this template as a guide to the simple editor markdown and OLX markup to use for multiple choice with hints and feedback problems. Edit this component to replace this template with your own assessment.

>>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this. <<

( ) an incorrect answer {{You can specify optional feedback like this, which appears after this answer is submitted.}}
(x) the correct answer
( ) an incorrect answer {{You can specify optional feedback for none, a subset, or all of the answers.}}

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||`;

const multiSelect = `You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.

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

const multipleSelectWithUnselected = `You can use this template as a guide to the simple editor markdown and OLX markup to use for checkboxes with hints and feedback problems. Edit this component to replace this template with your own assessment.

<p>Add the question text, or prompt, here. This text is required.||You can add an optional tip or note related to the prompt like this.</p>

[x] a correct answer {{ selected: You can specify optional feedback that appears after the learner selects and submits this answer. }, { unselected: You can specify optional feedback that appears after the learner clears and submits this answer. }}
[ ] an incorrect answer {{ unselected: example }}
[ ] an incorrect answer {{ selected: You can specify optional feedback for none, all, or a subset of the answers. }, { unselected: You can specify optional feedback for selected answers, cleared answers, or both. }}
[x] a correct answer

{{ ((A B D)) You can specify optional feedback for a combination of answers which appears after the specified set of answers is submitted. }}
{{ ((A B C D)) You can specify optional feedback for one, several, or all answer combinations. }}

||You can add an optional hint like this. Problems that have a hint include a hint button, and this text appears the first time learners select the button.||
||If you add more than one hint, a different hint appears each time learners select the hint button.||`;

export {
    multipleSelectWithUnselected,
    markdownWithImage,
    textInputWithHintsAndFeedback,
    numericalWithHintsFeedback,
    dropdownWithHintsAndFeedback,
    multiSelect,
    singleSelectWithHintAndFeedback,
    singleSelect
};
