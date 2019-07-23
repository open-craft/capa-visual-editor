import React from 'react';
import {Editor} from '@tinymce/tinymce-react/lib/cjs/index';


export default class GroupFeedback extends React.PureComponent {

    handleEditorChange (e) {
        this.props.groupFeedbackchange(e.target.getContent());
    }

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>GROUP feedback</div>
                <div className='lxc-advanced-settings-block-description'>Feedback will appear when a student submits a wrong answer. </div>

                {/*<textarea className='lxc-test-redactor' onChange={this.props.groupFeedbackchange}/>*/}
                <Editor
                        init={{
                            menubar: false,
                            statusbar: false,
                            plugins: 'link code image advcode',
                            apply_source_formatting : true,
                            toolbar: 'formatselect | bold italic | code blockquote link image | undo redo',
                            height: 216,
                            content_style: 'body{font-family: BioSans_Regular, Arial, sans-serif; color: #003e6b} div,p {font-size: 16px}',
                        }}
                        className='lxc-advanced-settings-block'
                        apiKey='283hsctoygj8rdat1mccsgurzgph73mg3pdgu0lc7j9wq6vr'
                        onChange={this.props.groupFeedbackchange.bind(this)}
                        // initialValue={this.props.editorContent}
                        // value={this.props.editorContent}
                    />
            </div>
        )
    }
};
