import * as React from 'react';

import '../../assets/scss/app.scss';

export class MultiSelectItem extends React.PureComponent {

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
        const placeholderText = Number(this.props.id) === 2 || Number(this.props.id) === 3 ? 'Enter the correct answer' : 'Enter an incorrect answer';
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
                            Selected feedback (specific)
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field'
                                  id={`feedback-selected${this.props.id}`} value={this.props.selectedFeedback}
                                  placeholder='Enter feedback for when the choice is selected' onChange={this.selectedFeedbackChanged.bind(this)}
                                  onKeyUp={this.handleKeyDown}/>

                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-unselected${this.props.id}`}>
                            Unselected feedback (specific)
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field'
                                  id={`feedback-unselected${this.props.id}`} value={this.props.unselectedFeedback}
                                  placeholder='Enter feedback for when the choice is selected' onChange={this.unselectedFeedbackChanged.bind(this)}
                                  onKeyUp={this.handleKeyDown}/>
                    </div>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-multi${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className='lxc-answers-item' id={`answer-multi${this.props.id}`}
                                  placeholder={placeholderText} value={this.props.title}
                                  title='Enter the correct answer' onChange={this.titleChanged.bind(this)} onKeyUp={this.handleKeyDown}/>
                        <button className='lxc-answers-feedback-btn' type='button' aria-label='Show feedback block' onClick={this.showHideFeedback.bind(this)}/>
                    </div>
                    <button className='lxc-answers-remove-btn' type='button' aria-label='Remove answer item' onClick={this.removeAnswer.bind(this)}/>
                </div>
            </div>
        );
    }
}
