import * as React from 'react';
import '../../assets/scss/app.scss';
import GeneralFeedbackSetting from './GeneralFeedbackSetting';
import HintSetting from './HintSetting';
import ScorringSetting from './ScoringSetting';

export class ShortAdvancedSettings extends React.PureComponent {

    constructor(props) {
        super(props);
        this.switchAdvancedSettings = this.switchAdvancedSettings.bind(this);
        this.state = {
            advancedSettingsOpenned: false
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

                    {/* <GeneralFeedbackSetting
                        feedbackContent={this.props.feedbackContent}
                        generalFeedbackChange={this.props.generalFeedbackChange}
                    /> */}
                    <HintSetting
                        hints={this.props.hints}

                        hintAdd={this.props.hintAdd}
                        hintRemove={this.props.hintRemove}
                        hintChange={this.props.hintChange}
                    />
                    <ScorringSetting
                        scorringSelectedPointOption={this.props.scorringSelectedPointOption}
                        scorringselectedAttemptsOption={this.props.scorringselectedAttemptsOption}
                        scorringattemptsOptions={this.props.scorringattemptsOptions}
                        scorringPointsOptions={this.props.scorringPointsOptions}
                        scorringAttemptsChange={this.props.scorringAttemptsChange}
                        scorringPointsChange={this.props.scorringPointsChange}
                    />
                </div>
                <button type='button' className='lxc-show-advanced-settings' onClick={this.switchAdvancedSettings}>
                    {this.state.advancedSettingsOpenned ? 'Less options' : 'Show advanced options'}
                    <span className='lxc-show-advanced-settings-icon'></span>
                </button>
            </div>
        );
    }
}
