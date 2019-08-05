import React from 'react';
import './assets/scss/app.scss';
import SingleSelectContainer from './containers/SingleSelectContainer';
import MultiSelectContainer from './containers/MultiSelectContainer';
import ShortAnswerContainer from './containers/ShortAnswerContainer';
import store from './store/store';
import {setMarkdownData} from './dataParser';

function handleStateChange() {
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

		markdown += title;
		markdown += '\n\n';

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
		markdown += title;
		markdown += '\n\n';

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
						` {{ ${selectedFeedback.trim()} }, { ${unselectedFeedback.trim()} }}` 
						: `{{ ${selectedFeedback.trim()||unselectedFeedback.trim()} }}`;
				}

				const answerMarkdown = `[${answerObj.correct ? 'x' : ' '}] ${answerObj.title}${feedbacks}\n`;

				markdown += answerMarkdown;

			}
		}

		const groupFeedbackReg = /<(?:\w+)>(.[^<>]*)\<\/(?:\w+)>/g;
		var content = globalState.multiSelectAnswers.groupFeedbackContent.replace(/<(.+)>&nbsp;<\/(.+)>/g, '').trim();
		var matches = [];
		var match = groupFeedbackReg.exec(content);
		while (match != null) {
			matches.push(match[1]);
			match = groupFeedbackReg.exec(content);
		}
		if (matches.length) {
			markdown += '\n';
			matches.forEach((el, ind) => {
				markdown += `{{ ${el} }}\n`;
			});
		}

	} else if (globalState.shortAnswersData.shortAnswersList.length) {
		const title = globalState.shortAnswerEditor.content.replace(/<(.+)>&nbsp;<\/(.+)>/g, '\n').trim();
		markdown += title;
		markdown += '\n\n';

		for (let i in globalState.shortAnswersData.shortAnswersList) {
			const answerObj = globalState.shortAnswersData.shortAnswersList[i];
			const value = answerObj.value.trim();
			if (value) {
				const currentTypeMapping = {
					text: '',
					number: ' +- 1' // need to decide how to handle it
				};
				const answerMarkdown = `= ${value}${currentTypeMapping[answerObj.currentType.value]}`;
				markdown += answerMarkdown + '\n';
			}
		}
	}

	if (hintsMarkdown.length > 2) { // in this case hintsMarkdown has already been filled
		markdown += hintsMarkdown;
	}

	setMarkdownData({
		selectedAttemptsOption: globalState.scorringSettings.selectedAttemptsOption,
		selectedPointOption: globalState.scorringSettings.selectedPointOption,
		markdown: markdown
	});

}

const unsubscribe = store.subscribe(handleStateChange);

export default class App extends React.Component {

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
		} else if (storeData.shortAnswersData.shortAnswersList.length) {
			Container = ShortAnswerContainer;
		}

		return (
			<div className = "lxc-unit-wrapper">
				<div className = "lxc-unit-content-bar">
					<Container/>
				</div>
			</div>
		)
	}
}