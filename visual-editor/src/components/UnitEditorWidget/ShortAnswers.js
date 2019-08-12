import * as React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import ShortAnswersItem from './ShortAnswersItem';

import '../../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'ShortAnswers.title',
        defaultMessage: 'Correct Answers*'
    },
    description: {
        id: 'ShortAnswers.description',
        defaultMessage: 'Enter the correct answer or other acceptable answers. (Not case sensitive)'
    },
    titleForm: {
        id: 'ShortAnswers.title.form',
        defaultMessage: 'Acceptable answers'
    },
    btnAddCorrAnsw: {
        id: 'ShortAnswers.btn.add.correct.answbtnAddCorrAnswer',
        defaultMessage: '+ Add another correct answer'
    },
    titleIncorrect: {
        id: 'ShortAnswers.title.incorrect.ansver',
        defaultMessage: 'InCorrect Answers'
    },
    descriptionIncorrect: {
        id: 'ShortAnswers.description.incorrect.answbtnAddCorrAnswer',
        defaultMessage: 'Add an optional incorrect answer such as a frequent misconception.'
    },
    formTitle: {
        id: 'ShortAnswers.form.title',
        defaultMessage: 'Wrong answers'
    },
    btnAddInCorrAnsw: {
        id: 'ShortAnswers.btn.add.incorrect.answer',
        defaultMessage: '+ Add another incorrect answer'
    }
})



class ShortAnswers extends React.PureComponent {

    render() {
        const { formatMessage } = this.props.intl;
        return (
            <div>
                <fieldset className='lxc-answers-wrapper'>
                    <legend className='lxc-answers-title'>
                        {formatMessage(messages.title)}
                    </legend>
                    <div className='lxc-answers-description'>
                        {formatMessage(messages.description)}
                    </div>
                    <div className='lxc-answers-list lxc-answers-list_short'>
                        <div className='lxc-answers-form-title'>
                            {formatMessage(messages.titleForm)}
                        </div>
                        {
                            this.props.shortAnswersList.map(shortAnswer => {
                                return shortAnswer.correct ? <ShortAnswersItem
                                        shortAnswersList={this.props.shortAnswersList}
                                        typeOptions={this.props.typeOptions}
                                        remove={this.props.shortAnswersRemoveAnswer}
                                        change={this.props.shortAnswersChangeAnswer}
                                        key={shortAnswer.id}
                                        {...shortAnswer} /> : null
                            })
                        }

                        <div className='lxc-answers-another-option'>
                            <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddCorrectAnswer}>
                                {formatMessage(messages.btnAddCorrAnsw)}
                            </button>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='lxc-answers-wrapper'>
                    <legend className='lxc-answers-title'>
                        {formatMessage(messages.titleIncorrect)}
                    </legend>
                    <div className='lxc-answers-description'>
                        {formatMessage(messages.descriptionIncorrect)}
                    </div>
                    <div className='lxc-answers-list lxc-answers-list_short'>
                        <div className='lxc-answers-form-title'>
                            {formatMessage(messages.formTitle)}
                        </div>
                        {
                            this.props.shortAnswersList.map(shortAnswer => {
                                return !shortAnswer.correct ? <ShortAnswersItem
                                        shortAnswersList={this.props.shortAnswersList}
                                        typeOptions={this.props.typeOptions}
                                        remove={this.props.shortAnswersRemoveAnswer}
                                        change={this.props.shortAnswersChangeAnswer}
                                        key={shortAnswer.id}
                                        {...shortAnswer} /> : null
                            })
                        }

                        <div className='lxc-answers-another-option'>
                            <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddIncorrectAnswer}>
                                {formatMessage(messages.btnAddInCorrAnsw)}
                            </button>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
};

export default injectIntl(ShortAnswers);
