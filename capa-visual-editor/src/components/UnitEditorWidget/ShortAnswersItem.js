import * as React from 'react';

import styles from 'global/styles';

export class ShortAnswersItem extends React.PureComponent {

    render() {
        const isMobile = window.innerWidth <= 500;
        const anotherPlaceholderText = isMobile ? 'Enter the answer' : 'Enter another acceptable answer';

        return (
            <div>
                <div className={styles.answersFormTitle}>Acceptable answers</div>
                <div className={styles.answersOption}>
                    <div className={styles.answersFieldWrapper}>
                        <div className={styles.answersItemWrapper}>
                            <label className={styles.sr} htmlFor={`answer-short1`}>Enter the answer</label>
                            <input type="text" className={styles.answersItem} id={`answer-short1`}
                                   placeholder='Enter the answer'/>
                        </div>
                        <button className={styles.answersRemoveBtn} type='button' aria-label='Remove answer item'/>
                    </div>
                </div>
                <div className={styles.answersOption}>
                    <div className={styles.answersFieldWrapper}>
                        <div className={styles.answersItemWrapper}>
                            <label className={styles.sr} htmlFor={`answer-short2`}>{anotherPlaceholderText}</label>
                            <input type="text" className={styles.answersItem} id={`answer-short2`}
                                   placeholder={anotherPlaceholderText}/>
                        </div>
                        <button className={styles.answersRemoveBtn} type='button' aria-label='Remove answer item'/>
                    </div>
                </div>
            </div>
        );
    }
}
