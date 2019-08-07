import * as React from 'react';

import GroupFeedback from './GroupFeedback';
import HintSetting from './HintSetting';
import ScorringSetting from './ScoringSetting';

import '../../assets/scss/app.scss';


export default class MultiAdvancedSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            advancedSettingsOpenned: false,
        };
    }
    switchAdvancedSettings() {
        this.setState({
            advancedSettingsOpenned: !this.state.advancedSettingsOpenned
        });
    }

    render() {
        return (
            <div className='lxc-advanced-settings-wrapper'>
                <div className={`lxc-advanced-settings ${this.state.advancedSettingsOpenned ? 'lxc-advanced-settings_open' : ''}`}>
                    <div className='lxc-advanced-settings-title'>Advanced settings</div>
                    <GroupFeedback
                        answersList={this.props.answersList}
                        groupFeedbackList={this.props.groupFeedbackList}
                        groupFeedbackChange={this.props.groupFeedbackChange}
                        groupFeedbackAdd={this.props.groupFeedbackAdd}
                        groupFeedbackRemove={this.props.groupFeedbackRemove}
                    />
                    <HintSetting {...this.props}/>
                    <ScorringSetting {...this.props}/>
                </div>
                <button type='button' className='lxc-show-advanced-settings' onClick={this.switchAdvancedSettings.bind(this)}>
                    {this.state.advancedSettingsOpenned ? 'Less options' : 'Show advanced options'}
                    <span className='lxc-show-advanced-settings-icon'></span>
                </button>
            </div>
        );
    }
}
