import * as React from 'react';
import Select from 'react-select';
import styles from 'global/styles';

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
            <div className={styles.advancedSettingsWrapper}>
                <div className={styles.advancedSettings + ' ' + styles.advancedSettings_open}>
                    <div className={styles.advancedSettingsTitle}>Advanced settings</div>

                    <div className={styles.advancedSettingsBlock}>
                        <div className={styles.advancedSettingsBlockTitle}>Answer type</div>
                        <div className={styles.advancedSettingsBlockDescription}>Choose the way in which the answers should be displated.</div>

                        <div className={styles.advancedSettingsForm}>
                            <label className={styles.advancedSettingsLabel} htmlFor='sas1'>Answer type</label>
                            <Select
                                id='sas1'
                                className={styles.advancedSettingsSelect}
                                isSearchable={false}
                                placeholder="- Select -"
                                value={selectedTypeOption}
                                onChange={this.handleTypeChange}
                                options={[
                                    { value: 'radio', label: 'Radio button' },
                                    { value: 'select', label: 'Select list' },
                                ]}
                            />
                            <div className={styles.advancedSettingsNote}>Note: Use dropdowns when you have more than 10 items, to make it easier for user to choose</div>
                        </div>
                    </div>

                    <div className={styles.advancedSettingsBlock}>
                        <div className={styles.advancedSettingsBlockTitle}>Genereal feedback</div>
                        <div className={styles.advancedSettingsBlockDescription}>Feedback will appear when a student submits a wrong answer</div>

                        <div className={styles.advancedSettingsForm}>
                            <label className={styles.advancedSettingsLabel} htmlFor='sas2'>Genereal feedback</label>
                            <input id='sas2' type='text' className={styles.advancedSettingsField} placeholder='Enter general feedback'/>
                            <div className={styles.advancedSettingsNote}>Note: This will be overridden if you have added option specific feedback.</div>
                        </div>
                    </div>

                    <div className={styles.advancedSettingsBlock}>
                        <div className={styles.advancedSettingsBlockTitle}>Hint</div>
                        <div className={styles.advancedSettingsBlockDescription}>If unsure, a student can check the hint before answering a question.</div>
                        <div className={styles.advancedSettingsForm}>
                            <label className={styles.advancedSettingsLabel} htmlFor='sas3'>Hint</label>
                            <input id='sas3' type='text' className={styles.advancedSettingsField} placeholder='Enter a hint'/>
                            <button className={styles.advancedSettingsAnotherFieldBtn} type='button'>+ add another hint</button>
                            <div className={styles.advancedSettingsNote}>Note: Hints can be turned off in an assignment.</div>
                        </div>
                    </div>

                    <div className={styles.advancedSettingsBlock}>
                        <div className={styles.advancedSettingsBlockTitle}>Scoring</div>
                        <div className={styles.advancedSettingsBlockDescription}>Decide on the amount of points and attempts per question.</div>

                        <div className={styles.advancedSettingsForm}>
                            <div className={styles.advancedSettingsContainer}>
                                <div className={styles.advancedSettingsColHalf}>
                                    <label className={styles.advancedSettingsLabel} htmlFor='sas4'>Default number of at tempts</label>
                                    <Select
                                        id='sas4'
                                        className={styles.advancedSettingsSelect}
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
                                <div className={styles.advancedSettingsColHalf}>
                                    <label className={styles.advancedSettingsLabel} htmlFor='sas5'>Default points</label>
                                    <Select
                                        id='sas5'
                                        className={styles.advancedSettingsSelect}
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
                            <div className={styles.advancedSettingsNote}>Note: Attempts count and points can be altered when adding to an assignment.</div>
                        </div>
                    </div>
                </div>
                <button type='button' className={styles.showAdvancedSettings}>
                    {/*Show advanced options*/}
                    Less options
                    <span className={styles.showAdvancedSettingsIcon}></span>
                </button>
            </div>
        );
    }
}
