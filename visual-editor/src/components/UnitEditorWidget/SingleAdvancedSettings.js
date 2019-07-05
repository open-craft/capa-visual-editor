import * as React from 'react';
import Select from 'react-select';
import '../../assets/scss/app.scss';

export class SingleAdvancedSettings extends React.PureComponent {
    state = {
        selectedTypeOption: null,
        selectedTemptOption: null,
        selectedPointOption: null,
    };

    handleTypeChange = selectedTypeOption => this.setState({ selectedTypeOption });
    handleTemptsChange = selectedTemptOption => this.setState({ selectedTemptOption });
    handleOptionsChange = selectedPointOption => this.setState({ selectedPointOption });

    render() {

        const { selectedTypeOption } = this.state;
        const { selectedTemptOption } = this.state;
        const { selectedPointOption } = this.state;

        return (
            <div className="advanced-settings-wrapper">
                <div className="advanced-settings advanced-settings_open">
                    <div className="advanced-settings-title">Advanced settings</div>

                    <div className="advanced-settings-block">
                        <div className="advanced-settings-block-title">Answer type</div>
                        <div className="advanced-settings-block-description">Choose the way in which the answers should be displated.</div>

                        <div className="advanced-settings-form">
                            <label className="advanced-settings-label" htmlFor='sas1'>Answer type</label>
                            <Select
                                id='sas1'
                                className="advanced-settings-select"
                                isSearchable={false}
                                placeholder="- Select -"
                                value={selectedTypeOption}
                                onChange={this.handleTypeChange}
                                options={[
                                    { value: 'radio', label: 'Radio button' },
                                    { value: 'select', label: 'Select list' },
                                ]}
                            />
                            <div className="advanced-settings-note">Note: Use dropdowns when you have more than 10 items, to make it easier for user to choose</div>
                        </div>
                    </div>

                    <div className="advanced-settings-block">
                        <div className="advanced-settings-block-title">Genereal feedback</div>
                        <div className="advanced-settings-block-description">Feedback will appear when a student submits a wrong answer</div>

                        <div className="advanced-settings-form">
                            <label className="advanced-settings-label" htmlFor='sas2'>Genereal feedback</label>
                            <input id='sas2' type='text' className="advanced-settings-field" placeholder='Enter general feedback'/>
                            <div className="advanced-settings-note">Note: This will be overridden if you have added option specific feedback.</div>
                        </div>
                    </div>

                    <div className="advanced-settings-block">
                        <div className="advanced-settings-block-title">Hint</div>
                        <div className="advanced-settings-block-description">If unsure, a student can check the hint before answering a question.</div>
                        <div className="advanced-settings-form">
                            <label className="advanced-settings-label" htmlFor='sas3'>Hint</label>
                            <input id='sas3' type='text' className="advanced-settings-field" placeholder='Enter a hint'/>
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
                                    <label className="advanced-settings-label" htmlFor='sas4'>Default number of at tempts</label>
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
                                    <label className="advanced-settings-label" htmlFor='sas5'>Default points</label>
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
