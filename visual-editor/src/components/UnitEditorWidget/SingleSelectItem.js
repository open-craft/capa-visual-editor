import * as React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { doAutoSize } from "../../Utils";
import autosize from "autosize";

import '../../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'SingleSelectItem.title',
        defaultMessage: 'Answer item'
    },
    correct: {
        id: 'SingleSelectItem.placeholder.correct',
        defaultMessage: 'Add the correct answer'
    },
    incorrect: {
        id: 'SingleSelectItem.placeholder.incorrect',
        defaultMessage: 'Add an incorrect answer'
    },
    feedbackTitle: {
        id: 'SingleSelectItem.feedbackTitle',
        defaultMessage: 'Specific feedback'
    },
    feedbackPlaceholder: {
        id: 'SingleSelectItem.feedbackPlaceholder',
        defaultMessage: 'Enter feedback for when the choice is selected'
    },
    feedbackBtnAreaLabel: {
        id: 'SingleSelectItem.feedbackBtn.areaLabel',
        defaultMessage: 'Show feedback block'
    },
    removeBtnAreaLabel: {
        id: 'SingleSelectItem.removeBtnAreaLabel',
        defaultMessage: 'Remove answer item'
    }
});

class SingleSelectItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.answerChanged = this.answerChanged.bind(this);
        this.openFeedbackButtonClick = this.openFeedbackButtonClick.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.checkBoxChange = this.checkBoxChange.bind(this);
        this.feedbackChange = this.feedbackChange.bind(this);
        this.titleChange = this.titleChange.bind(this);

        this.state = {
            openFeedback: false
        }
    }

    componentDidMount() {
        autosize(this.answerTextarea);
    }

    answerChanged(changed) {
        let { id, title, correct, feedback } = this.props;
        this.props.singleSelectChangeAnswer({
            id: id,
            title: title,
            correct: correct,
            feedback: feedback, ...changed
        });
    }

    removeAnswer() {
        this.props.singleSelectRemoveAnswer(this.props.id);
    }

    openFeedbackButtonClick() {
        this.setState({
            openFeedback: !this.state.openFeedback
        }, () => {
            doAutoSize();
        });
    }

    checkBoxChange(event) {
        this.answerChanged({correct: event.target.checked});
    }

    feedbackChange(event) {
        this.answerChanged({feedback: event.target.value});
    }

    titleChange(event) {
        this.answerChanged({title: event.target.value});
    }

    render() {
        const { formatMessage } = this.props.intl;
        const additionallyСlass = this.state.openFeedback ? 'lxc-answers-feedback_open' : '';
        const additionallyBlockСlass = this.state.openFeedback ? 'lxc-answers-field-block_open' : '';
        const placeholderText = this.props.correct ? formatMessage(messages.correct) : formatMessage(messages.incorrect);

        return (
            <div key={this.props.id} className='lxc-answers-option'>
                <fieldset className='lxc-answers-radio'>
                    <legend className='lxc-sr'>{formatMessage(messages.title)}</legend>
                    <input name='correct' type='radio' id={`answer-radio${this.props.id}`}
                           defaultChecked={this.props.correct} onChange={this.checkBoxChange}/>
                    <label htmlFor={`answer-radio${this.props.id}`} className='lxc-answers-radio-label'>
                        {this.props.title}
                    </label>
                </fieldset>
                <div className='lxc-answers-field-wrapper'>
                    <div className={`lxc-answers-field-block ${additionallyBlockСlass}`}>
                        <div className='lxc-answers-item-wrapper'>
                            <label className='lxc-sr' htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                            <textarea rows={1} className='lxc-answers-item' id={`answer-single${this.props.id}`} value={this.props.title}
                            placeholder={placeholderText} onChange={this.titleChange} ref={c => (this.answerTextarea = c)}/>
                            <button className='lxc-answers-feedback-btn' type='button' aria-label={formatMessage(messages.feedbackBtnAreaLabel)} onClick={this.openFeedbackButtonClick}/>
                        </div>
                        {
                            this.props.answersList.length > 1 ? (
                                <button className='lxc-answers-remove-btn' type='button' aria-label={formatMessage(messages.removeBtnAreaLabel)} onClick={this.removeAnswer}/>
                            ) : null
                        }
                    </div>
                    <div className={`lxc-answers-feedback ${additionallyСlass}`}>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-field${this.props.id}`}>
                            {formatMessage(messages.feedbackTitle)}
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field' id={`feedback-field${this.props.id}`}
                                  placeholder={formatMessage(messages.feedbackPlaceholder)} value={this.props.feedback}
                                  onChange={this.feedbackChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(SingleSelectItem);
