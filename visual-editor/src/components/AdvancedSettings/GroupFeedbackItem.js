import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import { groupFeedbackWordMapping } from '../../Utils';

const messages = defineMessages({
    label: {
        id: 'GroupFeedbackItem.lable',
        defaultMessage: 'Group fail feedback'
    },
    placeholder: {
        id: 'GroupFeedbackItem.placeholder',
        defaultMessage: 'Enter group feedback'
    },
    note: {
        id: 'GroupFeedbackItem.note',
        defaultMessage: 'Show this when the following options are selected:'
    },
    btn: {
        id: 'GroupFeedbackItem.btn',
        defaultMessage: 'Delete group feedback'
    },
})

class GroupFeedbackItem extends React.Component{
    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight+2}px`;
    }

    feedbackChangeHandler(event) {
        this.props.groupFeedbackChange({
            feedback: event.target.value,
            answers: this.props.answers,
            id: this.props.id
        })
    }

    groupChangeHandler(event){
        let answers = [];
        if (event.target.checked) {
            answers = this.props.answers.concat(+event.target.dataset.answerId);
        } else {
            answers = this.props.answers.filter((el)=>{
                return el !== +event.target.dataset.answerId;
            });
        }
        this.props.groupFeedbackChange({
            feedback: this.props.feedback,
            answers: answers,
            id: this.props.id
        });
    }

    delete() {
        this.props.groupFeedbackRemove(this.props.id);
    }

    render() {
        const { formatMessage } = this.props.intl;

        return (
            <fieldset className='lxc-advanced-settings-feedback-wrapper'>
                <label className='lxc-advanced-settings-label' htmlFor={`feedbackField${this.props.id}`}>
                    {formatMessage(messages.label)}
                </label>
                <textarea
                    rows={1}
                    id={`feedbackField${this.props.id}`}
                    className='lxc-advanced-settings-field'
                    placeholder={formatMessage(messages.placeholder)}
                    value={this.props.feedback}
                    onKeyUp={this.handleKeyDown}
                    onChange={this.feedbackChangeHandler.bind(this)}>
                </textarea>
                <div className='lxc-advanced-settings-note'>
                    {formatMessage(messages.note)}
                </div>
                <fieldset className='lxc-fieldset-wrap'>
                    <legend className='lxc-sr'>
                        {formatMessage(messages.note)}
                    </legend>
                    <div className='lxc-advanced-settings-feedback-options'>
                        {
                            this.props.answersList.map((el) => {
                                return (
                                    <div key={el.id} className='lxc-advanced-settings-feedback-option'>
                                        <input
                                            name='feedback-option'
                                            type='checkbox'
                                            id={`feedback-option-${this.props.id}-${el.id}`}
                                            data-answer-id={el.id}
                                            checked={this.props.answers.indexOf(el.id) > -1}
                                            onChange={this.groupChangeHandler.bind(this)}
                                        />
                                        <label htmlFor={`feedback-option-${this.props.id}-${el.id}`} className='lxc-advanced-settings-feedback-label'>
                                            <span className='lxc-switch-checkbox'></span>
                                            {groupFeedbackWordMapping[el.id]}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </fieldset>
                <button className='lxc-feedback-remove-btn' onClick={this.delete.bind(this)}>
                    {formatMessage(messages.btn)}
                </button>
            </fieldset>
        )
    }
}

export default injectIntl(GroupFeedbackItem);
