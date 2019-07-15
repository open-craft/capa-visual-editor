import * as React from 'react';

import '../../assets/scss/app.scss';
import {ShortAdvancedSettings} from '../AdvancedSettings/ShortAdvancedSettings';
import {SingleAdvancedSettings} from '../AdvancedSettings/SingleAdvancedSettings';
import MultiAdvancedSettings from '../AdvancedSettings/MultiAdvancedSettings';
import {ShortAnswers} from './ShortAnswers';
import SingleSelectAnswers from './SingleSelectAnswers';
import MultiSelectAnswers from './MultiSelectAnswers';
import { Editor } from '@tinymce/tinymce-react';
import { connect } from 'react-redux';


export class UnitEditorWidget extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            content: ""
        }
        this.handleEditorChange = this.handleEditorChange.bind(this);
    }


    handleEditorChange(e) {
        this.setState({
            content: e.target.getContent()
        });
    }

    render() {
        return (
            <div>
                {/* <div>
                    <Editor
                        className="lxc-advanced-settings-block"
                        apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                        initialValue="<p>This is the initial content of the editor</p>"
                        onChange={this.handleEditorChange}
                    />
                </div> */}
                {/* <div className="lxc-unit-editor-wrapper">
                    <SingleSelectAnswers/>
                    <SingleAdvancedSettings/>
                </div> */}
                {/* <div className="lxc-unit-editor-wrapper">
                    <MultiSelectAnswers/>
                    <MultiAdvancedSettings/>
                </div> */}
                <div className="lxc-unit-editor-wrapper">
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
