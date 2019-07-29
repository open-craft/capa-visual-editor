import React from 'react';
import './assets/scss/app.scss';
import SingleSelectContainer from './containers/SingleSelectContainer';
import MultiSelectContainer from './containers/MultiSelectContainer';
import ShortAnswerContainer from './containers/ShortAnswerContainer';
import store from './store/store';
import { setMarkdownData } from './markdownXmlParser';

function handleStateChange() {
  let globalState = store.getState();
  let markdown = '';
  if (globalState.singleSelectAnswers.singleSelectAnswersList.length) {
      // prepare data for a single markdown

      // reducers to work with
      
      // singleSelectAnswers, singleSelectEditor
      const title = globalState.singleSelectEditor.content.replace(/<(.+)>&nbsp;<\/(.+)>/g, '\n');
      markdown += title + '\n';
      for(let i in globalState.singleSelectAnswers.singleSelectAnswersList) {
        const answerObj = globalState.singleSelectAnswers.singleSelectAnswersList[i];
        const feedback = answerObj.feedback ? ` {{${answerObj.feedback}}}` : '';
        const answerMarkdown = `(${answerObj.correct ? 'x' : ' '}) ${answerObj.title}${feedback}\n`;
        markdown += answerMarkdown;
      }

  } else if (globalState.multiSelectAnswers.multiSelectAnswersList.length) {
      // prepare data for a multiple markdown

      // reducers to work with
      // multiAdvancedSettings, multiSelectAnswers, multiSelectEditor

      const title = globalState.multiSelectEditor.content.replace(/<(.+)>&nbsp;<\/(.+)>/g, '\n');
      markdown += title + '\n';
      for(let i in globalState.multiSelectAnswers.multiSelectAnswersList) {
        const answerObj = globalState.multiSelectAnswers.multiSelectAnswersList[i];
        const selectedFeedback = answerObj.selectedFeedback ? `selected: ${answerObj.selectedFeedback}` : '';
        const unselectedFeedback = answerObj.unselectedFeedback ? `unselected: ${answerObj.unselectedFeedback}` : '';
        let feedbacks = '';
        if (selectedFeedback.length || unselectedFeedback.length) {
          let both = (selectedFeedback.length > 0 && unselectedFeedback.length > 0);
          feedbacks = both ? ` {{ ${selectedFeedback} }, { ${unselectedFeedback} }}` : `{{ ${selectedFeedback||unselectedFeedback} }}`;
        }
        const answerMarkdown = `[${answerObj.correct ? 'x' : ' '}] ${answerObj.title}${feedbacks}\n`;
        markdown += answerMarkdown;
      }
  }
  console.log(markdown);
  setMarkdownData(markdown);

}

const unsubscribe = store.subscribe(handleStateChange);

export default class  App extends React.Component {

  componentWillUnmount() {
    unsubscribe();
  }

  render() {
    const storeData = store.getState();
    let Container;
    if (storeData.singleSelectAnswers.singleSelectAnswersList.length) {
      Container = SingleSelectContainer;
    } else if (storeData.multiSelectAnswers.multiSelectAnswersList.length) {
      Container = MultiSelectContainer;
    }

    return (
      <div className="lxc-unit-wrapper">
        <div className="lxc-unit-content-bar">
            <Container/>
        </div>
        <div />
    </div>
    )
  }
}
