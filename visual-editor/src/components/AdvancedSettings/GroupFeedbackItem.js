import React from 'react';

import { groupFeedbackWordMapping } from '../../Utils';


export default class GroupFeedbackItem extends React.Component{

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
        return (
            <fieldset className='lxc-advanced-settings-feedback-wrapper'>
                <label className='lxc-advanced-settings-label' htmlFor={`feedbackField${this.props.id}`}>
                    Group fail feedback
                </label>
                <input
                    id={`feedbackField${this.props.id}`}
                    type='text'
                    className='lxc-advanced-settings-field'
                    placeholder='Enter group feedback'
                    value={this.props.feedback}
                    onChange={this.feedbackChangeHandler.bind(this)}>
                </input>
                <div className='lxc-advanced-settings-note'>Show this when the following options are selected:</div>
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
                <button className='lxc-feedback-remove-btn' onClick={this.delete.bind(this)}>
                    Delete group feedback
                </button>
            </fieldset>
        )
    }
}
