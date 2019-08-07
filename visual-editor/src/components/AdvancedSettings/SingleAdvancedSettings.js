import * as React from 'react';
import { FormattedMessage } from 'react-intl';
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
            <div className='lxc-advanced-settings-wrapper'>
                <div className={`lxc-advanced-settings ${this.state.advancedSettingsOpenned ? 'lxc-advanced-settings_open' : ''}`}>
                    <div className='lxc-advanced-settings-title'>
                        <FormattedMessage
                            id="singleAdvancedSettings.title"
                            defaultMessage="Advanced settings"
                        />
                    </div>
                    <AnswerTypeSetting
                        answerTypeSelectedOption={this.props.answerTypeSelectedOption}
                        answerTypeOptions={this.props.answerTypeOptions}
                        answerTypeChange={this.props.answerTypeChange}
                    />
                    {/* <GeneralFeedbackSetting
                        groupFeedbackContent={this.props.groupFeedbackContent}
                        generalFeedbackChange={this.props.groupFeedbackchange}
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
                <button type='button' className='lxc-show-advanced-settings' onClick={this.switchAdvancedSettings.bind(this)}>
                    {this.state.advancedSettingsOpenned ? 'Less options' : 'Show advanced options'}
                    <span className='lxc-show-advanced-settings-icon'></span>
                </button>
            </div>
        );
    }
}
