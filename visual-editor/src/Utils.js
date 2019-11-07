import autosize from 'autosize';

export const groupFeedbackWordMapping = [...Array(26)].map((val, i) => String.fromCharCode(i + 65));
export const doAutoSize = () => {
    autosize(document.querySelectorAll('textarea'));
    autosize.update(document.querySelectorAll('textarea'));
};
