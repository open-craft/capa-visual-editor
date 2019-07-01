import * as React from 'react';
import {SingleSelectItem} from './SingleSelectItem';

import styles from 'global/styles';

export class SingleSelectAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className={styles.answersWrapper}>
                <legend className={styles.answersTitle}>Answers*</legend>
                <div className={styles.answersDescription}>
                    Enter the answers below and select whether an answer is correct or incorrect.
                </div>
                <div className={styles.answersList}>
                    {this.props.answersList.map((answer) => <SingleSelectItem key={answer.id} {...answer} />)}
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
