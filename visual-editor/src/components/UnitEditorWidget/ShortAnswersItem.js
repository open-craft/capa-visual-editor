import * as React from 'react';
import Select from 'react-select';

import '../../assets/scss/app.scss';

export class ShortAnswersItem extends React.Component {

    removeAnswer() {
        this.props.remove(this.props.id);
    }

    typeChanged(value) {
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
                        <Select className='lxc-advanced-settings-select'
                            isSearchable={false}
                            placeholder='- Select -'
                            options={this.props.typeOptions}
                            value={this.props.currentType}
                            onChange={this.typeChanged.bind(this)}
                        />
                        <input type='text' className='lxc-answers-item' id={`answer-short1-${this.props.id}`}
                            placeholder={anotherPlaceholderText} value={this.props.value} onChange={this.valueChanged.bind(this)}/>
                    </div>
                    <button className='lxc-answers-remove-btn' type='button' aria-label='Remove answer item' onClick={this.removeAnswer.bind(this)}/>
                </div>
            </div>
        )
    }
}
