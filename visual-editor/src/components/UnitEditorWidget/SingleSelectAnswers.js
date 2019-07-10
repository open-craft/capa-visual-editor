import * as React from 'react';
import {SingleSelectItem} from './SingleSelectItem';
import * as actionTypes from '../../store/actions/action-types';
import { connect } from 'react-redux';

import '../../assets/scss/app.scss';

export class SingleSelectAnswers extends React.Component {

    render() {
        return (
            <fieldset className="answers-wrapper">
                <legend className="answers-title">Answers*</legend>
                <div className="answers-description">
                    Enter the answers below and select whether an answer is correct or incorrect.
                </div>
                <div className="answers-list">
                    {
                        this.props.answersList.map(answer => {
                            return <SingleSelectItem 
                                        key={answer.id} {...answer} 
                                        answerChanged={this.props.answerChanged} 
                                        removeAnswer={this.props.removeAnswer}
                                        />
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
}

const mapStateToProps = (store) => {
    return {
        answersList: store.singleSelectAnswers.singleSelectAnswersList
    }
}

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        addAnswer: (event) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_ADD_NEW});
        },
        removeAnswer: (id) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_REMOVE, id: id});
        },
        answerChanged: (event) => {
            return dispatch({type: actionTypes.SINGLE_SELECT_ANSWERS_CHANGED, ...event});
        }
    }
  };

export default connect(mapStateToProps, mapDispatchToProps)(SingleSelectAnswers);
