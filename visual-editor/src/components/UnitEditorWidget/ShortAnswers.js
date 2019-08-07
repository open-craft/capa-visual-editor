import * as React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import {ShortAnswersItem} from './ShortAnswersItem';

import '../../assets/scss/app.scss';

export default class ShortAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className='lxc-answers-wrapper'>
                <legend className='lxc-answers-title'>
                    <FormattedMessage
                        id="shortAnswers.title"
                        defaultMessage="Answers*"
                    />
                </legend>
                <div className='lxc-answers-description'>
                    <FormattedMessage
                        id="shortAnswers.description"
                        defaultMessage="Enter the correct answer or other acceptable answers. (Not case sensitive)"
                    />
                </div>
                <div className='lxc-answers-list lxc-answers-list_short'>
                    <div className='lxc-answers-form-title'>
                        <FormattedMessage
                            id="shortAnswers.form.title"
                            defaultMessage="Acceptable answers"
                        />
                        </div>
                    {
                        this.props.shortAnswersList.map(shortAnswer => {
                            return <ShortAnswersItem
                                    typeOptions={this.props.typeOptions}
                                    remove={this.props.shortAnswersRemoveAnswer}
                                    change={this.props.shortAnswersChangeAnswer}
                                    key={shortAnswer.id}
                                    {...shortAnswer} />
                        })
                    }

                    <div className='lxc-answers-another-option'>
                        <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddAnswer}>
                        <FormattedHTMLMessage
                            id="addAnswer"
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
