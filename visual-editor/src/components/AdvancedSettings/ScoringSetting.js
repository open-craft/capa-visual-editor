import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

import Select from 'react-select';
import { connect } from 'react-redux';
import { SCORRING_POINTS_CHANGED, SCORRING_TEMPTS_CHANGED } from '../../store/actions/action-types';


const messages = defineMessages({
    title: {
        id: 'ScoringSetting.title',
        defaultMessage: 'Scoring'
    },
    description: {
        id: 'ScoringSetting.description',
        defaultMessage: 'Decide on the amount of points and attempts per question.'
    },
    labelAttempts: {
        id: 'ScoringSetting.labelAttemps',
        defaultMessage: 'Default number of attempts'
    },
    labelPoints: {
        id: 'ScoringSetting.labelPoints',
        defaultMessage: 'Default points'
    },
    note: {
        id: 'ScoringSetting.note',
        defaultMessage: 'Note: Attempts count and points can be altered when adding to an assignment.'
    },
    placeholderAttemps: {
        id: 'ScoringSetting.placeholderAttemps',
        defaultMessage: '- Select -'
    },
    placeholderPoints: {
        id: 'ScoringSetting.placeholderPoints',
        defaultMessage: '- Select -'
    }
})

class ScorringSetting extends React.PureComponent {

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
                    <div className='lxc-advanced-settings-container'>
                        <div className='lxc-advanced-settings-col-half'>
                            <label className='lxc-advanced-settings-label lxc-advanced-settings-label_wrap' htmlFor='sas4'>
                                {formatMessage(messages.labelAttempts)}
                                <Select
                                    id='sas4'
                                    className='lxc-advanced-settings-select'
                                    isSearchable={false}
                                    placeholder={formatMessage(messages.placeholderAttemps)}
                                    defaultValue={this.props.selectedAttemptsOption}
                                    onChange={this.props.temptsChange}
                                    options={this.props.attemptsOptions}
                                />
                            </label>
                        </div>
                        <div className='lxc-advanced-settings-col-half'>
                            <label className='lxc-advanced-settings-label lxc-advanced-settings-label_wrap' htmlFor='sas5'>
                                {formatMessage(messages.labelPoints)}
                                <Select
                                    id='sas5'
                                    className='lxc-advanced-settings-select'
                                    isSearchable={false}
                                    placeholder={formatMessage(messages.placeholderPoints)}
                                    defaultValue={this.props.selectedPointOption}
                                    onChange={this.props.pointsChange}
                                    options={this.props.pointsOptions}
                                />
                            </label>
                        </div>
                    </div>
                    <div className='lxc-advanced-settings-note'>
                        {formatMessage(messages.note)}
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ScorringSetting));
