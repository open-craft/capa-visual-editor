import * as React from 'react';
import { FormattedMessage } from 'react-intl';

import Select from 'react-select';

import '../../assets/scss/app.scss';

export class ShortAnswersItem extends React.Component {

    removeAnswer() {
        this.props.remove(this.props.id);
    }

    typeChanged(value) {
        console.log(value)
        this.props.change({
            id: this.props.id,
            value: this.props.value,
            currentType: value
        })
    }

    valueChanged(event) {
        this.props.change({
            id: this.props.id,
            currentType: this.props.currentType,
            value: event.target.value
        })
    }

    render() {
        const isMobile = window.innerWidth <= 500;
        const anotherPlaceholderText = isMobile ? 'Enter the answer' : 'Enter another acceptable answer';

        return (
            <div className='lxc-answers-option'>
                <div className='lxc-answers-field-wrapper'>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-short-${this.props.id}`}>{anotherPlaceholderText}</label>
                        <FormattedMessage id="shortAnswers.item.advancedSettingsSelect" defaultMessage="- Select -">
                        {
                            placeholder => (
                                <Select className='lxc-advanced-settings-select'
                                    isSearchable={false}
                                    placeholder={placeholder}
                                    options={this.props.typeOptions}
                                    value={this.props.currentType}
                                    onChange={this.typeChanged.bind(this)}
                                />
                            )
                        }
                        </FormattedMessage>
                        <input type='text' className='lxc-answers-item' id={`answer-short1-${this.props.id}`}
                            placeholder={anotherPlaceholderText} value={this.props.value} onChange={this.valueChanged.bind(this)}/>
                    </div>
                    <FormattedMessage id="shortAnswers.item.removeAnswerButton" defaultMessage="Remove answer item">
                        {
                            ariaLable => (
                                <button className='lxc-answers-remove-btn' type='button' aria-label={ariaLable} onClick={this.removeAnswer.bind(this)}/>
                            )
                        }
                    </FormattedMessage>
                </div>
            </div>
        )
    }
}
