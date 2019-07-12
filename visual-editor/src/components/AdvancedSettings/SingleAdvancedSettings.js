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
                    <AnswerTypeSetting
                        answerTypeSelectedOption={this.props.answerTypeSelectedOption}
                        answerTypeOptions={this.props.answerTypeOptions}
                        answerTypeChange={this.props.answerTypeChange}
                    />
                    <GeneralFeedbackSetting
                        groupFeedbackContent={this.props.groupFeedbackContent}
                        generalFeedbackChange={this.props.groupFeedbackchange}
                    />
                    <HintSetting
                        hints={this.props.hints}
                        hintAdd={this.props.hintAdd}
                        hintRemove={this.props.hintRemove}
                        hintChange={this.props.hintChange}
                    />
                    <ScorringSetting
                        scorringSelectedPointOption={this.props.scorringSelectedPointOption}
                        scorringSelectedTemptOption={this.props.scorringSelectedTemptOption}
                        scorringTemptsOptions={this.props.scorringTemptsOptions}
                        scorringPointsOptions={this.props.scorringPointsOptions}
                        scorringTemptsChange={this.props.scorringTemptsChange}
                        scorringPointsChange={this.props.scorringPointsChange}
                    />
                </div>
                <button type='button' className="show-advanced-settings" onClick={this.switchAdvancedSettings.bind(this)}>
                    {this.state.advancedSettingsOpenned ? 'Less options' : 'Show advanced options'}
                    <span className="show-advanced-settings-icon"></span>
                </button>
            </div>
        );
    }
}
