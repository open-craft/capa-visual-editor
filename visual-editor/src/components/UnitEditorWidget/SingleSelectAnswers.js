import * as React from 'react';
import {SingleSelectItem} from './SingleSelectItem';

import '../../assets/scss/app.scss';

export class SingleSelectAnswers extends React.PureComponent {

    constructor(props) {
        super(props);
        this.singleSelectRadioChangeHandler = this.singleSelectRadioChangeHandler.bind(this);
        this.addAnswer = this.addAnswer.bind(this);
        this.removeAnswer = this.removeAnswer.bind(this);
        this.state = {
            answersList: []
        }
    }

    componentDidMount() {
        this.setState({
            answersList: this.props.answersList
        });
    }

    singleSelectRadioChangeHandler(id, oldAnswer) {
        let answersList = this.state.answersList.map(answer => {
            if (answer.id == id) {
                answer.correctAnswer = !oldAnswer
            } else {
                answer.correctAnswer = oldAnswer;
            }
            return answer;
        });
        this.setState({
            answersList: answersList
        });
    }

    addAnswer() {
        let answers = this.state.answersList.map(a => a);
        let lastId = this.state.answersList.splice(-1)[0].id;
        let newAnswer = {
            id: ++lastId,
            title: 'Empty title'
        }
        answers.push(newAnswer);
        this.setState({
            answersList: answers
        });
    }

    removeAnswer(id) {
        let answersList = this.state.answersList.filter(answer => {
            return answer.id !== id;
        });
        this.setState({
            answersList: answersList
        });
    }

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the answers below and select whether an answer is correct or incorrect.
                </div>
                <div className="answers-list">
                    {
                        this.state.answersList.map(answer => {
                            return <SingleSelectItem 
                                        key={answer.id} {...answer} 
                                        singleSelectRadioChangeHandler={this.singleSelectRadioChangeHandler} 
                                        removeAnswer={this.removeAnswer}
                                        />
                        })
                    }
                    <div className="answers-another-option">
                        <button className="answers-another-option-btn" type='button' onClick={this.addAnswer}>
                            + Add <span className="hide-mobile">another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
}
