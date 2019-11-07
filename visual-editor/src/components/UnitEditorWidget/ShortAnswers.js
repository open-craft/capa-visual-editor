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
    },
    btnAddNewCorrectAnswer: {
        id: 'ShortAnswers.btn.addNewCorrectAnswer',
        defaultMessage: '+ Add correct answer'
    },
    btnAddNewIncorrectAnswer: {
        id: 'ShortAnswers.btn.btnAddNewIncorrectAnswer',
        defaultMessage: '+ Add incorrect answer'
    }
    
})



class ShortAnswers extends React.PureComponent {

    render() {
        const { formatMessage } = this.props.intl;
        const correctAnswers = this.props.shortAnswersList.filter(answer => answer.correct);
        const incorrectAnswers = this.props.shortAnswersList.filter(answer => !answer.correct);
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
                            correctAnswers.map((shortAnswer, i) => {
                                return <ShortAnswersItem
                                        shortAnswersList={this.props.shortAnswersList}
                                        typeOptions={this.props.typeOptions}
                                        remove={this.props.shortAnswersRemoveAnswer}
                                        change={this.props.shortAnswersChangeAnswer}
                                        key={i}
                                        {...shortAnswer} />
                            })
                        }

                        <div className='lxc-answers-another-option'>
                            <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddCorrectAnswer}>
                                {
                                    correctAnswers.length ?
                                    formatMessage(messages.btnAddCorrAnsw) :
                                    formatMessage(messages.btnAddNewCorrectAnswer)
                                }
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
                            incorrectAnswers.map(shortAnswer => {
                                return <ShortAnswersItem
                                        shortAnswersList={this.props.shortAnswersList}
                                        typeOptions={this.props.typeOptions}
                                        remove={this.props.shortAnswersRemoveAnswer}
                                        change={this.props.shortAnswersChangeAnswer}
                                        key={shortAnswer.id}
                                        {...shortAnswer} />
                            })
                        }

                        <div className='lxc-answers-another-option'>
                            <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddIncorrectAnswer}>
                                {
                                    incorrectAnswers.length ?
                                    formatMessage(messages.btnAddInCorrAnsw) :
                                    formatMessage(messages.btnAddNewIncorrectAnswer)
                                }
                            </button>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
};

export default injectIntl(ShortAnswers);
