import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

import SingleSelectAnswers from '../components/UnitEditorWidget/SingleSelectAnswers';
import SingleAdvancedSettings from '../components/AdvancedSettings/SingleAdvancedSettings';


export default class SingleSelectContainer extends React.Component {
    render() {
        return (
            <div className="unit-editor-wrapper">
                <Editor
                    className="advanced-settings-block"
                    apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                    initialValue="<p>This is the initial content of the editor</p>"
                    onChange={this.handleEditorChange}
                />
                <SingleSelectAnswers/>
                <SingleAdvancedSettings/>
            </div>
        )
    }
};
