import * as React from 'react';
import {ShortAnswersItem} from './ShortAnswersItem';

import '../../assets/scss/app.scss';

export default class ShortAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className='lxc-answers-wrapper'>
                <legend className='lxc-answers-title'>Answers*</legend>
                <div className='lxc-answers-description'>
                    Enter the correct answer or other acceptable answers. (Not case sensitive)
                </div>
                <div className='lxc-answers-list lxc-answers-list_short'>
                    <div className='lxc-answers-form-title'>Acceptable answers</div>
                    {
                        this.props.shortAnswersList.map(shortAnswer => {
                            return <ShortAnswersItem 
                                    remove={this.props.shortAnswersRemoveAnswer}
                                    change={this.props.shortAnswersChangeAnswer}
                                    key={shortAnswer.id}
                                    {...shortAnswer} />
                        })
                    }

                    <div className='lxc-answers-another-option'>
                        <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddAnswer}>
                            + Add <span className='lxc-hide-mobile'>another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
};
