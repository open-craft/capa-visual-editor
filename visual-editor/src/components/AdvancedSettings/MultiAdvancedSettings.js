import * as React from 'react';
import '../../assets/scss/app.scss';
import GeneralFeedbackSetting from './GeneralFeedbackSetting';
import HintSetting from './HintSetting';
import ScorringSetting from './ScoringSetting';
import GroupFeedback from './GroupFeedback';



export default class MultiAdvancedSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedTemptOption: null,
            selectedPointOption: null,
            advancedSettingsOpenned: false,
            selectedTypeOption: null
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

                    <GeneralFeedbackSetting {...this.props}/>
                    <GroupFeedback {...this.props}/>
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
