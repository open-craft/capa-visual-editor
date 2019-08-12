import * as React from 'react';
import { defineMessages, injectIntl, FormattedHTMLMessage } from 'react-intl';

import MultiSelectItem from './MultiSelectItem';

import '../../assets/scss/app.scss';


const messages = defineMessages({
    title: {
        id: 'MultiSelectAnswers.title',
        defaultMessage: 'Answers*'
    },
    description: {
        id: 'MultiSelectAnswers.description',
        defaultMessage: 'Enter the answers below and select whether an answer is correct or incorrect. Remember, you can have more than one correct answer.'
    },
    btnAddNewAnswer: {
        id: 'MultiSelectAnswers.btnAddNewAnswer',
        defaultMessage: '+ Add answer'
    }
})


class MultiSelectAnswers extends React.Component {

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
                            {
                                this.props.answersList.length ?
                                <FormattedHTMLMessage
                                    id="MultiSelectAnswers.addButton"
                                    defaultMessage="+ Add <span className='lxc-hide-mobile'>another</span> answer"
                                /> :
                                formatMessage(messages.btnAddNewAnswer)
                            }
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
}

export default injectIntl(MultiSelectAnswers);
