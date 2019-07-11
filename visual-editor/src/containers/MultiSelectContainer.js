import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import MultiSelectAnswers from '../components/UnitEditorWidget/MultiSelectAnswers';
import MultiAdvancedSettings from '../components/AdvancedSettings/MultiAdvancedSettings';


export default class MultiSelectContainer extends React.Component {
    render() {
        return (
            <div className="unit-editor-wrapper">
                <Editor
                    className="advanced-settings-block"
                    apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                    initialValue="<p>This is the initial content of the editor</p>"
                    onChange={this.handleEditorChange}
                />
                <MultiSelectAnswers/>
                <MultiAdvancedSettings/>
            </div>
        )
    }
};
