import * as React from 'react';
import Select from 'react-select';

import '../../assets/scss/app.scss';

export class ShortAnswersItem extends React.Component {

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
        });
    }

    render() {
        let placeholderText = this.props.shortAnswersList.length == 0 ? 'Enter an answer' : 'Enter another acceptable answer';
        placeholderText = this.props.correct ? placeholderText : 'Enter an incorrect answer';
        return (
            <div className='lxc-answers-option'>
                <div className='lxc-answers-field-title'>Answer</div>
                <div className='lxc-answers-field-wrapper'>
                    <div className={`lxc-answers-feedback ${this.state.feedbackOpenned ? 'lxc-answers-feedback_open' : ''}`}>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-field${this.props.id}`}>
                            Feedback
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field' id={`feedback-field${this.props.id}`}
                                  placeholder='Enter feedback ' value={this.props.feedback} onChange={this.feedbackChange.bind(this)}
                                  onKeyUp={this.handleKeyDown}/>
                    </div>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className='lxc-answers-item' id={`answer-single${this.props.id}`} value={this.props.value}
                                  placeholder={placeholderText} onChange={this.valueChanged.bind(this)} onKeyUp={this.handleKeyDown}/>
                        <button className='lxc-answers-feedback-btn' type='button' aria-label='Show feedback block' onClick={this.openFeedbackButtonClick.bind(this)}/>
                    </div>
                    <button className='lxc-answers-remove-btn' type='button' aria-label='Remove answer item' onClick={this.removeAnswer.bind(this)}/>
                </div>
            </div>
        )
    }
}
