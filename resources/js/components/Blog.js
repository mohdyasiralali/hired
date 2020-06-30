import React from "react";
import { user } from "../AuthenticatedUser";

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            articles: [],
            current_article: [],
            modal_title: "",
            modal_content: "",
            modal_image: "",
            comment: "",
            select_value: 0
        };

        this.onChangeCurrentArticle = this.onChangeCurrentArticle.bind(this);
    }
    // ===================================================================== GET ALL ARTICLES ON COMPONENT LOAD
    componentDidMount() {
        this.axs();
    }

    axs() {
        axios.get("/api/blog/articles").then(response => {
            this.setState({
                articles: response.data,
                current_article: response.data[0]
            });
        });
    }
    // ===================================================================== IMAGE UPLOAD
    onChangeFile(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.createImage(files[0]);
    }

    createImage(file) {
        let reader = new FileReader();
        reader.onload = e => {
            this.setState({
                modal_image: e.target.result
            });
        };
        reader.readAsDataURL(file);
    }
    // ===================================================================== SUBMIT NEW ARTICLE

    onChangeAddTitle(e) {
        this.setState({ modal_title: e.target.value });
    }

    onChangeAddContent(e) {
        this.setState({ modal_content: e.target.value });
    }

    onSubmitAdd(e) {
        e.preventDefault();
        let data = {
            user_id: user.user_id,
            user_name: user.profile.name,
            user_email: user.profile.email,
            title: this.state.modal_title,
            image: this.state.modal_image,
            content: this.state.modal_content
        };
        let stateArticles = this.state.articles;
        axios.post("/api/blog/articles/create", data).then(response => {
            stateArticles.push(response.data);
            this.setState({ articles: stateArticles });
        });
    }
    // =====================================================================ON CHANGE DISPLAYED ARTICLE
    onChangeCurrentArticle(e, article) {
        this.setState({ current_article: article });
    }
    // ===================================================================== ON CHANGE DISPLAYED ARTICLES | MY ARTICLES & ALL
    onChangeSelect(e) {
        let RequestURL = "/api/blog/articles/" + user.user_id;
        this.setState({ select_value: e.target.value });
        if (e.target.value === "1") {
            axios.get(RequestURL).then(response => {
                this.setState({
                    articles: response.data,
                    current_article: response.data[0]
                });
            });
        } else {
            axios.get("/api/blog/articles").then(response => {
                this.setState({
                    articles: response.data,
                    current_article: response.data[0]
                });
            });
        }
    }
    // ===================================================================== ON CHANGE COMMENT

    onChangeComment(e) {
        this.setState({ comment: e.target.value });
    }
    // ===================================================================== ENTER KEY EVENT | COMMENT
    onKeyPressComment(e) {
        if (e.key !== "Enter") return;
        this.onSubmitComment(e);
    }
    // ===================================================================== ADD COMMENT

    onSubmitComment(e) {
        e.preventDefault();
        let data = {
            article_id: this.state.current_article.article.id,
            comment: this.state.comment,
            user_id: user.user_id,
            user_name: user.profile.name,
            user_email: user.profile.email,
            user_avatar: user.profile.avatar
        };
        let stateComments = this.state.current_article;
        axios.post("/api/article/comments/add", data).then(response => {
            stateComments.comments.push(response.data);
            this.setState({ current_article: stateComments });
        });
    }
    // ===================================================================== RENDER DISPLAYED ARTICLE COMMENTS
    renderArticleComments() {
        return this.state.current_article.comments.map(comment => {
            return (
                <div className="row my-2" key={comment.id}>
                    <div className="col-md-2 text-right">
                        <img
                            className="rounded-circle w-75"
                            src={comment.user_avatar}
                        ></img>
                    </div>
                    <div className="col-md-9">
                        <h6>
                            <b>{comment.user_name}</b>{" "}
                            <span className="text-muted">
                                {comment.user_email}
                            </span>
                        </h6>
                        <h6>{comment.comment}</h6>
                        <hr></hr>
                    </div>
                </div>
            );
        });
    }

    // ===================================================================== LEFT DIV | DISPLAYED ARTICLE
    renderLeftDiv() {
        if (this.state.current_article.length !== 0) {
            let src =
                "/storage/images/articles/" +
                this.state.current_article.article.img_src;
            let date = new Date(this.state.current_article.article.created_at);
            date = date.toUTCString();
            return (
                <div className="mb-5">
                    <div id="header" className="mt-3 text-white">
                        <div id="title" className="mb-5">
                            <h2 className="display-5">
                                {this.state.current_article.article.title}
                            </h2>
                            <h5 className="text-muted">
                                <b className="mr-3">
                                    <i className="fas fa-user-edit mr-2"></i>
                                    Published by:{" "}
                                    {
                                        this.state.current_article.article
                                            .user_name
                                    }
                                </b>
                                <br></br>
                                {date}
                            </h5>
                        </div>
                        <img className="img-fluid rounded" src={src}></img>
                    </div>
                    <div
                        id="body"
                        className="bg-light px-3 py-5 text-justify rounded-bottom"
                    >
                        <p>{this.state.current_article.article.content}</p>
                        <div id="comments" className="mt-5">
                            <form onSubmit={this.onSubmitComment.bind(this)}>
                                <label>
                                    <i className="far fa-comment mr-2"></i>
                                    <b>Comments</b>
                                </label>
                                <div className="form-group d-flex">
                                    <input
                                        className="form-control w-75"
                                        placeholder="Type something ..."
                                        value={this.state.comment}
                                        onChange={this.onChangeComment.bind(
                                            this
                                        )}
                                        onKeyPress={this.onKeyPressComment.bind(
                                            this
                                        )}
                                        required
                                    ></input>
                                    <button className="btn btn-dark btn-round ml-3">
                                        <i className="fas fa-angle-right"></i>
                                    </button>
                                </div>
                            </form>

                            <div id="prev-comments mt-5">
                                {this.renderArticleComments()}
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
    // ===================================================================== RIGHT DIV | ALL ARTICLES

    renderRightDiv() {
        return this.state.articles.map(article => {
            let src = "/storage/images/articles/" + article.article.img_src;
            let date = new Date(article.article.created_at);
            date = date.toUTCString();
            let display = true;
            if (article.article.user_id === user.user_id) {
                display = false;
            }
            return (
                <div
                    key={article.article.id}
                    className="col-md-6 mb-2 "
                    style={{ minHeight: "380px" }}
                >
                    <div
                        className="card link-div--onhover"
                        onClick={e => {
                            this.onChangeCurrentArticle(e, article);
                        }}
                    >
                        <div className="mb-2">
                            <img src={src} alt="image" className="w-100"></img>
                        </div>
                        <div className="text-justify text-center h-100 px-2 py-3">
                            <div>
                                <h6>
                                    <strong>{article.article.title}</strong>
                                </h6>
                                <h6 className="text-muted mt-3">
                                    <b className="mr-3">
                                        <i className="fas fa-user-edit mr-2"></i>
                                        Published by:{" "}
                                        {article.article.user_name}
                                    </b>
                                    <br></br>
                                    <span>{date}</span>
                                </h6>
                            </div>
                        </div>
                        <div className="text-right my-2 px-3">
                            <button
                                className="btn btn-danger btn-round btn-sm mr-2"
                                hidden={display}
                            >
                                <i className="fas fa-pencil-alt"></i>
                            </button>
                            <button
                                className="btn btn-danger btn-round btn-sm mr-2"
                                hidden={display}
                            >
                                <i className="far fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
    }
    // ===================================================================== MAIN RENDER (RIGHT + LEFT + FILTER + MODAL)
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 p-5">{this.renderLeftDiv()}</div>
                    <div className="col-md-5 py-5">
                        <div className="text-right">
                            <button
                                className="btn btn-light btn-round mr-5"
                                data-toggle="modal"
                                data-target="#AddArticleModal"
                            >
                                <i className="fas fa-plus mr-3"></i>Add
                            </button>
                        </div>
                        <div className="text-white text-center mb-5">
                            <h4>
                                <i className="far fa-clock mr-2"></i>Most Recent
                            </h4>
                            <hr
                                className="w-25"
                                style={{ borderColor: "white" }}
                            ></hr>
                            <select
                                className="text-white"
                                style={{ background: "none", border: "none" }}
                                value={this.state.select_value}
                                onChange={this.onChangeSelect.bind(this)}
                            >
                                <option value={0}>All</option>
                                <option value={1}>My articles</option>
                            </select>
                        </div>
                        <div className="pr-5">
                            <div className="row">{this.renderRightDiv()}</div>
                        </div>
                    </div>
                </div>
                {/* // =====================================================================  ADD ARTICLE MODAL*/}
                <div
                    className="modal fade"
                    id="AddArticleModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="AddArticleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="AddArticleModalLabel"
                                >
                                    Add Article
                                </h5>
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <form
                                        onSubmit={this.onSubmitAdd.bind(this)}
                                    >
                                        <div className="row">
                                            <div className="col-md-7">
                                                <div className="form-group">
                                                    <label>
                                                        <i className="fas fa-heading mr-3"></i>
                                                        Title
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        placeholder="eg. This Easy $0 Hack Instantly Concealed My Living Room TV’s Unsightly Cords"
                                                        value={
                                                            this.state
                                                                .modal_title
                                                        }
                                                        onChange={this.onChangeAddTitle.bind(
                                                            this
                                                        )}
                                                        required
                                                    ></input>
                                                </div>
                                                <div className="form-group">
                                                    <span className="btn btn-dark btn-file btn-round">
                                                        <i className="fas fa-image mr-2"></i>
                                                        Select Image
                                                        <input
                                                            type="file"
                                                            onChange={this.onChangeFile.bind(
                                                                this
                                                            )}
                                                        ></input>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-md-5">
                                                <h5>
                                                    <b>Preview</b>
                                                </h5>
                                                <h6>
                                                    {this.state.modal_title}
                                                </h6>
                                                <img
                                                    className="w-100 rounded"
                                                    src={this.state.modal_image}
                                                    alt="Image Preview"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                <i className="far fa-file-alt mr-3 "></i>
                                                Content
                                            </label>
                                            <textarea
                                                className="form-control"
                                                placeholder="Type something ..."
                                                value={this.state.modal_content}
                                                onChange={this.onChangeAddContent.bind(
                                                    this
                                                )}
                                                rows={10}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="text-right">
                                            <button className="btn btn-dark btn-round mr-2">
                                                Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;
