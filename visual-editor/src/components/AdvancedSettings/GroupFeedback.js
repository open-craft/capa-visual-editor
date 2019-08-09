import React from 'react';
import GroupFeedbackItem from './GroupFeedbackItem';


export default class GroupFeedback extends React.Component {

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>GROUP feedback</div>
                <div className='lxc-advanced-settings-block-description'>Feedback will appear when a student submits a wrong answer.</div>

                <div className='lxc-advanced-settings-form'>
                {
                    this.props.groupFeedbackList.map((groupFeedback, ind) => {
                        return (
                            <GroupFeedbackItem
                                key={ind}
                                id={ind}
                                answersList={this.props.answersList}
                                groupFeedbackChange={this.props.groupFeedbackChange}
                                groupFeedbackRemove={this.props.groupFeedbackRemove}
                                {...groupFeedback}
                            />
                        )
                    })
                }
                    <button className='lxc-advanced-settings-another-field-btn' type='button' onClick={this.props.groupFeedbackAdd}>+ Add group feedback</button>
                    <div className='lxc-advanced-settings-note'>Note: Group feedback overrides specific feedback</div>
                </div>

            </div>
        )
    }
};
