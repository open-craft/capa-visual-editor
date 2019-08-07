import * as React from 'react';
import {ShortAnswersItem} from './ShortAnswersItem';

import '../../assets/scss/app.scss';

export default class ShortAnswers extends React.PureComponent {

    render() {
        return (
            <div>
                <fieldset className='lxc-answers-wrapper'>
                    <legend className='lxc-answers-title'>Correct Answers*</legend>
                    <div className='lxc-answers-description'>
                        Enter the correct answer or other acceptable answers. (Not case sensitive)
                    </div>
                    <div className='lxc-answers-list lxc-answers-list_short'>
                        <div className='lxc-answers-form-title'>Acceptable answers</div>
                        {
                            this.props.shortAnswersList.map(shortAnswer => {
                                return <ShortAnswersItem
                                        typeOptions={this.props.typeOptions}
                                        remove={this.props.shortAnswersRemoveAnswer}
                                        change={this.props.shortAnswersChangeAnswer}
                                        key={shortAnswer.id}
                                        {...shortAnswer} />
                            })
                        }

                        <div className='lxc-answers-another-option'>
                            <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddAnswer}>
                                + Add another answer
                            </button>
                        </div>
                    </div>
                </fieldset>

                <fieldset className='lxc-answers-wrapper'>
                    <legend className='lxc-answers-title'>InCorrect Answers</legend>
                    <div className='lxc-answers-description'>
                        Add an optional incorrect answer such as a frequent misconception.
                    </div>
                    <div className='lxc-answers-list lxc-answers-list_short'>
                        <div className='lxc-answers-form-title'>Wrong answers</div>
                        {
                            this.props.shortAnswersList.map(shortAnswer => {
                                return <ShortAnswersItem
                                        typeOptions={this.props.typeOptions}
                                        remove={this.props.shortAnswersRemoveAnswer}
                                        change={this.props.shortAnswersChangeAnswer}
                                        key={shortAnswer.id}
                                        {...shortAnswer} />
                            })
                        }

                        <div className='lxc-answers-another-option'>
                            <button className='lxc-answers-another-option-btn' type='button' onClick={this.props.shortAnswersAddAnswer}>
                                + Add another answer
                            </button>
                        </div>
                    </div>
                </fieldset>
            </div>
        );
    }
};
