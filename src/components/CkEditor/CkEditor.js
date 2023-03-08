import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import "./CkEditor.scss"
export class CkEditors extends Component {
    render() {
        return (
            <div className="App">
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p `${style={text}}` ></p>"
                />
            </div>
        );
    }
}

