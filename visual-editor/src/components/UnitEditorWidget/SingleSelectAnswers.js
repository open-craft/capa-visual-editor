import * as React from 'react';
import {SingleSelectItem} from './SingleSelectItem';

import '../../assets/scss/app.scss';

export class SingleSelectAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the answers below and select whether an answer is correct or incorrect.
                </div>
                <div className="answers-list">
                    {this.props.answersList.map((answer) => <SingleSelectItem key={answer.id} {...answer} />)}
                    <div className="answers-another-option">
                        <button className="answers-another-option-btn" type='button'>
                            + Add <span className="hide-mobile">another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
}
