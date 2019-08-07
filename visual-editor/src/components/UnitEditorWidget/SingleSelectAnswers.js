import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

import {SingleSelectItem} from './SingleSelectItem';

import '../../assets/scss/app.scss';

export default class SingleSelectAnswers extends React.Component {

    render() {
        return (
            <fieldset className='lxc-answers-wrapper'>
                <legend className='lxc-answers-title'>
                    <FormattedMessage
                        id="singleSelectAnswers.title"
                        defaultMessage="Answers*"
                    />
                </legend>
                <div className='lxc-answers-description'>
                    <FormattedMessage
                        id="singleSelectAnswers.description"
                        defaultMessage="Enter the answers below and select whether an answer is correct or incorrect."
                    />
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
                            <FormattedHTMLMessage
                                id="addButton"
                                defaultMessage="+ Add <span class={className}>another</span> answer"
                                values={{
                                    className: 'lxc-hide-mobile'
                                }}
                            />
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
};
