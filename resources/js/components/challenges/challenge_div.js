// npm install react-simple-code-editor
// https://www.npmjs.com/package/react-simple-code-editor

// npm install prismjs
// https://prismjs.com/

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import parse from "html-react-parser";

class ChallengeDiv extends React.Component {
    constructor(props) {
        super(props);

        this.renderText = this.renderText.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    }

    renderText() {
        const parse = require("html-react-parser");
        return parse(this.props.question.question);
    }

    onClickSubmit() {
        this.props.onClickSubmit();
    }

    render() {
        let btn = "";
        if (this.props.final_submit === 0) {
            btn = "Next";
        } else {
            btn = "Submit";
        }
        return (
            <div>
                <div
                    className="mb-5"
                    style={{
                        fontFamily: '"Fira code", "Fira Mono", monospace',
                        fontSize: 14
                    }}
                >
                    <h2>
                        <strong>{this.props.question.title}</strong>
                    </h2>
                    <div>{this.renderText()}</div>
                </div>
                <div className="bg-dark">
                    <Editor
                        // value={this.state.code}
                        // onValueChange={code => this.setState({ code })}
                        value={this.props.code}
                        onValueChange={code => this.props.onCodeChange(code)}
                        highlight={code => highlight(code, languages.js)}
                        padding={10}
                        style={{
                            fontFamily: '"Fira code", "Fira Mono", monospace',
                            fontSize: 12,
                            minHeight: "500px",
                            maxHeight: "500px",
                            overflow: "scroll"
                        }}
                    />
                </div>
                <div className="text-right mt-5">
                    <button
                        className="btn btn-danger btn-round"
                        onClick={this.onClickSubmit}
                    >
                        {btn}
                    </button>
                </div>
            </div>
        );
    }
}
export default ChallengeDiv;
