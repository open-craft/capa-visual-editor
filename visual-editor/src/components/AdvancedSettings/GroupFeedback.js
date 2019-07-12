import React from 'react';


export default class GroupFeedback extends React.PureComponent {

    render() {
        return (
            <div className="advanced-settings-block">
                <div className="advanced-settings-block-title">GROUP feedback</div>
                <div className="advanced-settings-block-description">Feedback will appear when a student submits a wrong answer. </div>

                <textarea className="test-redactor" onChange={this.props.groupFeedbackchange}/>
            </div>
        )
    }
};
