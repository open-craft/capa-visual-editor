import React from 'react';

import '../../assets/scss/app.scss';

import * as actions from '../../store/actions/action-types';
import { connect } from 'react-redux';


export class GeneralFeedbackSetting extends React.PureComponent {

    render() {
        console.log(this.props, 'GeneralFeedbackSetting render, props');
        return (
            <div className="advanced-settings-block">
                <div className="advanced-settings-block-title">Genereal feedback</div>
                <div className="advanced-settings-block-description">Feedback will appear when a student submits a wrong answer</div>

                <div className="advanced-settings-form">
                    <label className="advanced-settings-label" htmlFor='sas2'>Genereal feedback</label>
                    <input id='sas2' type='text' className="advanced-settings-field" defaultValue={this.props.settings} placeholder='Enter general feedback' onChange={this.props.generalFeedbackChanged}/>
                    <div className="advanced-settings-note">Note: This will be overridden if you have added option specific feedback.</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log(store);
    return {
        settings: store.multiAdvancedSettings.settings
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        generalFeedbackChanged: (event) => {
            return dispatch({type: actions.MULTI_ADVANCED_SETTINGS_CHANGED, value: event.target.value});
      }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(GeneralFeedbackSetting);
