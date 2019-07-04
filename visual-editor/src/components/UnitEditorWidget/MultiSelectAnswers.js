import * as React from 'react';
import {MultiSelectItem} from './MultiSelectItem';

import styles from '../../global/styles';


export class MultiSelectAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className={styles.answersWrapper}>
                <legend className={styles.answersTitle}>Answers*</legend>
                <div className={styles.answersDescription}>
                    Enter the answers below and select whether an answer is correct or incorrect.
                    Remember, you can have more than one correct answer.
                </div>
                <div className={styles.answersList + ' ' + styles.answersList_multi}>
                    {this.props.answersList.map((answer) => <MultiSelectItem key={answer.id} {...answer} />)}
                    <div className={styles.answersAnotherOption}>
                        <button className={styles.answersAnotherOptionBtn} type='button'>
                            + Add <span className={styles.hideMobile}>another</span> answer
                        </button>
                    </div>
                </div>
            </fieldset>
        );
    }
}
