import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import '../../assets/scss/app.scss';


const messages = defineMessages({
    correct: {
        id: 'MultiSelectItem.placeholder.correct',
        defaultMessage: 'Enter the correct answer'
    },
    incorrect: {
        id: 'MultiSelectItem.placeholder.incorrect',
        defaultMessage: 'Enter an incorrect answer'
    },
    selectedFeedback: {
        id: 'MultiSelectItem.selectedFeedback',
        defaultMessage: 'Selected feedback (specific)'
    },
    unselectedFeedback: {
        id: 'MultiSelectItem.unselectedFeedback',
        defaultMessage: 'Unselected feedback (specific)'
    },
    selectedFeedbackFieldPlaceholder: {
        id: 'MultiSelectItem.selectedFeedbackFieldPlaceholder',
        defaultMessage: 'Enter feedback for when the choice is selected'
    },
    unselectedFeedbackFieldPlaceholder: {
        id: 'MultiSelectItem.unselectedFeedbackFieldPlaceholder',
        defaultMessage: 'Enter feedback for when the choice is unselected'
    },
    titleAreaLabel: {
        id: 'MultiSelectItem.answerTitle.areaLabel',
        defaultMessage: 'Show feedback block'
    },
    buttonRemoveAreaLabel: {
        id: 'MultiSelectItem.buttonRemoveAreaLabel',
        defaultMessage: 'Remove answer item'
    }
});

class MultiSelectItem extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            feedbackOpenned: false
        };
    }

    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight+2}px`;
    }

    showHideFeedback() {
        this.setState({
            feedbackOpenned: !this.state.feedbackOpenned
        });
    }

    checkboxChange(event) {
        this.propsChanged({
            ...this.props,
            correct: event.target.checked
        })
    }

    selectedFeedbackChanged(event) {
        this.propsChanged({
            ...this.props,
            selectedFeedback: event.target.value
        });
    }

    unselectedFeedbackChanged(event) {
        this.propsChanged({
            ...this.props,
            unselectedFeedback: event.target.value
        });
    }

    titleChanged(event) {
        this.propsChanged({
            ...this.props,
            title: event.target.value
        });
    }

    propsChanged(props) {
        this.props.multiSelectChangeAnswer(props);
    }

    removeAnswer() {
        this.props.multiSelectRemoveAnswer(this.props.id);
    }

    render() {
        const { formatMessage } = this.props.intl;
        const placeholderText = this.props.correct ? formatMessage(messages.correct) : formatMessage(messages.incorrect);
        return (
            <div key={this.props.id} className='lxc-answers-option'>
                <div className='lxc-answers-radio'>
                    <input name='answer' type='checkbox' id={`answer-checkbox${this.props.id}`} value={this.props.correct}
                           defaultChecked={this.props.correct} onChange={this.checkboxChange.bind(this)}/>
                    <label htmlFor={`answer-checkbox${this.props.id}`} className='lxc-answers-radio-label'>
                        {this.props.title}
                    </label>
                </div>
                <div className='lxc-answers-field-wrapper'>
                    <div className={`lxc-answers-feedback ${this.state.feedbackOpenned ? 'lxc-answers-feedback_open' : ''}`}>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-selected${this.props.id}`}>
                            {formatMessage(messages.selectedFeedback)}
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field'
                                  id={`feedback-selected${this.props.id}`} value={this.props.selectedFeedback}
                                  placeholder={formatMessage(messages.selectedFeedbackFieldPlaceholder)} onChange={this.selectedFeedbackChanged.bind(this)}
                                  onKeyUp={this.handleKeyDown}/>

                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-unselected${this.props.id}`}>
                            {formatMessage(messages.unselectedFeedback)}
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field'
                                  id={`feedback-unselected${this.props.id}`} value={this.props.unselectedFeedback}
                                  placeholder={formatMessage(messages.unselectedFeedbackFieldPlaceholder)} onChange={this.unselectedFeedbackChanged.bind(this)}
                                  onKeyUp={this.handleKeyDown}/>
                    </div>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-multi${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className='lxc-answers-item' id={`answer-multi${this.props.id}`}
                                  placeholder={placeholderText} value={this.props.title}
                                  onChange={this.titleChanged.bind(this)} onKeyUp={this.handleKeyDown}/>
                        <button className='lxc-answers-feedback-btn' type='button' aria-label={formatMessage(messages.titleAreaLabel)} onClick={this.showHideFeedback.bind(this)}/>
                    </div>
                    <button className='lxc-answers-remove-btn' type='button' aria-label={formatMessage(messages.buttonRemoveAreaLabel)} onClick={this.removeAnswer.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default injectIntl(MultiSelectItem);
