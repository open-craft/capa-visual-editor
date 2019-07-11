import React from 'react';
import { connect } from 'react-redux';

import {GROUP_FEEDBACK_SETTING_CHANGED} from '../../store/actions/action-types';


export class GroupFeedback extends React.PureComponent {

    render() {
        return (
            <div className="advanced-settings-block">
                <div className="advanced-settings-block-title">GROUP feedback</div>
                <div className="advanced-settings-block-description">Feedback will appear when a student submits a wrong answer. </div>

                <textarea className="test-redactor" onChange={this.props.change}/>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        groupFeedbackContent: store.groupFeedbackSettings.groupFeedbackContent
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        change: (event) => {
            return dispatch({type: GROUP_FEEDBACK_SETTING_CHANGED, groupFeedbackContent: event.target.value});
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(GroupFeedback);
