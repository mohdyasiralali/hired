// npm install react-simple-code-editor
// https://www.npmjs.com/package/react-simple-code-editor

// npm install prismjs
// https://prismjs.com/

import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup-templating";

const code = `// write you code here 
// -Familiarize yourself with concepts of Clean Code & Clean Design
`;

class TheChallenge extends React.Component {
    constructor(props) {
        super(props);

        this.state = { code };
    }

    render() {
        return (
            <section>
                <div className="container-fluid">
                    <div className="row p-5 justify-content-center">
                        {/* <div className="col-md-12 row p-5"> */}
                            <div
                                className="col-md-8 bg-white p-5 mx-auto rounded"
                                // style={{ minHeight: "500px" , overflow: "scroll" }}
                            >
                                <div
                                    className="mb-5"
                                    style={{
                                        fontFamily:
                                            '"Fira code", "Fira Mono", monospace',
                                        fontSize: 14
                                    }}
                                >
                                    <p>
                                        <strong>Challenge</strong>
                                    </p>
                                    <p>
                                        You should build a tool to parse the
                                        contents of a file showing communication
                                        logs between
                                        <br />
                                        users and output a log summary.
                                        <br />
                                        Your code should handle very large
                                        inputs without consuming too much CPU
                                        &amp; memory.
                                    </p>
                                </div>
                                <div className="bg-dark">
                                    <Editor
                                        value={this.state.code}
                                        onValueChange={code =>
                                            this.setState({ code })
                                        }
                                        highlight={code =>
                                            highlight(code, languages.js)
                                        }
                                        padding={10}
                                        style={{
                                            fontFamily:
                                                '"Fira code", "Fira Mono", monospace',
                                            fontSize: 12,
                                            minHeight: "500px",
                                            maxHeight: "500px",
                                            overflow: "scroll"
                                        }}
                                    />
                                </div>
                            </div>
                            {/* <div className="col-md-1"></div> */}
                            <div className="col-md-3 py-5 text-center bg-white mx-auto rounded">
                                <div className="d-block">
                                    <button
                                        className="btn btn-light btn-lg mb-3 w-100 text-center"
                                        style={{ height: "70px" }}
                                    >
                                        <i className="fas fa-check-circle mr-3"></i>
                                        <strong>React Functions</strong>
                                    </button>
                                </div>
                                <div className="d-block">
                                    <button
                                        className="btn btn-light btn-lg mb-3 w-100 text-center"
                                        style={{ height: "70px" }}
                                    >
                                        <i className="far fa-check-circle mr-3"></i>
                                        <strong>React Functions</strong>
                                    </button>
                                </div>
                                <div className="d-block">
                                    <button
                                        className="btn btn-light btn-lg mb-3 w-100 text-center"
                                        style={{ height: "70px" }}
                                    >
                                        <i className="far fa-check-circle mr-3"></i>
                                        <strong>React Functions</strong>
                                    </button>
                                </div>{" "}
                                <div className="d-block">
                                    <button
                                        className="btn btn-light btn-lg mb-3 w-100 text-center"
                                        style={{ height: "70px" }}
                                    >
                                        <i className="far fa-check-circle mr-3"></i>
                                        <strong>React Functions</strong>
                                    </button>
                                </div>{" "}
                                <div className="d-block">
                                    <button
                                        className="btn btn-light btn-lg mb-3 w-100 text-center"
                                        style={{ height: "70px" }}
                                    >
                                        <i className="far fa-check-circle mr-3"></i>
                                        <strong>React Functions</strong>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </section>
        );
    }
}

export default TheChallenge;
