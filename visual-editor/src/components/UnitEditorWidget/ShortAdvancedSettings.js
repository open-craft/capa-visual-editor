import * as React from 'react';
import Select from 'react-select';
import '../../assets/scss/app.scss';
import GeneralFeedbackSetting from '../AdvancedSettings/GeneralFeedbackSetting';
import HintSetting from '../AdvancedSettings/HintSetting';
import ScorringSetting from '../AdvancedSettings/ScoringSetting';

export class ShortAdvancedSettings extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleTemptsChange = this.handleTemptsChange.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);
        this.switchAdvancedSettings = this.switchAdvancedSettings.bind(this);
        this.state = {
            selectedTemptOption: null,
            selectedPointOption: null,
            advancedSettingsOpenned: false
        };
    }

    handleTemptsChange (selectedTemptOption) {
        this.setState({ selectedTemptOption });
    }

    handleOptionsChange (selectedPointOption) {
        this.setState({ selectedPointOption });
    }

    switchAdvancedSettings() {
        this.setState({
            advancedSettingsOpenned: !this.state.advancedSettingsOpenned
        });
    }

    render() {
        const { selectedTemptOption } = this.state;
        const { selectedPointOption } = this.state;

        return (
            <div className="advanced-settings-wrapper">
                <div className={`advanced-settings ${this.state.advancedSettingsOpenned ? 'advanced-settings_open' : ''}`}>
                    <div className="advanced-settings-title">Advanced settings</div>

                    <GeneralFeedbackSetting/>
                    <HintSetting/>
                    <ScorringSetting/>
                </div>
                <button type='button' className="show-advanced-settings" onClick={this.switchAdvancedSettings}>
                    {this.state.advancedSettingsOpenned ? 'Less options' : 'Show advanced options'}
                    <span className="show-advanced-settings-icon"></span>
                </button>
            </div>
        );
    }
}
