import * as React from 'react';
import Select from 'react-select';

import AnswerTypeSetting from '../AdvancedSettings/AnswerTypeSetting';
import GeneralFeedbackSetting from '../AdvancedSettings/GeneralFeedbackSetting';

import '../../assets/scss/app.scss';
import HintSetting from '../AdvancedSettings/HintSetting';
import ScorringSetting from '../AdvancedSettings/ScoringSetting';

export class SingleAdvancedSettings extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.handleTemptsChange = this.handleTemptsChange.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);
        this.switchAdvancedSettings = this.switchAdvancedSettings.bind(this);

        this.state = {
            selectedTypeOption: null,
            selectedTemptOption: null,
            selectedPointOption: null,
            advancedSettingsOpenned: false
        };
    }

    handleTypeChange (selectedTypeOption) {
        this.setState({ selectedTypeOption });
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

        return (
            <div className="advanced-settings-wrapper">
                <div className={`advanced-settings ${this.state.advancedSettingsOpenned ? 'advanced-settings_open' : ''}`}>
                    <div className="advanced-settings-title">Advanced settings</div>


                    <AnswerTypeSetting selectedTypeOption={this.state.selectedTypeOption}/>
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
