import React  from 'react';
import { Editor } from '@tinymce/tinymce-react';

import ShortAnswers from '../components/UnitEditorWidget/ShortAnswers';
import {ShortAdvancedSettings} from '../components/AdvancedSettings/ShortAdvancedSettings';

import '../assets/scss/app.scss';


export class ShortAnswerContainer extends React.Component {

    render() {
        return (
                <div className="unit-editor-wrapper">
                    <Editor
                        className="advanced-settings-block"
                        apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                        initialValue="<p>This is the initial content of the editor</p>"
                        onChange={this.handleEditorChange}
                    />
                    <ShortAnswers/>
                    <ShortAdvancedSettings/>
                </div>
        );
    }

}

export default ShortAnswerContainer;
