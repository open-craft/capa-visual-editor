import * as React from 'react';
import { defineMessages, injectIntl, FormattedHTMLMessage } from 'react-intl';
import SingleSelectItem from './SingleSelectItem';

import '../../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'SingleSelectAnswers.title',
        defaultMessage: 'Answers*'
    },
    description: {
        id: 'SingleSelectAnswers.description',
        defaultMessage: 'Enter the answers below and select whether an answer is correct or incorrect.'
    },
    btnAddNewAnswer: {
        id: 'SingleSelectAnswers.btnAddNewAnswer',
        defaultMessage: '+ Add answer'
    }
})

class SingleSelectAnswers extends React.Component {

    render() {
        const { formatMessage } = this.props.intl;
        return (
            <fieldset className='lxc-answers-wrapper'>
                <legend className='lxc-answers-title'>
                    {formatMessage(messages.title)}
                </legend>
                <div className='lxc-answers-description'>
                    {formatMessage(messages.description)}
                </div>
                <div className='lxc-answers-list'>
                    {
                        this.props.answersList.map(answer => {
                            return <SingleSelectItem
                                        key={Math.random()} {...answer}
                                        singleSelectChangeAnswer={this.props.singleSelectChangeAnswer}
                                        singleSelectRemoveAnswer={this.props.singleSelectRemoveAnswer}
                                        answersList={this.props.answersList}
                                        />
                        })
                    }
                    <div className='lxc-answers-another-option'>
                        <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.singleSelectAddAnswer}>
                            {
                                this.props.answersList.length ?
                                <FormattedHTMLMessage
                                    id="addButton"
                                    defaultMessage="+ Add <span class={className}>another</span> answer"
                                    values={{
                                        className: 'lxc-hide-mobile'
                                    }}
                                /> :
                                formatMessage(messages.btnAddNewAnswer)
                            }
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
};

export default injectIntl(SingleSelectAnswers);
