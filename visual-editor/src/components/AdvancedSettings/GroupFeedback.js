import React from 'react';
import {Editor} from '@tinymce/tinymce-react/lib/cjs/index';


export default class GroupFeedback extends React.PureComponent {

    handleEditorChange (e) {
        this.props.groupFeedbackchange(e.target.getContent());
    }

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>GROUP feedback</div>
                <div className='lxc-advanced-settings-block-description'>Feedback will appear when a student submits a wrong answer. </div>

                <div className='lxc-advanced-settings-form'>
                    <fieldset className='lxc-advanced-settings-feedback-wrapper'>
                        <label className='lxc-advanced-settings-label' htmlFor='feedbackField1'>Group fail feedback</label>
                        <input id='feedbackField1' type='text' className='lxc-advanced-settings-field' placeholder='Enter group feedback'></input>
                        <div className='lxc-advanced-settings-note'>Show this when the following options are selected:</div>
                        <div className='lxc-advanced-settings-feedback-options'>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option1`}/>
                                <label htmlFor={`feedback-option1`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    A
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option2`}/>
                                <label htmlFor={`feedback-option2`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    B
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option3`}/>
                                <label htmlFor={`feedback-option3`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    C
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option4`}/>
                                <label htmlFor={`feedback-option4`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    D
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option5`}/>
                                <label htmlFor={`feedback-option5`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    E
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option6`}/>
                                <label htmlFor={`feedback-option6`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    F
                                </label>
                            </div>
                        </div>
                        <button className='lxc-feedback-remove-btn'>
                            Delete group feedback
                        </button>
                    </fieldset>

                    <fieldset className='lxc-advanced-settings-feedback-wrapper'>
                        <label className='lxc-advanced-settings-label' htmlFor='feedbackField2'>Group fail feedback</label>
                        <input id='feedbackField2' type='text' className='lxc-advanced-settings-field' placeholder='Enter group feedback'></input>
                        <div className='lxc-advanced-settings-note'>Show this when the following options are selected:</div>
                        <div className='lxc-advanced-settings-feedback-options'>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option7`}/>
                                <label htmlFor={`feedback-option7`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    A
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option8`}/>
                                <label htmlFor={`feedback-option8`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    B
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option9`}/>
                                <label htmlFor={`feedback-option9`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    C
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option10`}/>
                                <label htmlFor={`feedback-option10`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    D
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option11`}/>
                                <label htmlFor={`feedback-option11`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    E
                                </label>
                            </div>
                            <div className='lxc-advanced-settings-feedback-option'>
                                <input name='feedback-option' type='checkbox' id={`feedback-option12`}/>
                                <label htmlFor={`feedback-option12`} className='lxc-advanced-settings-feedback-label'>
                                    <span className='lxc-switch-checkbox'></span>
                                    F
                                </label>
                            </div>
                        </div>
                        <button className='lxc-feedback-remove-btn'>
                            Delete group feedback
                        </button>
                    </fieldset>

                    <button className='lxc-advanced-settings-another-field-btn' type='button' onClick={this.props.hintAdd}>+ Add group feedback</button>
                    <div className='lxc-advanced-settings-note'>Note: Group feedback overrides specific feedback</div>
                </div>

            </div>
        )
    }
};
