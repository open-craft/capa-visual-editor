import * as React from 'react';
import {MultiSelectItem} from './MultiSelectItem';

import '../../assets/scss/app.scss';


export default class MultiSelectAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className='lxc-answers-wrapper'>
                <legend className='lxc-answers-title'>Answers*</legend>
                <div className='lxc-answers-description'>
                    Enter the answers below and select whether an answer is correct or incorrect.
                    Remember, you can have more than one correct answer.
                </div>
                <div className='lxc-answers-list lxc-answers-list_multi'>
                    {
                        this.props.answersList.map((answer) => {
                            return <MultiSelectItem 
                                        key={answer.id} {...answer}
                                        {...this.props}
                                    />
                        })
                    }
                    <div className='lxc-answers-another-option'>
                        <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.multiSelectAddAnswer}>
                            + Add <span className='lxc-hide-mobile'>another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
}
