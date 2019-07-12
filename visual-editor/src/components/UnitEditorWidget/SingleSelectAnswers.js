import * as React from 'react';
import {SingleSelectItem} from './SingleSelectItem';

import '../../assets/scss/app.scss';

export default class SingleSelectAnswers extends React.Component {

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the answers below and select whether an answer is correct or incorrect.
                </div>
                <div className="answers-list">
                    {
                        this.props.answersList.map(answer => {
                            return <SingleSelectItem 
                                        key={answer.id} {...answer} 
                                        singleSelectAnswerChange={this.props.singleSelectAnswerChange} 
                                        singleSelectRemoveAnswer={this.props.singleSelectRemoveAnswer}
                                        />
                        })
                    }
                    <div className="answers-another-option">
                        <button className="answers-another-option-btn" type='button' onClick={this.props.addAnswer}>
                            + Add <span className="hide-mobile">another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
};
