import * as React from 'react';
import { FormattedMessage } from 'react-intl';


import '../../assets/scss/app.scss';

export class MultiSelectItem extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            feedbackOpenned: false
        };
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
        const placeholderText = this.props.correct || Number(this.props.id) === 3 ? 'Enter the correct answer' : 'Enter an incorrect answer';
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
                            <FormattedMessage
                                id="multiSelect.item.selectedFeedbackTitle"
                                defaultMessage="Selected feedback (specific)"
                            />
                        </label>
                        <FormattedMessage id="multiSelect.item.feedbackPlaceholder" defaultMessage="Enter feedback for when the choice is selected">
                            {
                                placeholder => (
                                    <textarea rows={1} className='lxc-answers-feedback-field'
                                  id={`feedback-selected${this.props.id}`} value={this.props.selectedFeedback}
                                  placeholder={placeholder} onChange={this.selectedFeedbackChanged.bind(this)}/>
                                )
                            }
                        </FormattedMessage>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-unselected${this.props.id}`}>
                            <FormattedMessage
                                id="multiSelect.item.unselectedFeedbackTitle"
                                defaultMessage="Unselected feedback (specific)"
                            />
                        </label>
                        <FormattedMessage id="multiSelect.item.feedbackPlaceholder" defaultMessage="Enter feedback for when the choice is selected">
                            {
                                placeholder => (
                                    <textarea rows={1} className='lxc-answers-feedback-field'
                                        id={`feedback-unselected${this.props.id}`} value={this.props.unselectedFeedback}
                                        placeholder={placeholder} onChange={this.unselectedFeedbackChanged.bind(this)}/>
                                )
                            }
                        </FormattedMessage>
                    </div>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-multi${this.props.id}`}>{placeholderText}</label>
                        <FormattedMessage id="multiSelect.item.answerTitle" defaultMessage="Enter the correct answer">
                            {
                                title => (
                                    <textarea rows={1} className='lxc-answers-item' id={`answer-multi${this.props.id}`}
                                        placeholder={placeholderText} value={this.props.title}
                                        title={title} onChange={this.titleChanged.bind(this)}/>
                                )
                            }
                        </FormattedMessage>
                        <FormattedMessage id="multiSelect.item.showFeedbackButton" defaultMessage="Show feedback block">
                            {
                                ariaLable => (
                                    <button className='lxc-answers-feedback-btn' type='button' aria-label={ariaLable} onClick={this.showHideFeedback.bind(this)}/>
                                )
                            }
                        </FormattedMessage>
                    </div>
                    <FormattedMessage id="multiSelect.item.removeAnswerButton" defaultMessage="Remove answer item">
                        {
                            ariaLable => (
                                <button className='lxc-answers-remove-btn' type='button' aria-label={ariaLable} onClick={this.removeAnswer.bind(this)}/>
                            )
                        }
                    </FormattedMessage>
                </div>
            </div>
        );
    }
}
