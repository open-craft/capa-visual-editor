import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
    placeholder: {
        id: 'HintSettingItem.placeholder',
        defaultMessage: 'Enter a hint'
    },
    ariaLabel: {
        id: 'HintSettingItem.ariaLabel',
        defaultMessage: 'Remove hint item'
    }
})

class HintSettingItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };
    }

    componentDidMount() {
        this.setState({...this.props});
    }

    change(event) {
        this.setState({
            value: event.target.value
        }, () => this.props.hintChange(this.state));
    }

    remove(event) {
        this.props.hintRemove(this.props.id);
    }

    render() {
        const { formatMessage } = this.props.intl;

        return (
            <div className='lxc-advanced-hint-wrapper'>
                <label className='lxc-advanced-settings-label' htmlFor={`sas-${this.props.id}`}>Hint</label>
                <input id={`sas-${this.props.id}`}
                       type='text'
                       className='lxc-advanced-settings-field'
                       placeholder={formatMessage(messages.placeholder)}
                       value={this.props.value}
                       onChange={this.change.bind(this)}/>
            <button className='lxc-answers-remove-btn' type='button' aria-label={formatMessage(messages.ariaLabel)} onClick={this.remove.bind(this)}/>
            </div>
        )
    }
}

export default injectIntl(HintSettingItem);
