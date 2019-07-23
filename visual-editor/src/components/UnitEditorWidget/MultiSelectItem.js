import * as React from 'react';

import '../../assets/scss/app.scss';

export class MultiSelectItem extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            feedbackOpenned: false
        };
    }

    componentDidMount() {
        this.setState({...this.props});
    }

    showHideFeedback() {
        this.setState({
            feedbackOpenned: !this.state.feedbackOpenned
        });
    }

    checkboxChange(event) {
        this.setState({
            correct: event.target.checked
        }, () => {this.propsChanged()});
    }

    selectedFeedbackChanged(event) {
        this.setState({
            selectedFeedback: event.target.value
        }, () => {this.propsChanged()});
    }

    unselectedFeedbackChanged(event) {
        this.setState({
            unselectedFeedback: event.target.value
        }, () => {this.propsChanged()});
    }

    answerChanged(event) {
        this.setState({answer: event.target.value}, () => {
            this.propsChanged()}
        );
    }

    propsChanged() {
        this.props.multiSelectChangeAnswer(this.state);
    }

    removeAnswer() {
        this.props.multiSelectRemoveAnswer(this.props.id);
    }

    render() {
        const placeholderText = Number(this.props.id) === 2 || Number(this.props.id) === 3 ? 'Enter the correct answer' : 'Enter an incorrect answer';

        return (
            <div key={this.props.id} className='lxc-answers-option'>
                <div className='lxc-answers-radio'>
                    <input name='answer' type='checkbox' id={`answer-checkbox${this.props.id}`} value={this.state.correct}
                           defaultChecked={this.state.correct} onChange={this.checkboxChange.bind(this)}/>
                    <label htmlFor={`answer-checkbox${this.props.id}`} className='lxc-answers-radio-label'>
                        {this.state.title}
                    </label>
                </div>
                <div className='lxc-answers-field-wrapper'>
                    <div className={`lxc-answers-feedback ${this.state.feedbackOpenned ? 'lxc-answers-feedback_open' : ''}`}>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-selected${this.props.id}`}>
                            Selected feedback (specific)
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field'
                                  id={`feedback-selected${this.props.id}`} value={this.state.selectedFeedback}
                                  placeholder='Enter feedback for when the choice is selected' onChange={this.selectedFeedbackChanged.bind(this)}/>

                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-unselected${this.props.id}`}>
                            Unselected feedback (specific)
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field'
                                  id={`feedback-unselected${this.props.id}`} value={this.unselectedFeedback}
                                  placeholder='Enter feedback for when the choice is selected' onChange={this.unselectedFeedbackChanged.bind(this)}/>
                    </div>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-multi${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className='lxc-answers-item' id={`answer-multi${this.props.id}`}
                                  placeholder={placeholderText} value={this.state.answer}
                                  title='Enter the correct answer' onChange={this.answerChanged.bind(this)}/>
                        <button className='lxc-answers-feedback-btn' type='button' aria-label='Show feedback block' onClick={this.showHideFeedback.bind(this)}/>
                    </div>
                    <button className='lxc-answers-remove-btn' type='button' aria-label='Remove answer item' onClick={this.removeAnswer.bind(this)}/>
                </div>
            </div>
        );
    }
}
