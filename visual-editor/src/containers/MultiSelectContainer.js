import React from 'react';

import MultiSelectAnswers from '../components/UnitEditorWidget/MultiSelectAnswers';
import MultiAdvancedSettings from '../components/AdvancedSettings/MultiAdvancedSettings';


export default class MultiSelectContainer extends React.Component {
    render() {
        return (
            <div className="unit-editor-wrapper">
                <MultiSelectAnswers/>
                <MultiAdvancedSettings/>
            </div>
        )
    }
};
