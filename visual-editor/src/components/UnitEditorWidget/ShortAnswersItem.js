import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { doAutoSize } from "../../Utils";
import autosize from "autosize";

import '../../assets/scss/app.scss';


const messages = defineMessages({
    enter: {
        id: 'ShortAnswersItem.placeholder.enter.answer',
        defaultMessage: 'Enter an answer'
    },
    enterAnother: {
        id: 'ShortAnswersItem.placeholder.enter.another',
        defaultMessage: 'Add another acceptable answer'
    },
    enterIncorrect: {
        id: 'ShortAnswersItem.placeholder.enter.incorrect',
        defaultMessage: 'Add an incorrect answer'
    },
    title: {
        id: 'ShortAnswersItem.title',
        defaultMessage: 'Answer'
    },
    feedbackTitle: {
        id: 'ShortAnswersItem.feedback.title',
        defaultMessage: 'Feedback'
    },
    feedbackFieldPlaceholder: {
        id: 'ShortAnswersItem.feedbackFieldPlaceholder',
        defaultMessage: 'Enter feedback '
    },
    btnFeedback: {
        id: 'ShortAnswersItem.btnFeedback',
        defaultMessage: 'Show feedback block'
    },
    btnRemove: {
        id: 'ShortAnswersItem.btnRemove',
        defaultMessage: 'Remove answer item'
    }
});

class ShortAnswersItem extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            feedbackOpenned: false
        };
    }

    componentDidMount() {
        autosize(this.answerTextarea);
    }

    removeAnswer() {
        this.props.remove(this.props.id);
    }

    typeChanged(value) {
        this.props.change({
            id: this.props.id,
            value: this.props.value,
            currentType: value,
            correct: this.props.correct
        });
    }

    valueChanged(event) {
        this.props.change({
            id: this.props.id,
            currentType: this.props.currentType,
            value: event.target.value,
            correct: this.props.correct
        });
    }

    feedbackChange(event) {
        this.props.change({
            id: this.props.id,
            currentType: this.props.currentType,
            value: this.props.value,
            feedback: event.target.value,
            correct: this.props.correct
        });
    }

    openFeedbackButtonClick () {
        this.setState({
            feedbackOpenned: !this.state.feedbackOpenned
        }, () => {
            doAutoSize();
        });
    }

    render() {
        const { formatMessage } = this.props.intl;
        let placeholderText = this.props.shortAnswersList.length === 0 ? formatMessage(messages.enter) : formatMessage(messages.enterAnother);
        placeholderText = this.props.correct ? placeholderText : formatMessage(messages.enterIncorrect);

        return (
            <div className='lxc-answers-option'>
                <div className='lxc-answers-field-title'>
                    {formatMessage(messages.title)}
                </div>
                <div className='lxc-answers-field-wrapper'>
                    <div className={`lxc-answers-field-block ${this.state.feedbackOpenned ? 'lxc-answers-field-block_open' : ''}`}>
                        <div className='lxc-answers-item-wrapper'>
                            <label className='lxc-sr' htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                            <textarea rows={1} className='lxc-answers-item' id={`answer-single${this.props.id}`} value={this.props.value}
                                      placeholder={placeholderText} onChange={this.valueChanged.bind(this)} ref={c => (this.answerTextarea = c)}/>
                            <button className='lxc-answers-feedback-btn' type='button' aria-label={formatMessage(messages.btnFeedback)} onClick={this.openFeedbackButtonClick.bind(this)}/>
                        </div>
                        {
                            this.props.shortAnswersList.length > 1 ? (
                                <button className='lxc-answers-remove-btn' type='button' aria-label={formatMessage(messages.btnRemove)} onClick={this.removeAnswer.bind(this)}/>
                            ) : null
                        }
                    </div>
                    <div className={`lxc-answers-feedback ${this.state.feedbackOpenned ? 'lxc-answers-feedback_open' : ''}`}>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-field${this.props.id}`}>
                            {formatMessage(messages.feedbackTitle)}
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field' id={`feedback-field${this.props.id}`}
                                  placeholder={formatMessage(messages.feedbackFieldPlaceholder)} value={this.props.feedback}
                                  onChange={this.feedbackChange.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default injectIntl(ShortAnswersItem);
