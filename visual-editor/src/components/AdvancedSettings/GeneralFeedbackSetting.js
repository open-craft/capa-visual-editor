import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import '../../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'GeneralFeedbackSetting.title',
        defaultMessage: 'Genereal feedback'
    },
    description: {
        id: 'GeneralFeedbackSetting.description',
        defaultMessage: 'Feedback will appear when a student submits a wrong answer'
    },
    label: {
        id: 'GeneralFeedbackSetting.label',
        defaultMessage: 'Genereal feedback'
    },
    note: {
        id: 'GeneralFeedbackSetting.note',
        defaultMessage: 'Note: This will be overridden if you have added option specific feedback.'
    },
    placeholder: {
        id: 'GeneralFeedbackSetting.placeholder',
        defaultMessage: 'Enter general feedback'
    }
})

class GeneralFeedbackSetting extends React.PureComponent {

    render() {
        const { formatMessage } = this.props.intl;

        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>
                    {formatMessage(messages.title)}
                </div>
                <div className='lxc-advanced-settings-block-description'>
                    {formatMessage(messages.description)}
                </div>

                <div className='lxc-advanced-settings-form'>
                    <label className='lxc-advanced-settings-label' htmlFor='sas22323'>
                        {formatMessage(messages.label)}
                    </label>
                    <input
                        id='sas22323'
                        type='text'
                        className='lxc-advanced-settings-field'
                        defaultValue={this.props.feedbackContent}
                        placeholder={formatMessage(messages.placeholder)}
                        onChange={this.props.generalFeedbackChange}/>
                    <div className='lxc-advanced-settings-note'>
                        {formatMessage(messages.note)}
                    </div>
                </div>
            </div>
        )
    }
};

export default injectIntl(GeneralFeedbackSetting);
