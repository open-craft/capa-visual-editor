import React from 'react';

import '../../assets/scss/app.scss';


export default class GeneralFeedbackSetting extends React.PureComponent {

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>Genereal feedback</div>
                <div className='lxc-advanced-settings-block-description'>Feedback will appear when a student submits a wrong answer</div>

                <div className='lxc-advanced-settings-form'>
                    <label className='lxc-advanced-settings-label' htmlFor='sas22323'>Genereal feedback</label>
                    <input 
                        id='sas22323' 
                        type='text' 
                        className='lxc-advanced-settings-field'
                        defaultValue={this.props.feedbackContent} 
                        placeholder='Enter general feedback' 
                        onChange={this.props.generalFeedbackChange}/>
                    <div className='lxc-advanced-settings-note'>Note: This will be overridden if you have added option specific feedback.</div>
                </div>
            </div>
        )
    }
};
