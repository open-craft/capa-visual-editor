import * as React from 'react';

import '../../assets/scss/app.scss';

export class ShortAnswersItem extends React.PureComponent {

    render() {
        const isMobile = window.innerWidth <= 500;
        const anotherPlaceholderText = isMobile ? 'Enter the answer' : 'Enter another acceptable answer';

        return (
            <div>
                <div className="answers-form-title">Acceptable answers</div>
                <div className="answers-option">
                    <div className="answers-field-wrapper">
                        <div className="answers-item-wrapper">
                            <label className="sr" htmlFor={`answer-short1`}>Enter the answer</label>
                            <input type="text" className="answers-item" id={`answer-short1`}
                                   placeholder='Enter the answer'/>
                        </div>
                        <button className="answers-remove-btn" type='button' aria-label='Remove answer item'/>
                    </div>
                </div>
                <div className="answers-option">
                    <div className="answers-field-wrapper">
                        <div className="answers-item-wrapper">
                            <label className="sr" htmlFor={`answer-short2`}>{anotherPlaceholderText}</label>
                            <input type="text" className="answers-item" id={`answer-short2`}
                                   placeholder={anotherPlaceholderText}/>
                        </div>
                        <button className="answers-remove-btn" type='button' aria-label='Remove answer item'/>
                    </div>
                </div>
            </div>
        );
    }
}
