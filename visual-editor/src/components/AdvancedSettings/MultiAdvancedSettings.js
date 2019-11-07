import * as React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import GroupFeedback from './GroupFeedback';
import HintSetting from './HintSetting';
import ScorringSetting from './ScoringSetting';
import { doAutoSize } from "../../Utils";

import '../../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'MultiAdvansedSettings.title',
        defaultMessage: 'Advanced settings'
    },
    closeSettings: {
        id: 'MultiAdvansedSettings.closeSettings',
        defaultMessage: 'Less options'
    },
    showSettings: {
        id: 'MultiAdvansedSettings.showSettings',
        defaultMessage: 'Show advanced options'
    }
})

class MultiAdvancedSettings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            advancedSettingsOpenned: false,
        };
    }

    switchAdvancedSettings() {
        this.setState({
            advancedSettingsOpenned: !this.state.advancedSettingsOpenned
        }, () => {
            doAutoSize();
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
                    {this.state.advancedSettingsOpenned ? formatMessage(messages.closeSettings) : formatMessage(messages.showSettings)}
                    <span className='lxc-show-advanced-settings-icon'></span>
                </button>
            </div>
        );
    }
}

export default injectIntl(MultiAdvancedSettings);
