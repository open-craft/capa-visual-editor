import React from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import { SCORRING_POINTS_CHANGED, SCORRING_TEMPTS_CHANGED } from '../../store/actions/action-types';


export class ScorringSetting extends React.PureComponent {

    constructor(props) {
        super(props);

        this.handleTemptsChange = this.handleTemptsChange.bind(this);
        this.handleOptionsChange = this.handleOptionsChange.bind(this);
    }

    handleTemptsChange(value) {
        this.setState({
            selectedAttemptsOption: value
        });
    }

    handleOptionsChange(value) {
        this.setState({
            selectedPointOption: value
        });
    }

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>Scoring</div>
                <div className='lxc-advanced-settings-block-description'>Decide on the amount of points and attempts per question.</div>

                <div className='lxc-advanced-settings-form'>
                    <div className='lxc-advanced-settings-container'>
                        <div className='lxc-advanced-settings-col-half'>
                            <label className='lxc-advanced-settings-label' htmlFor='sas4'>Default number of attempts</label>
                            <Select
                                id='sas4'
                                className='lxc-advanced-settings-select'
                                isSearchable={false}
                                placeholder='- Select -'
                                defaultValue={this.props.selectedAttemptsOption}
                                onChange={this.props.temptsChange}
                                options={this.props.attemptsOptions}
                            />
                        </div>
                        <div className='lxc-advanced-settings-col-half'>
                            <label className='lxc-advanced-settings-label' htmlFor='sas5'>Default points</label>
                            <Select
                                id='sas5'
                                className='lxc-advanced-settings-select'
                                isSearchable={false}
                                placeholder='- Select -'
                                defaultValue={this.props.selectedPointOption}
                                onChange={this.props.pointsChange}
                                options={this.props.pointsOptions}
                            />
                        </div>
                    </div>
                    <div className='lxc-advanced-settings-note'>Note: Attempts count and points can be altered when adding to an assignment.</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function(store) {
    return {
        selectedPointOption: store.scorringSettings.selectedPointOption,
        selectedAttemptsOption: store.scorringSettings.selectedAttemptsOption,
        attemptsOptions: store.scorringSettings.attemptsOptions,
        pointsOptions: store.scorringSettings.pointsOptions
    }
}

const mapDispatchToProps = function(dispatch) {
    return {
        temptsChange: (value) => {
            return dispatch({type: SCORRING_TEMPTS_CHANGED, ...value})
        },
        pointsChange: (value) => {
            return dispatch({type: SCORRING_POINTS_CHANGED, ...value})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScorringSetting);
