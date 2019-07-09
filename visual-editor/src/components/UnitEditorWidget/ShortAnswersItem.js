import * as React from 'react';

import '../../assets/scss/app.scss';

export class ShortAnswersItem extends React.PureComponent {

    constructor(props) {
        super(props);

        this.removeAnswer = this.removeAnswer.bind(this);

        this.state = {};

    }

    componentDidMount() {
        this.setState({...this.props});
    }

    removeAnswer() {
        this.props.removeShortAnswer(this.state.id);
    };

    render() {
        const isMobile = window.innerWidth <= 500;
        const anotherPlaceholderText = isMobile ? 'Enter the answer' : 'Enter another acceptable answer';

        return (
            <div className="answers-option">
                <div className="answers-field-wrapper">
                    <div className="answers-item-wrapper">
                        <label className="sr" htmlFor={`answer-short-${this.state.id}`}>{anotherPlaceholderText}</label>
                        <input type="text" className="answers-item" id={`answer-short-${this.state.id}`}
                            placeholder={anotherPlaceholderText} value={this.state.value}/>
                    </div>
                    <button className="answers-remove-btn" type='button' aria-label='Remove answer item' onClick={this.removeAnswer}/>
                </div>
            </div>
        )
    }
}
