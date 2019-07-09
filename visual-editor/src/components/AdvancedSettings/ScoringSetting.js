import React from 'react';
import Select from 'react-select';


export default class ScorringSetting extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleTemptsChange = this.handleTemptsChange.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);

        this.state = {
            temptsOptions: [
                { value: 'radio', label: '1' },
                { value: 'select', label: '2' },
            ],
            pointsOptions: [
                { value: 'radio', label: '1' },
                { value: 'select', label: '2' },
            ],
            selectedTemptOption: null,
            selectedPointOption: null
        };
    }

    componentDidMount() {
        this.setState({...this.props});
    }

    handleTemptsChange(value) {
        this.setState({
            selectedTemptOption: value
        });
    }

    handleOptionsChange(value) {
        this.setState({
            selectedPointOption: value
        });
    }

    render() {
        return (
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
                                value={this.state.selectedTemptOption}
                                onChange={this.handleTemptsChange}
                                options={this.state.temptsOptions}
                            />
                        </div>
                        <div className="advanced-settings-col-half">
                            <label className="advanced-settings-label" htmlFor='sas5'>Default points</label>
                            <Select
                                id='sas5'
                                className="advanced-settings-select"
                                isSearchable={false}
                                placeholder="- Select -"
                                value={this.state.selectedPointOption}
                                onChange={this.handleOptionsChange}
                                options={this.state.pointsOptions}
                            />
                        </div>
                    </div>
                    <div className="advanced-settings-note">Note: Attempts count and points can be altered when adding to an assignment.</div>
                </div>
            </div>
        )
    }
}
