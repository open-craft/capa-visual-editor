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

    componentDidMount() {
        this.setState({...this.props});
    }

    answerChanged() {
        let { id, title, correct, feedback } = this.state;
        this.props.singleSelectAnswerChange({
            id: id,
            title: title,
            correct: correct,
            feedback: feedback
        });
    }

    removeAnswer() {
        this.props.singleSelectRemoveAnswer(this.props.id);
    }

    openFeedbackButtonClick() {
        this.setState({openFeedback: !this.state.openFeedback});
    }

    checkBoxChange(event) {
        this.setState({correct: event.target.checked}, () => {
            this.answerChanged();
        });
    }

    feedbackChange(event) {
        this.setState({feedback: event.target.value}, () => {
            this.answerChanged();
        });
    }

    titleChange(event) {
        this.setState({title: event.target.value}, () => {
            this.answerChanged();
        });
    }

    render() {
        console.log(this.props);
        const additionallyСlass = this.state.openFeedback ? 'answers-feedback_open' : '';
        const placeholderText = Number(this.props.id) === 2 ? 'Enter the correct answer' : 'Enter an incorrect answer';

        return (
            <div key={this.props.id} className="answers-option">
                <div className="answers-radio">
                    <input name='correct' type='radio' id={`answer-radio${this.props.id}`} value={this.state.correct}
                           defaultChecked={this.state.correct} onChange={this.checkBoxChange}/>
                    <label htmlFor={`answer-radio${this.props.id}`} className="answers-radio-label">
                        {this.state.title}
                    </label>
                </div>
                <div className="answers-field-wrapper">
                    <div className={`answers-feedback ${additionallyСlass}`}>
                        <label className="answers-feedback-title" htmlFor={`feedback-field${this.props.id}`}>
                            Specific feedback
                        </label>
                        <textarea rows={1} className="answers-feedback-field" id={`feedback-field${this.props.id}`}
                                  placeholder='Enter feedback for when the choice is selected' value={this.state.feedback} onChange={this.feedbackChange}/>
                    </div>
                    <div className="answers-item-wrapper">
                        <label className="sr" htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className="answer-item" id={`answer-single${this.props.id}`} value={this.state.title}
                                  placeholder={placeholderText} onChange={this.titleChange}/>
                        <button className="answers-feedback-btn" type='button' aria-label='Show feedback block' onClick={this.openFeedbackButtonClick}/>
                    </div>
                    <button className="answers-remove-btn" type='button' aria-label='Remove answer item' onClick={this.removeAnswer}/>
                </div>
            </div>
        );
    }
}
