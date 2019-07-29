/*
Singlechoice data structure:

<choiceresponse>                                - Required. Indicates that the problem is a checkbox problem.
    <label>                                     - Required. Identifies the question or prompt. You can include HTML tags within this element.
    <description>                               - Optional. Provides clarifying information about how to answer the question. You can include HTML tags within this element
    <checkboxgroup>                             - Required. Indicates the beginning of the list of options.
          <choice>                              - Required. Designates an answer option.
              <choicehint>                      - Optional. Specifies feedback for the answer.
          <compoundhint>                        - Optional. Specifies feedback for a specific combination of answers.
    <solution>                                  - Optional. Identifies the explanation or solution for the problem, or for one of the questions in a problem that contains more than one question.
                                                   This element contains an HTML division <div>. The division contains one or more paragraphs <p> of explanatory text.
<demandhint>                                    - Optional. Specifies hints for the learner. For problems that include multiple questions, the hints apply to the entire problem.
    <hint>                                      - Required. Specifies additional information that learners can access if needed.


*/

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
window.LXCData = window.LXCData || {};
window.LXCData.markdown = window.LXCData.markdown || multiMarkdown;



function getMultipleChoiceOptions() {
  let multipleChoiceOptions = [];
  for(let d in window.LXCData.markdown.split('\n')) {
    let row = window.LXCData.markdown.split('\n')[d];
    if (row.startsWith('[ ]') || row.startsWith('[x]')) {

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
        id: Number(d),
        title: title,
        correct: row.startsWith('[ ]') ? false : true,
        selectedFeedback: selectedFeedback,
        unselectedFeedback: unselectedFeedback
      });
    }
  };
  return multipleChoiceOptions;
}

function getSingleChoiceOptions() {
  let singleChoiceOptions = [];
  for(let d in window.LXCData.markdown.split('\n')) {
    let row = window.LXCData.markdown.split('\n')[d].trim();
    if (row.startsWith('( )') || row.startsWith('(x)')) {
      let feedback = '';
      let title = row.slice(row.indexOf(')') + 1).trim();
      const feedbackStart = row.indexOf('{{');
      const feedbackEnd = row.indexOf('}}');
      if (feedbackStart !== -1 && feedbackEnd !== -1 && feedbackEnd > feedbackStart) {  // assum the row contains feedback
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
  };
  return singleChoiceOptions;
}

function getEditorData() {
  const descriptionReg = /(.[^([]*)/;
  const matching = window.LXCData.markdown.match(descriptionReg);
  if (matching && matching.length) {
    return matching[1];
  } else {
    return '';
  }
}

function setMarkdownData(markdown) {
  window.LXCData.markdown = markdown;
  window.LXCData.markdownHasChanged = true;
}

export { getMultipleChoiceOptions, getSingleChoiceOptions, getEditorData, setMarkdownData };
