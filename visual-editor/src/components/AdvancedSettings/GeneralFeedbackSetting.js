import React from 'react';
import { FormattedMessage } from 'react-intl';

import '../../assets/scss/app.scss';


export default class GeneralFeedbackSetting extends React.PureComponent {

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>
                <FormattedMessage
                    id="generalFeedbackSetting.block.title"
                    defaultMessage="Genereal feedback"
                />
                </div>
                <div className='lxc-advanced-settings-block-description'>
                <FormattedMessage
                    id="generalFeedbackSetting.block.description"
                    defaultMessage="Feedback will appear when a student submits a wrong answer"
                />
                </div>

                <div className='lxc-advanced-settings-form'>
                    <label className='lxc-advanced-settings-label' htmlFor='sas22323'>
                        <FormattedMessage
                            id="generalFeedbackSetting.settings.lable"
                            defaultMessage="Genereal feedback"
                        />
                    </label>
                    <FormattedMessage id="generalFeedbackSetting.inputField" defaultMessage="Enter general feedback">
                        {
                            placeholder => (
                                <input
                                    id='sas22323'
                                    type='text'
                                    className='lxc-advanced-settings-field'
                                    defaultValue={this.props.feedbackContent}
                                    placeholder={placeholder}
                                    onChange={this.props.generalFeedbackChange}/>
                            )
                        }
                    </FormattedMessage>

                    <div className='lxc-advanced-settings-note'>
                        <FormattedMessage
                            id="generalFeedbackSetting.settings.note"
                            defaultMessage="Note: This will be overridden if you have added option specific feedback."
                        />
                    </div>
                </div>
            </div>
        )
    }
};
