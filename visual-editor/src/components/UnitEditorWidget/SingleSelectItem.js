import * as React from 'react';

import '../../assets/scss/app.scss';

export class SingleSelectItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.openFeedbackButtonClick = this.openFeedbackButtonClick.bind(this);
        this.singleSelectRadioChangeHandler = this.singleSelectRadioChangeHandler.bind(this);
        this.state = {
            openFeedback: false,
            correctAnswer: false
        }
    }

    componentDidMount() {
        this.setState({ ...this.props});
    }

    removeAnswer(event) {
        this.props.removeAnswer(this.props.id);
    }

    openFeedbackButtonClick(event) {
        this.setState({
            openFeedback: !this.state.openFeedback
        });
    }

    singleSelectRadioChangeHandler(event) {
        this.props.singleSelectRadioChangeHandler(this.props.id, this.state.correctAnswer);
    }

    render() {
        const additionallyСlass = this.state.openFeedback ? 'answers-feedback_open' : '';
        const placeholderText = Number(this.props.id) === 2 ? 'Enter the correct answer' : 'Enter an incorrect answer';
        const checkboxValue = Number(this.props.id) === 2 ? true : false;


        return (
            <div key={this.props.id} className="answers-option">
                <div className="answers-radio">
                    <input name='answer' type='radio' id={`answer-radio${this.props.id}`} value={this.state.correctAnswer}
                           defaultChecked={this.state.correctAnswer} onChange={this.singleSelectRadioChangeHandler}/>
                    <label htmlFor={`answer-radio${this.props.id}`} className="answers-radio-label">
                        {this.props.title}
                    </label>
                </div>
                <div className="answers-field-wrapper">
                    <div className={`answers-feedback ${additionallyСlass}`}>
                        <label className="answers-feedback-title" htmlFor={`feedback-field${this.props.id}`}>
                            Specific feedback
                        </label>
                        <textarea rows={1} className="answers-feedback-field" id={`feedback-field${this.props.id}`}
                                  placeholder='Enter feedback for when the choice is selected'/>
                    </div>
                    <div className="answers-item-wrapper">
                        <label className="sr" htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className="answer-item" id={`answer-single${this.props.id}`}
                                  placeholder={placeholderText}/>
                        <button className="answers-feedback-btn" type='button' aria-label='Show feedback block' onClick={this.openFeedbackButtonClick}/>
                    </div>
                    <button className="answers-remove-btn" type='button' aria-label='Remove answer item' onClick={this.removeAnswer}/>
                </div>
            </div>
        );
    }
}
