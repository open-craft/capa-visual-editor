import React from 'react';
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';

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
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>
                    <FormattedMessage
                        id="answerTypeSetting.block.title"
                        defaultMessage="Answer type"
                    />
                </div>
                <div className='lxc-advanced-settings-block-description'>
                    <FormattedMessage
                        id="answerTypeSetting.block.description"
                        defaultMessage="Choose the way in which the answers should be displated."
                    />
                </div>
                <div className='lxc-advanced-settings-form'>
                    <label className='lxc-advanced-settings-label' htmlFor='sas1'>
                        <FormattedMessage
                            id="answerTypeSetting.form.lable"
                            defaultMessage="Answer type"
                        />
                    </label>
                        <FormattedMessage id="answerTypeSetting.select" defaultMessage="- Select -">
                            {
                                placeholder => (
                                    <Select
                                        id='sas1'
                                        className='lxc-advanced-settings-select'
                                        isSearchable={false}
                                        placeholder={placeholder}
                                        value={this.props.answerTypeSelectedOption}
                                        onChange={this.props.answerTypeChange}
                                        options={this.props.answerTypeOptions}
                                    />
                                )
                            }
                        </FormattedMessage>
                    <div className='lxc-advanced-settings-note'>
                        <FormattedMessage
                            id="answerTypeSetting.note"
                            defaultMessage="Note: Use dropdowns when you have more than 10 items, to make it easier for user to choose"
                        />
                    </div>
                </div>
            </div>
        )
    }
};
