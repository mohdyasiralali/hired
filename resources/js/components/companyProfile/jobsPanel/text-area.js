import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class TextArea extends React.Component {
    handleEditorChange(e) {
        console.log("Content was updated:", e.target.getContent());
    }

    render() {
        return (
            <Editor
                apiKey="udsl94mvhlj863z3qnbsmhnnkmxel3h62ofejquijfuj2d89"
                initialValue="<p>Initial content</p>"
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        "advlist autolink lists link image",
                        "charmap print preview anchor help",
                        "searchreplace visualblocks code",
                        "insertdatetime media table paste wordcount"
                    ],
                    toolbar:
                        "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help"
                }}
                onChange={this.handleEditorChange}
            />
        );
    }
}

export default TextArea;