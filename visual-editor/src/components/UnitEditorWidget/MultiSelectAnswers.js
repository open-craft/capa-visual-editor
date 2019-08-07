import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import {MultiSelectItem} from './MultiSelectItem';

import '../../assets/scss/app.scss';


export default class MultiSelectAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className='lxc-answers-wrapper'>
                <legend className='lxc-answers-title'>
                    <FormattedMessage
                        id="multiSelect.answer.title"
                        defaultMessage="Answers*"
                    />
                </legend>
                <div className='lxc-answers-description'>
                    <FormattedMessage
                        id="multiSelect.answer.description"
                        defaultMessage="Enter the answers below and select whether an answer is correct or incorrect.
                        Remember, you can have more than one correct answer."
                    />
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
                            <FormattedHTMLMessage
                                id="addOptionButton"
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
}
