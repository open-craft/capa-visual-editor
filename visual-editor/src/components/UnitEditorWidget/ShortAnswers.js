import * as React from 'react';
import {ShortAnswersItem} from './ShortAnswersItem';

import styles from '../../global/styles';

export class ShortAnswers extends React.PureComponent {

    render() {
        return (
            <fieldset className={styles.answersWrapper}>
                <legend className={styles.answersTitle}>Answers*</legend>
                <div className={styles.answersDescription}>
                    Enter the correct answer or other acceptable answers. (Not case sensitive)
                </div>
                <div className={styles.answersList + ' ' + styles.answersList_short}>

                    <ShortAnswersItem/>

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
