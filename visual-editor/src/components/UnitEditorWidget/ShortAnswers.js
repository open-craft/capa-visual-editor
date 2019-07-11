import * as React from 'react';
import {ShortAnswersItem} from './ShortAnswersItem';

import {SHORT_ANSWERS_CHANGED, SHORT_ANSWERS_REMOVE, SHORT_ANSWERS_ADD_NEW} from '../../store/actions/action-types';

import '../../assets/scss/app.scss';
import { connect } from 'react-redux';

export class ShortAnswers extends React.PureComponent {

    render() {
        console.log(this.props);
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the correct answer or other acceptable answers. (Not case sensitive)
                </div>
                <div className="answers-list answers-list_short">
                    <div className="answers-form-title">Acceptable answers</div>
                    {
                        this.props.shortAnswersList.map(shortAnswer => {
                            return <ShortAnswersItem remove={this.props.removeAnswer} change={this.props.changeAnswer} key={shortAnswer.id} {...shortAnswer} />
                        })
                    }

                    <div className="answers-another-option">
                        <button className="answers-another-option-btn" type='button' onClick={this.props.addAnswer}>
                            + Add <span className="hide-mobile">another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
};


const mapStateToProps = (store) => {
    console.log(store);
    return {
        shortAnswersList: store.shortAnswersData.shortAnswersList
    }
};

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        addAnswer: (event) => {
            return dispatch({type: SHORT_ANSWERS_ADD_NEW});
        },
        removeAnswer: (id) => {
            return dispatch({type: SHORT_ANSWERS_REMOVE, id: id});
        },
        changeAnswer: (data) => {
            return dispatch({type: SHORT_ANSWERS_CHANGED, ...data});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ShortAnswers);
