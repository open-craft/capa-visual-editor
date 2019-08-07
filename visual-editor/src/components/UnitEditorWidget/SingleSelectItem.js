import * as React from 'react';

import '../../assets/scss/app.scss';

export class SingleSelectItem extends React.PureComponent {

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

    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight+2}px`;
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
        this.setState({openFeedback: !this.state.openFeedback});
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
        const additionallyСlass = this.state.openFeedback ? 'lxc-answers-feedback_open' : '';
        const placeholderText = Number(this.props.id) === 2 ? 'Enter the correct answer' : 'Enter an incorrect answer';

        return (
            <div key={this.props.id} className='lxc-answers-option'>
                <div className='lxc-answers-radio'>
                    <input name='correct' type='radio' id={`answer-radio${this.props.id}`}
                           defaultChecked={this.props.correct} onChange={this.checkBoxChange}/>
                    <label htmlFor={`answer-radio${this.props.id}`} className='lxc-answers-radio-label'>
                        {this.props.title}
                    </label>
                </div>
                <div className='lxc-answers-field-wrapper'>
                    <div className={`lxc-answers-feedback ${additionallyСlass}`}>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-field${this.props.id}`}>
                            Specific feedback
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field' id={`feedback-field${this.props.id}`}
                                  placeholder='Enter feedback for when the choice is selected' value={this.props.feedback}
                                  onChange={this.feedbackChange} onKeyUp={this.handleKeyDown}/>
                    </div>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className='lxc-answers-item' id={`answer-single${this.props.id}`}value={this.props.title}
                        placeholder={placeholderText} onChange={this.titleChange} onKeyUp={this.handleKeyDown}/>
                        <button className='lxc-answers-feedback-btn' type='button' aria-label='Show feedback block' onClick={this.openFeedbackButtonClick}/>
                    </div>
                    <button className='lxc-answers-remove-btn' type='button' aria-label='Remove answer item' onClick={this.removeAnswer}/>
                </div>
            </div>
        );
    }
}
