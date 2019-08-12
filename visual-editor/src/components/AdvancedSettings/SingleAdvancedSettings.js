import * as React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import AnswerTypeSetting from './AnswerTypeSetting';
import HintSetting from './HintSetting';
import ScorringSetting from './ScoringSetting';

import '../../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'SingleAdvansedSettings.title',
        defaultMessage: 'Advanced settings'
    },
    closeSettings: {
        id: 'SingleAdvansedSettings.closeSettings',
        defaultMessage: 'Less options'
    },
    showSettings: {
        id: 'SingleAdvansedSettings.showSettings',
        defaultMessage: 'Show advanced options'
    }
})

class SingleAdvancedSettings extends React.PureComponent {

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
        const { formatMessage } = this.props.intl;

        return (
            <div className='lxc-advanced-settings-wrapper'>
                <div className={`lxc-advanced-settings ${this.state.advancedSettingsOpenned ? 'lxc-advanced-settings_open' : ''}`}>
                    <div className='lxc-advanced-settings-title'>
                        {formatMessage(messages.title)}
                    </div>
                    <AnswerTypeSetting
                        answerTypeSelectedOption={this.props.answerTypeSelectedOption}
                        answerTypeOptions={this.props.answerTypeOptions}
                        answerTypeChange={this.props.answerTypeChange}
                    />
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
                    {this.state.advancedSettingsOpenned ? formatMessage(messages.closeSettings) : formatMessage(messages.showSettings)}
                    <span className='lxc-show-advanced-settings-icon'></span>
                </button>
            </div>
        );
    }
}

export default injectIntl(SingleAdvancedSettings);
