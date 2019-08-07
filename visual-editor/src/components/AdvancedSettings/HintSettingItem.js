import React from 'react';
import { FormattedMessage } from 'react-intl';

export default class HintSettingItem extends React.Component {

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
        return (
            <div className='lxc-advanced-hint-wrapper'>
                <label className='lxc-advanced-settings-label' htmlFor={`sas-${this.props.id}`}>
                    <FormattedMessage
                        id="hintSettingItem.settings.lable"
                        defaultMessage="Hint"
                    />
                </label>
                    <FormattedMessage id="hintSettingItem.settings.placeholder" defaultMessage="Enter a hint">
                        {
                            placeholder => (
                                <input id={`sas-${this.props.id}`}
                                type='text'
                                className='lxc-advanced-settings-field'
                                placeholder={placeholder}
                                value={this.props.value}
                                onChange={this.change.bind(this)}/>
                            )
                        }
                    </FormattedMessage>
            <FormattedMessage id="hintSettingItem.remove.btn" defaultMessage="Remove hint item">
                {
                    ariaLable => (
                        <button className='lxc-answers-remove-btn' type='button' aria-label={ariaLable} onClick={this.remove.bind(this)}/>
                    )
                }
            </FormattedMessage>

            </div>
        )
    }
}
