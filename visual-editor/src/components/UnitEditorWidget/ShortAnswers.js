import * as React from 'react';
import {ShortAnswersItem} from './ShortAnswersItem';

import '../../assets/scss/app.scss';

export class ShortAnswers extends React.PureComponent {

    constructor(props) {
        super(props);

        this.removeShortAnswer = this.removeShortAnswer.bind(this);
        this.addAnswer = this.addAnswer.bind(this);

        this.state = {
            shortAnswersList: [
                {id: 1, value: 'Value 1'},
                {id: 2, value: 'Value 2'},
                {id: 3, value: 'Value 3'},
            ]
        }
    }

    removeShortAnswer(id) {
        let newShortAnswers = this.state.shortAnswersList.filter(s => s.id !== id);
        this.setState({
            shortAnswersList: newShortAnswers
        });
    }

    addAnswer() {
        const answers = this.state.shortAnswersList;
        let lastId = answers[answers.length-1].id;
        const newAnswers = answers.concat([{
            id: ++lastId,
            value: ''
        }]);
        this.setState({
            shortAnswersList: newAnswers
        });
    }

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the correct answer or other acceptable answers. (Not case sensitive)
                </div>
                <div className="answers-list answers-list_short">
                    <div className="answers-form-title">Acceptable answers</div>
                    {
                        this.state.shortAnswersList.map(shortAnswer => {
                            return <ShortAnswersItem removeShortAnswer={this.removeShortAnswer} key={shortAnswer.id} {...shortAnswer} />
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
