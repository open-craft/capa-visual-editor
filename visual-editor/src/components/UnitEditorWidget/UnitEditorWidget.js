import * as React from 'react';

import '../../assets/scss/app.scss';
import {ShortAdvancedSettings} from './ShortAdvancedSettings';
import {SingleAdvancedSettings} from './SingleAdvancedSettings';
import {MultiAdvancedSettings} from './MultiAdvancedSettings';
import {ShortAnswers} from './ShortAnswers';
import {SingleSelectAnswers} from './SingleSelectAnswers';
import {MultiSelectAnswers} from './MultiSelectAnswers';
import { Editor } from '@tinymce/tinymce-react';
import {Controlled as CodeMirror} from 'react-codemirror2';


export class UnitEditorWidget extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }


    handleEditorChange(e) {
        console.log(e.target.getContent());
        this.setState({
            content: e.target.getContent()
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Editor
                        className="advanced-settings-block"
                        apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                        initialValue="<p>This is the initial content of the editor</p>"
                        onChange={this.handleEditorChange}
                        // init={{
                        //     selector: "textarea",
                        //     plugins: "textpattern"
                        // }}
                    />
                </div>
                {/* <div>
                    <CodeMirror
                        value={this.state.content}
                        onBeforeChange={(editor, data, value) => {
                            this.setState({value});
                        }}
                        onChange={(editor, data, value) => {
                            console.log(editor);
                            console.log(data);
                            console.log(value);

                        }}
                        options={{
                            mode: 'xml',
                            theme: 'material',
                            lineNumbers: true
                          }}
                    />
                </div> */}
                <div className="unit-editor-wrapper">
                    <SingleSelectAnswers
                        answersList={[
                            {id: 1, title: 'Cholesterol molecule'},
                            {id: 2, title: 'Protein channel'},
                            {id: 3, title: 'Glycoprotein molecule'},
                            {id: 4, title: 'Phospholipid molecule'},
                        ]}
                    />
                    <SingleAdvancedSettings/>
                </div>
                <div className="unit-editor-wrapper">
                    <MultiSelectAnswers
                        answersList={[
                            {id: 1, title: 'Cholesterol molecule'},
                            {id: 2, title: 'Protein channel'},
                            {id: 3, title: 'Glycoprotein molecule'},
                            {id: 4, title: 'Phospholipid molecule'},
                        ]}
                    />
                    <MultiAdvancedSettings/>
                </div>
                <div className="unit-editor-wrapper">
                    <ShortAnswers
                        answersList={[
                            {id: 1, title: 'Cholesterol molecule'},
                            {id: 2, title: 'Protein channel'},
                            {id: 3, title: 'Glycoprotein molecule'},
                            {id: 4, title: 'Phospholipid molecule'},
                        ]}
                    />
                    <ShortAdvancedSettings/>
                </div>
            </div>
        );
    }

}
