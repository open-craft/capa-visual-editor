import * as React from 'react';
import {ShortAnswersItem} from './ShortAnswersItem';

import '../../assets/scss/app.scss';

export default class ShortAnswers extends React.PureComponent {

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
                        this.props.shortAnswersList.map(shortAnswer => {
                            return <ShortAnswersItem 
                                    remove={this.props.shortAnswersRemoveAnswer}
                                    change={this.props.shortAnswersChangeAnswer}
                                    key={shortAnswer.id}
                                    {...shortAnswer} />
                        })
                    }

                    <div className="answers-another-option">
                        <button className="answers-another-option-btn" type='button' onClick={this.props.shortAnswersAddAnswer}>
                            + Add <span className="hide-mobile">another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
};
