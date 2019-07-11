import React from 'react';

import SingleSelectAnswers from '../components/UnitEditorWidget/SingleSelectAnswers';
import SingleAdvancedSettings from '../components/AdvancedSettings/SingleAdvancedSettings';


export default class SingleSelectContainer extends React.Component {
    render() {
        return (
            <div className="unit-editor-wrapper">
                <SingleSelectAnswers/>
                <SingleAdvancedSettings/>
            </div>
        )
    }
};
