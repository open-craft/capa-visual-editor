import * as React from 'react';

import AnswerTypeSetting from './AnswerTypeSetting';
import GeneralFeedbackSetting from './GeneralFeedbackSetting';

import '../../assets/scss/app.scss';
import HintSetting from './HintSetting';
import ScorringSetting from './ScoringSetting';

export default class SingleAdvancedSettings extends React.PureComponent {

    constructor(props) {
        super(props);

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
            <div className="advanced-settings-wrapper">
                <div className={`advanced-settings ${this.state.advancedSettingsOpenned ? 'advanced-settings_open' : ''}`}>
                    <div className="advanced-settings-title">Advanced settings</div>

                    <AnswerTypeSetting {...this.props}/>
                    <GeneralFeedbackSetting {...this.props}/>
                    <HintSetting {...this.props}/>
                    <ScorringSetting {...this.props}/>
                </div>
                <button type='button' className="show-advanced-settings" onClick={this.switchAdvancedSettings.bind(this)}>
                    {this.state.advancedSettingsOpenned ? 'Less options' : 'Show advanced options'}
                    <span className="show-advanced-settings-icon"></span>
                </button>
            </div>
        );
    }
}
