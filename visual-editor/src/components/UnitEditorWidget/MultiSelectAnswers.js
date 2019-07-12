import * as React from 'react';
import {MultiSelectItem} from './MultiSelectItem';

import '../../assets/scss/app.scss';


export default class MultiSelectAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the answers below and select whether an answer is correct or incorrect.
                    Remember, you can have more than one correct answer.
                </div>
                <div className="answers-list answers-list_multi">
                    {
                        this.props.answersList.map((answer) => {
                            return <MultiSelectItem 
                                        key={answer.id} {...answer}
                                        {...this.props}
                                    />
                        })
                    }
                    <div className="answers-another-option">
                        <button className="answers-another-option-btn" type='button' onClick={this.props.multiSelectAddAnswer}>
                            + Add <span className="hide-mobile">another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
}
