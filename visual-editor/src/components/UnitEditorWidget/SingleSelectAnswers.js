import * as React from 'react';
import {SingleSelectItem} from './SingleSelectItem';

import '../../assets/scss/app.scss';

export default class SingleSelectAnswers extends React.Component {

    render() {
        return (
            <fieldset className='lxc-answers-wrapper'>
                <legend className='lxc-answers-title'>Answers*</legend>
                <div className='lxc-answers-description'>
                    Enter the answers below and select whether an answer is correct or incorrect.
                </div>
                <div className='lxc-answers-list'>
                    {
                        this.props.answersList.map(answer => {
                            return <SingleSelectItem 
                                        key={answer.id} {...answer} 
                                        singleSelectChangeAnswer={this.props.singleSelectChangeAnswer} 
                                        singleSelectRemoveAnswer={this.props.singleSelectRemoveAnswer}
                                        />
                        })
                    }
                    <div className='lxc-answers-another-option'>
                        <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.singleSelectAddAnswer}>
                            + Add <span className='lxc-hide-mobile'>another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
};
