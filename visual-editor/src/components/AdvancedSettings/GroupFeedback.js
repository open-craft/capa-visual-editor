import React from 'react';
import GroupFeedbackItem from './GroupFeedbackItem';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
    title: {
        id: 'GroupFeedback.title',
        defaultMessage: 'GROUP feedback'
    },
    description: {
        id: 'GroupFeedback.description',
        defaultMessage: 'Feedback will appear when a student submits a wrong answer.'
    },
    btn: {
        id: 'GroupFeedback.btn',
        defaultMessage: '+ Add group feedback'
    },
    note: {
        id: 'GroupFeedback.note',
        defaultMessage: 'Note: Group feedback overrides specific feedback'
    },
})

class GroupFeedback extends React.Component {

    render() {
        const { formatMessage } = this.props.intl;

        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>
                    {formatMessage(messages.title)}
                </div>
                <div className='lxc-advanced-settings-block-description'>
                    {formatMessage(messages.description)}
                </div>

                <div className='lxc-advanced-settings-form'>
                {
                    this.props.groupFeedbackList.map((groupFeedback, ind) => {
                        return (
                            <GroupFeedbackItem
                                key={ind}
                                id={Math.random()}
                                answersList={this.props.answersList}
                                groupFeedbackChange={this.props.groupFeedbackChange}
                                groupFeedbackRemove={this.props.groupFeedbackRemove}
                                {...groupFeedback}
                            />
                        )
                    })
                }
                    <button className='lxc-advanced-settings-another-field-btn' type='button' onClick={this.props.groupFeedbackAdd}>
                        {formatMessage(messages.btn)}
                    </button>
                    <div className='lxc-advanced-settings-note'>
                        {formatMessage(messages.note)}
                    </div>
                </div>

            </div>
        )
    }
};

export default injectIntl(GroupFeedback);
