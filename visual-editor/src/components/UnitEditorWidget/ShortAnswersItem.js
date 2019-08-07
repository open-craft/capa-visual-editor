import * as React from 'react';
import Select from 'react-select';

import '../../assets/scss/app.scss';

export class ShortAnswersItem extends React.Component {

    handleKeyDown(e) {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight+2}px`;
    }

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
        // const additionallyСlass = this.state.openFeedback ? 'lxc-answers-feedback_open' : '';
        const additionallyСlass = 'lxc-answers-feedback_open';
        const placeholderText = 'Enter an answer';
                                // Enter another acceptable answer
                                // Enter an incorrect answer

        return (
            <div className='lxc-answers-option'>
                <div className='lxc-answers-field-title'>Answer type</div>
                <Select className='lxc-advanced-settings-select'
                    isSearchable={false}
                    placeholder='- Select -'
                    options={this.props.typeOptions}
                    value={this.props.currentType}
                    onChange={this.typeChanged.bind(this)}
                />
                <div className='lxc-answers-field-title'>Answer</div> {/* Incorrect answer */}
                <div className='lxc-answers-field-wrapper'>
                    <div className={`lxc-answers-feedback ${additionallyСlass}`}>
                        <label className='lxc-answers-feedback-title' htmlFor={`feedback-field${this.props.id}`}>
                            Feedback
                        </label>
                        <textarea rows={1} className='lxc-answers-feedback-field' id={`feedback-field${this.props.id}`}
                                  placeholder='Enter feedback ' value={this.props.feedback} onChange={this.feedbackChange}
                                  onKeyUp={this.handleKeyDown}/>
                    </div>
                    <div className='lxc-answers-item-wrapper'>
                        <label className='lxc-sr' htmlFor={`answer-single${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className='lxc-answers-item' id={`answer-single${this.props.id}`} value={this.props.title}
                                  placeholder={placeholderText} onChange={this.titleChange} onKeyUp={this.handleKeyDown}/>
                        <button className='lxc-answers-feedback-btn' type='button' aria-label='Show feedback block' onClick={this.openFeedbackButtonClick}/>
                    </div>
                    <button className='lxc-answers-remove-btn' type='button' aria-label='Remove answer item' onClick={this.removeAnswer.bind(this)}/>
                </div>
            </div>
        )
    }
}
