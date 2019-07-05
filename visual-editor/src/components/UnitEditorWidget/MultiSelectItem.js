import * as React from 'react';

import '../../assets/scss/app.scss';

export class MultiSelectItem extends React.PureComponent {

    render() {
        const additionallyСlass = Number(this.props.id) === 2 ? "answers-feedback_open" : ''; //тоже была ссылка на styles
        const placeholderText = Number(this.props.id) === 2 || Number(this.props.id) === 3 ? 'Enter the correct answer' : 'Enter an incorrect answer';
        const checkboxValue = Number(this.props.id) === 2 || Number(this.props.id) === 3 ? true : false;

        return (
            <div key={this.props.id} className="answers-option">
                <div className="answers-radio">
                    <input name='answer' type='checkbox' id={`answer-checkbox${this.props.id}`} value={this.props.id}
                           defaultChecked={checkboxValue}/>
                    <label htmlFor={`answer-checkbox${this.props.id}`} className="answers-radio-label">
                        {this.props.title}
                    </label>
                </div>
                <div className="answers-field-wrapper">
                    <div className="answers-feedback additionally-class">
                        <label className="answers-feedback-title" htmlFor={`feedback-selected${this.props.id}`}>
                            Selected feedback (specific)
                        </label>
                        <textarea rows={1} className="answers-feedback-field"
                                  id={`feedback-selected${this.props.id}`}
                                  placeholder='Enter feedback for when the choice is selected'/>

                        <label className="answers-feedback-title" htmlFor={`feedback-unselected${this.props.id}`}>
                            Unselected feedback (specific)
                        </label>
                        <textarea rows={1} className="answers-feedback-field"
                                  id={`feedback-unselected${this.props.id}`}
                                  placeholder='Enter feedback for when the choice is selected'/>
                    </div>
                    <div className="answers-item-wrapper">
                        <label className="sr" htmlFor={`answer-multi${this.props.id}`}>{placeholderText}</label>
                        <textarea rows={1} className="answers-item" id={`answer-multi${this.props.id}`}
                                  placeholder={placeholderText}
                                  title='Enter the correct answer'/>
                        <button className="answers-feedback-btn" type='button' aria-label='Show feedback block'/>
                    </div>
                    <button className="answers-remove-btn" type='button' aria-label='Remove answer item'/>
                </div>
            </div>
        );
    }
}
