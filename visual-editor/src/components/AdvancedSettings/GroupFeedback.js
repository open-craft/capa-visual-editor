import React from 'react';
import { FormattedMessage } from 'react-intl';
import {Editor} from '@tinymce/tinymce-react/lib/cjs/index';


export default class GroupFeedback extends React.PureComponent {

    handleEditorChange (e) {
        this.props.groupFeedbackchange(e.target.getContent());
    }

    render() {
        return (
            <div className='lxc-advanced-settings-block'>
                <div className='lxc-advanced-settings-block-title'>
                    <FormattedMessage
                        id="groupFeedback.block.title"
                        defaultMessage="GROUP feedback"
                    />
                </div>
                <div className='lxc-advanced-settings-block-description'>
                    <FormattedMessage
                        id="groupFeedback.block.description"
                        defaultMessage="Feedback will appear when a student submits a wrong answer."
                    />
                </div>

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
                        onChange={this.handleEditorChange.bind(this)}
                        initialValue={this.props.groupFeedbackContent}
                    />
            </div>
        )
    }
};
