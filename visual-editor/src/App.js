import React from 'react';

import MultiSelectContainer from './containers/MultiSelectContainer';
import ShortAnswerContainer from './containers/ShortAnswerContainer';
import SingleSelectContainer from './containers/SingleSelectContainer';

import { groupFeedbackWordMapping } from './Utils';
import store from './store/store';


import './assets/scss/app.scss';

function getMarkdown(needToCompare=false) {
    let globalState = store.getState();
    let markdown = '';
    let hintsMarkdown = '\n';

    // hints
    if (globalState.hintSettings.hints.length) {

        for (let i in globalState.hintSettings.hints) {
            const hint = globalState.hintSettings.hints[i];
            if (hint.value.length) {
                hintsMarkdown += `||${hint.value}||\n`;
            }
        }
    }

    if (globalState.singleSelectAnswers.singleSelectAnswersList.length) {
        // prepare markdown for a single choice

        const title = globalState.singleSelectEditor.content.replace(/<(.+)>&nbsp;<\/(.+)>/g, '\n').trim();
        const isTypeSelect = globalState.singleSelectAnswers.selectedType.value === 'select';

        markdown += title + '\n\n';

        if (isTypeSelect) {
            markdown += '[[\n';
        }

        for (let i in globalState.singleSelectAnswers.singleSelectAnswersList) {

            const answerObj = globalState.singleSelectAnswers.singleSelectAnswersList[i];
            const trimmedTitle = answerObj.title.trim();

            if (trimmedTitle.length) {

                const feedback = answerObj.feedback.trim() ? ` {{${answerObj.feedback.trim()}}}` : '';

                let answerMarkdown;

                if (isTypeSelect) {
                    answerMarkdown = `${answerObj.correct ? `(${trimmedTitle})` : `${trimmedTitle}`} ${feedback}\n`;
                } else {
                    answerMarkdown = `(${answerObj.correct ? 'x' : ' '}) ${trimmedTitle}${feedback}\n`;
                }
                markdown += answerMarkdown;
            }

        }

        if (isTypeSelect) {
            markdown += ']]\n';
        }

    } else if (globalState.multiSelectAnswers.multiSelectAnswersList.length) {
        // prepare markdown for a multiple choices

        const title = globalState.multiSelectEditor.content.replace(/<(.+)>&nbsp;<\/(.+)>/g, '\n').trim();
        markdown += title + '\n\n';

        for (let i in globalState.multiSelectAnswers.multiSelectAnswersList) {

            const answerObj = globalState.multiSelectAnswers.multiSelectAnswersList[i];
            const selectedFeedback = answerObj.selectedFeedback.trim() ? `selected: ${answerObj.selectedFeedback.trim()}` : '';
            const unselectedFeedback = answerObj.unselectedFeedback.trim() ? `unselected: ${answerObj.unselectedFeedback.trim()}` : '';
            let feedbacks = '';
            const trimmedTitle = answerObj.title.trim();

            if (trimmedTitle.length) {
                if (selectedFeedback.trim().length || unselectedFeedback.trim().length) {
                    const both = (selectedFeedback.trim().length > 0 && unselectedFeedback.trim().length > 0);
                    feedbacks = both ?
                        ` {{ ${selectedFeedback.trim()} }, { ${unselectedFeedback.trim()} }}` :
                        `{{ ${selectedFeedback.trim()||unselectedFeedback.trim()} }}`;
                }

                const answerMarkdown = `[${answerObj.correct ? 'x' : ' '}] ${answerObj.title}${feedbacks}\n`;

                markdown += answerMarkdown;

            }
        }

        let groupFeedbackmardown = '';
        if (globalState.multiSelectAnswers.groupFeedbackList.length) {
            for (let i in globalState.multiSelectAnswers.groupFeedbackList) {
                const groupFeedback = globalState.multiSelectAnswers.groupFeedbackList[i];
                if (groupFeedback.answers.length && groupFeedback.feedback.trim()) {
                    const answers = groupFeedback.answers.sort().map(el => groupFeedbackWordMapping[el]).join(' ');
                    groupFeedbackmardown += `{{ ((${answers})) ${groupFeedback.feedback} }}\n`;
                }
            }
        }

        if (groupFeedbackmardown) {
            markdown += '\n' + groupFeedbackmardown;
        }



    } else if (globalState.shortAnswersData.shortAnswersList.length) {
        const title = globalState.shortAnswerEditor.content.replace(/<(.+)>&nbsp;<\/(.+)>/g, '\n').trim();
        markdown += title + '\n\n';

        let gotFirstCorrect = false;
        for (let i in globalState.shortAnswersData.shortAnswersList) {
            const answerObj = globalState.shortAnswersData.shortAnswersList[i];
            const value = answerObj.value.trim();
            let answerMarkdown;
            if (value) {
                if (answerObj.correct && !gotFirstCorrect) {
                    gotFirstCorrect = true;
                    answerMarkdown = answerObj.feedback && answerObj.feedback.length ? `= ${value} {{${answerObj.feedback.trim()}}}` : `= ${value}`;
                } else if (answerObj.correct && gotFirstCorrect) {
                    answerMarkdown = answerObj.feedback && answerObj.feedback.length ? `or= ${value} {{${answerObj.feedback.trim()}}}` : `or= ${value}`;
                } else if (!answerObj.correct && gotFirstCorrect) {
                    answerMarkdown = answerObj.feedback && answerObj.feedback.length ? `not= ${value} {{${answerObj.feedback.trim()}}}` : `not= ${value}`;
                }
                markdown += answerMarkdown + '\n';
            }
        }
    }

    if (hintsMarkdown.length > 2) { // in this case hintsMarkdown has already been filled
        markdown += hintsMarkdown;
    }
    if (needToCompare) {

        if (window.LXCData.markdown) {
            return markdown.trim().replace(/\n/g, '').split(' ').join('') === window.LXCData.markdown.trim().replace(/\n/g, '').split(' ').join('');
        }
        return false;

    } else {
        window.LXCData.markdown = markdown;
        const selectedAttemptsOption = globalState.scorringSettings.selectedAttemptsOption;
        const selectedPointOption = globalState.scorringSettings.selectedPointOption;
        window.LXCData.max_attempts = selectedAttemptsOption ? selectedAttemptsOption.value || null : null;
        window.LXCData.weight = selectedPointOption ? selectedPointOption.value || null : null;
        window.LXCData.markdownHasChanged = true;
    }

}

const unsubscribe = store.subscribe(getMarkdown);

export default class App extends React.Component {

    componentWillUnmount() {
        unsubscribe();
    }

    render() {
        const storeData = store.getState();
        let Container = () => {
            return "Sorry, Simple Editor can not edit this problem";
        };
        if (storeData.singleSelectAnswers.singleSelectAnswersList.length) {
            if (getMarkdown(true) && !this.initialized) {
                Container = SingleSelectContainer;
                this.initialized = true
            }
        } else if (storeData.multiSelectAnswers.multiSelectAnswersList.length) {
            if (getMarkdown(true) && !this.initialized) {
                Container = MultiSelectContainer;
                this.initialized = true;
            }
        } else if (storeData.shortAnswersData.shortAnswersList.length) {
            if (getMarkdown(true) && !this.initialized) {
                Container = ShortAnswerContainer;
                this.initialized = true;
            }
        }

        return (
            <div className="lxc-unit-wrapper">
                <div className="lxc-unit-content-bar">
                    <Container/>
                </div>
            </div>
        )
    }
}