import React from 'react';
import Select from 'react-select';
import { defineMessages, injectIntl } from 'react-intl';
import '../../assets/scss/app.scss';

const messages = defineMessages({
    title: {
        id: 'AnswerTypeSetting.title',
        defaultMessage: 'Answer type'
    },
    description: {
        id: 'AnswerTypeSetting.description',
        defaultMessage: 'Choose the way in which the answers should be displated.'
    },
    label: {
        id: 'AnswerTypeSetting.label',
        defaultMessage: 'Answer type'
    },
    note: {
        id: 'AnswerTypeSetting.note',
        defaultMessage: 'Note: Use dropdowns when you have more than 10 items, to make it easier for user to choose'
    },
    placeholder: {
        id: 'AnswerTypeSetting.placeholder',
        defaultMessage: '- Select -'
    }
})

class AnswerTypeSetting extends React.PureComponent {

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
                    <label className='lxc-advanced-settings-label' htmlFor='sas1'>
                        {formatMessage(messages.label)}
                    </label>
                    <Select
                        id='sas1'
                        className='lxc-advanced-settings-select'
                        isSearchable={false}
                        placeholder={formatMessage(messages.placeholder)}
                        value={this.props.answerTypeSelectedOption}
                        onChange={this.props.answerTypeChange}
                        options={this.props.answerTypeOptions}
                    />
                    <div className='lxc-advanced-settings-note'>
                        {formatMessage(messages.note)}
                    </div>
                </div>
            </div>
        )
    }
};

export default injectIntl(AnswerTypeSetting);
