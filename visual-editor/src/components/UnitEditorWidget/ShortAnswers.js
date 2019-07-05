import * as React from 'react';
import {ShortAnswersItem} from './ShortAnswersItem';

import '../../assets/scss/app.scss';

export class ShortAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the correct answer or other acceptable answers. (Not case sensitive)
                </div>
                <div className="answers-list answers-list_short">

                    <ShortAnswersItem/>

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
