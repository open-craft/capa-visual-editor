import * as React from 'react';
import Select from 'react-select';
import '../../assets/scss/app.scss';

export class ShortAdvancedSettings extends React.PureComponent {
    state = {
        selectedTemptOption: null,
        selectedPointOption: null,
    };

    handleTemptsChange = selectedTemptOption => this.setState({ selectedTemptOption });
    handleOptionsChange = selectedPointOption => this.setState({ selectedPointOption });

    render() {
        const { selectedTemptOption } = this.state;
        const { selectedPointOption } = this.state;

        return (
            <div className="advanced-settings-wrapper">
                <div className="advanced-settings advanced-settings_open">
                    <div className="advanced-settings-title">Advanced settings</div>

                    <div className="advanced-settings-block">
                        <div className="advanced-settings-block-title">Genereal feedback</div>
                        <div className="advanced-settings-block-description">Feedback will appear when a student submits a wrong answer.</div>

                        <div className="advanced-settings-form">
                            <label className="advanced-settings-label" htmlFor='stas2'>Genereal feedback</label>
                            <input id='stas2' type='text' className="advanced-settings-field" placeholder='Enter general feedback'/>
                            <div className="advanced-settings-note">Note: This will be overridden if you have added option specific feedback.</div>
                        </div>
                    </div>

                    <div className="advanced-settings-block">
                        <div className="advanced-settings-block-title">Hint</div>
                        <div className="advanced-settings-block-description">If unsure, a student can check the hint before answering a question.</div>
                        <div className="advanced-settings-form">
                            <label className="advanced-settings-label" htmlFor='stas3'>Hint</label>
                            <input id='stas3' type='text' className="advanced-settings-field" placeholder='Enter a hint'/>
                            <button className="advanced-settings-another-field-btn" type='button'>+ add another hint</button>
                            <div className="advanced-settings-note">Note: Hints can be turned off in an assignment.</div>
                        </div>
                    </div>

                    <div className="advanced-settings-block">
                        <div className="advanced-settings-block-title">Scoring</div>
                        <div className="advanced-settings-block-description">Decide on the amount of points and attempts per question.</div>

                        <div className="advanced-settings-form">
                            <div className="advanced-settings-container">
                                <div className="advanced-settings-col-half">
                                    <label className="advanced-settings-label" htmlFor='stas4'>Default number of at tempts</label>
                                    <Select
                                        id='sas4'
                                        className="advanced-settings-select"
                                        isSearchable={false}
                                        placeholder="- Select -"
                                        value={selectedTemptOption}
                                        onChange={this.handleTemptsChange}
                                        options={[
                                            { value: 'radio', label: '1' },
                                            { value: 'select', label: '2' },
                                        ]}
                                    />
                                </div>
                                <div className="advanced-settings-col-half">
                                    <label className="advanced-settings-label" htmlFor='stas5'>Default points</label>
                                    <Select
                                        id='sas5'
                                        className="advanced-settings-select"
                                        isSearchable={false}
                                        placeholder="- Select -"
                                        value={selectedPointOption}
                                        onChange={this.handleOptionsChange}
                                        options={[
                                            { value: 'radio', label: '1' },
                                            { value: 'select', label: '2' },
                                        ]}
                                    />
                                </div>
                            </div>
                            <div className="advanced-settings-note">Note: Attempts count and points can be altered when adding to an assignment.</div>
                        </div>
                    </div>
                </div>
                <button type='button' className="show-advanced-settings">
                    {/*Show advanced options*/}
                    Less options
                    <span className="show-advanced-settings-icon"></span>
                </button>
            </div>
        );
    }
}
