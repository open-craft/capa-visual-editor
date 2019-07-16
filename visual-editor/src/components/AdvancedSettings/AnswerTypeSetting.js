import React from 'react';
import Select from 'react-select';
import * as actionTypes from '../../store/actions/action-types';
import { connect } from 'react-redux';

import '../../assets/scss/app.scss';

export default class AnswerTypeSerting extends React.PureComponent {

    constructor(props) {
        super(props);
        this.handleTypeChange = this.handleTypeChange.bind(this);
        this.state = {};

    }

    componentDidMount() {
        this.setState({...this.props});
    }

    handleTypeChange(value) {
        this.setState({
            selectedTypeOption: value
        });
    }

    render() {
        return (
            <div className="lxc-advanced-settings-block">
                <div className="lxc-advanced-settings-block-title">Answer type</div>
                <div className="lxc-advanced-settings-block-description">Choose the way in which the answers should be displated.</div>

                <div className="lxc-advanced-settings-form">
                    <label className="lxc-advanced-settings-label" htmlFor='sas1'>Answer type</label>
                    <Select
                        id='sas1'
                        className="lxc-advanced-settings-select"
                        isSearchable={false}
                        placeholder="- Select -"
                        value={this.props.answerTypeSelectedOption}
                        onChange={this.props.answerTypeChange}
                        options={this.props.answerTypeOptions}
                    />
                    <div className="lxc-advanced-settings-note">Note: Use dropdowns when you have more than 10 items, to make it easier for user to choose</div>
                </div>
            </div>
        )
    }
};
