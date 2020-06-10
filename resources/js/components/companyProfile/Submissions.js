//npm install react-widgets --save
// https://jquense.github.io/react-widgets/

// https://jquense.github.io/react-widgets/api/DateTimePicker/
// import { DateTimePicker } from 'react-widgets'

import React from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import AddToCalendar from "@culturehq/add-to-calendar";
import "@culturehq/add-to-calendar/dist/styles.css";

import Chats from "../Chats";
// import DateTimePickerInput from "./date-time-picker";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

class Submissions extends React.Component {
    constructor(props) {
        super(props);

        const current_date = new Date();
        const day = current_date.getUTCDate() + 1; // Next Day
        const year = current_date.getUTCFullYear();
        const month = current_date.getUTCMonth() + 1; //months from 1-12
        let initial_date = year + "-" + month + "-" + day;

        const start_string = initial_date + " " + "12:00:00";
        const end_string = initial_date + " " + "12:30:00";
        const start_date = new Date(start_string);
        const end_date = new Date(end_string);
        const selectedStartDate = start_date.toISOString();
        const selectedEndDate = end_date.toISOString();

        this.state = {
            submissions: [],

            event_title: "",
            event_details: "",
            event_date: initial_date,
            event_starts_at: "12:00:00",
            event_ends_at: "12:30:00",

            selectedStartDate: selectedStartDate,
            selectedEndDate: selectedEndDate,

            msg_subject: "",
            msg_link: "",
            msg_content: ""
        };

        this.onChangeAddEventTitle = this.onChangeAddEventTitle.bind(this);
        this.onChangeAddEventDetails = this.onChangeAddEventDetails.bind(this);
        this.onChangeAddEventDate = this.onChangeAddEventDate.bind(this);
        this.onChangeAddEventStart = this.onChangeAddEventStart.bind(this);
        this.onChangeAddEventEnd = this.onChangeAddEventEnd.bind(this);

        this.onChangeMessageSubject = this.onChangeMessageSubject.bind(this);
        this.onChangeMessageLink = this.onChangeMessageLink.bind(this);
        this.onChangeMessageContent = this.onChangeMessageContent.bind(this);
        this.onSubmitSendMessage = this.onSubmitSendMessage.bind(this);

        this.onClickChat = this.onClickChat.bind(this);
    }
    componentDidMount() {
        this.axs();
    }
    axs() {
        axios
            .get("/challenge/submissions/get/" + this.props.co_id)
            .then(response => {
                this.setState({ submissions: response.data });
                console.log(response.data);
            });
    }

    copyToClipBoard(code) {
        navigator.clipboard.writeText(code);
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Copied",
            showConfirmButton: false,
            timer: 700
        });
    }

    onChangeAddEventTitle(e) {
        this.setState({ event_title: e.target.value });
    }
    onChangeAddEventDetails(e) {
        this.setState({ event_details: e.target.value });
    }
    onChangeAddEventDate(e) {
        this.setState({ event_date: e.target.value });
        let selected_startdate =
            e.target.value + " " + this.state.event_starts_at;
        let selected_enddate = e.target.value + " " + this.state.event_ends_at;
        let start_date = new Date(selected_startdate);
        let IsoStartDate = start_date.toISOString();
        let end_date = new Date(selected_enddate);
        let IsoEndDate = end_date.toISOString();
        this.setState({
            selectedStartDate: IsoStartDate,
            selectedEndDate: IsoEndDate
        });
    }
    onChangeAddEventStart(e) {
        this.setState({ event_starts_at: e.target.value });
        let selected_startdate = this.state.event_date + " " + e.target.value;
        let date = new Date(selected_startdate);
        let IsoDate = date.toISOString();
        this.setState({ selectedStartDate: IsoDate });
    }
    onChangeAddEventEnd(e) {
        this.setState({ event_ends_at: e.target.value });
        let selected_enddate = this.state.event_date + " " + e.target.value;
        let date = new Date(selected_enddate);
        let IsoDate = date.toISOString();
        this.setState({ selectedEndDate: IsoDate });
    }

    onClickReschedule(e) {
        e.preventDefault();
        $("#CalendarModal").modal("show");
    }

    // ============================================= MESSAGE
    onChangeMessageSubject(e) {
        this.setState({ msg_subject: e.target.value });
    }
    onChangeMessageLink(e) {
        this.setState({ msg_link: e.target.value });
    }
    onChangeMessageContent(e) {
        this.setState({ msg_content: e.target.value });
    }
    onSubmitSendMessage(e, submission, message_modal_trigger) {
        e.preventDefault();
        let mail = {
            co_id: submission.challenge.company_id,
            to: submission.user.user_email,
            subject:
                this.state.msg_subject === ""
                    ? "Response to Application on" + submission.challenge.title
                    : this.state.msg_subject,
            meeting_date: this.state.event_date,
            meeting_starts: this.state.event_starts_at,
            meeting_ends: this.state.event_ends_at,
            meeting_link: this.state.msg_link,
            content: this.state.msg_content
        };
        axios.post("/meeting-mail", mail).then(response => {
            if (response.data.message === "sent") {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Message Sent",
                    showConfirmButton: false,
                    timer: 700
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
            }
        });

        $(message_modal_trigger).modal("hide");
    }

    onClickChat(e, user) {
        e.preventDefault();
        console.log(user)
        ReactDOM.render(
            <Chats user={user}></Chats>,
            document.getElementById("root")
        );
    }

    render_submissions() {
        if (this.state.submissions.length === 0) {
            return (
                <div className="my-4">
                    <h5 className="text-muted">No Submissions Yet!</h5>
                    {/* <iframe
                        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23616161&amp;ctz=Asia%2FBeirut&amp;src=bW9oZC55YXNpci5hbGFsaUBnbWFpbC5jb20&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4ubGIjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;showTitle=0&amp;showTz=1&amp;mode=WEEK"
                        style={{width:"800px",
                        height:"600px",
                        frameborder:"0",
                        scrolling:"no"}}

                    ></iframe> */}
                </div>
            );
        } else {
            return this.state.submissions.map(submission => {
                let modal_show_code =
                    "modal-show-code-" + submission.submission.id;
                let modal_show_code_trigger = "#" + modal_show_code;

                let message_modal = "message-modal-" + submission.submission.id;
                let message_modal_trigger = "#" + message_modal;

                return (
                    <div
                        key={submission.submission.id}
                        className="mb-3 p-3 w-100"
                    >
                        <div className="row">
                            <div className="col-md-1">
                                <img
                                    className="w-100 rounded-circle"
                                    src={submission.user.user_avatar}
                                    alt="avatar"
                                ></img>
                            </div>
                            <div className="col-md-11">
                                <h5>
                                    <a>
                                        <b>{submission.user.user_name}</b>
                                    </a>
                                    , submitted the following on{" "}
                                    <b>
                                        {submission.challenge.title} /
                                        {submission.question}
                                    </b>
                                </h5>
                                <h6 className="text-muted">
                                    {submission.user.user_email} on{" "}
                                    {submission.submission.created_at}
                                </h6>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="ml-auto">
                                <button
                                    className="btn btn-danger btn-round mr-2"
                                    data-toggle="modal"
                                    data-target={modal_show_code_trigger}
                                >
                                    <i className="fas fa-code"></i>
                                </button>
                                <button
                                    className="btn btn-danger btn-round mr-2"
                                    onClick={e =>
                                        this.onClickChat(e, submission.user)
                                    }
                                >
                                    <i className="far fa-paper-plane"></i>
                                </button>
                                <button
                                    className="btn btn-danger btn-round mr-2"
                                    data-toggle="modal"
                                    data-target="#CalendarModal"
                                >
                                    <i className="far fa-calendar-plus"></i>
                                </button>
                                <button
                                    className="btn btn-danger btn-round mr-2"
                                    data-toggle="modal"
                                    data-target={message_modal_trigger}
                                >
                                    <i className="fas fa-envelope-open-text"></i>
                                </button>
                                <button className="btn btn-danger btn-round mr-2">
                                    <i className="far fa-trash-alt"></i>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Modal CODE SHOW --> */}
                        <div
                            className="modal fade"
                            id={modal_show_code}
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="showCodeModalLabel"
                            aria-hidden="true"
                        >
                            <div
                                className="modal-dialog modal-lg"
                                role="document"
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="showCodeModalLabel"
                                        >
                                            Code
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div
                                            className="row px-5 pb-3"
                                            style={{
                                                fontFamily:
                                                    '"Fira code", "Fira Mono", monospace',
                                                fontSize: 14
                                            }}
                                        >
                                            {submission.submission.code}
                                        </div>
                                        <div className="row px-5">
                                            <div className="ml-auto">
                                                <button
                                                    className="btn btn-danger btn-round mr-2"
                                                    onClick={() =>
                                                        this.copyToClipBoard(
                                                            submission
                                                                .submission.code
                                                        )
                                                    }
                                                >
                                                    <i className="far fa-copy"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Modal Message to Aoolicant --> */}
                        <div
                            className="modal fade"
                            id={message_modal}
                            tabIndex="-1"
                            role="dialog"
                            aria-labelledby="MessageModalLabel"
                            aria-hidden="true"
                        >
                            <div
                                className="modal-dialog modal-lg"
                                role="document"
                            >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5
                                            className="modal-title"
                                            id="MessageModalLabel"
                                        >
                                            Messaage
                                        </h5>
                                        <button
                                            type="button"
                                            className="close"
                                            data-dismiss="modal"
                                            aria-label="Close"
                                        >
                                            <span aria-hidden="true">
                                                &times;
                                            </span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container p-4">
                                            <div className="row">
                                                <div className="col-md-10 mx-auto">
                                                    <form
                                                        onSubmit={e =>
                                                            this.onSubmitSendMessage(
                                                                e,
                                                                submission,
                                                                message_modal_trigger
                                                            )
                                                        }
                                                    >
                                                        <div className="from-group row">
                                                            <label className="col-md-2">
                                                                To
                                                            </label>
                                                            <input
                                                                className="form-control col-md-10"
                                                                defaultValue={
                                                                    submission
                                                                        .user
                                                                        .user_email
                                                                }
                                                                readOnly
                                                            ></input>
                                                        </div>
                                                        <div className="form-group row mt-3">
                                                            <label className="col-md-2">
                                                                Subject
                                                            </label>
                                                            <input
                                                                className="form-control col-md-10"
                                                                defaultValue={
                                                                    "Response to Application on " +
                                                                    submission
                                                                        .challenge
                                                                        .title
                                                                }
                                                                onChange={
                                                                    this
                                                                        .onChangeMessageSubject
                                                                }
                                                            ></input>
                                                        </div>
                                                        <div className="form-group my-5">
                                                            <label>
                                                                <b>Meeting</b>
                                                            </label>
                                                            <button
                                                                className="btn btn-danger btn-sm btn-round ml-2"
                                                                // data-toggle="modal"
                                                                onClick={
                                                                    this
                                                                        .onClickReschedule
                                                                }
                                                                // data-target="#CalendarModal"
                                                            >
                                                                <i className="far fa-calendar-plus"></i>
                                                            </button>

                                                            <div className="row my-3">
                                                                <div className="col-md-4 text-center">
                                                                    <i className="far fa-calendar-alt mr-3"></i>
                                                                    {
                                                                        this
                                                                            .state
                                                                            .event_date
                                                                    }
                                                                </div>
                                                                <div className="col-md-4 text-center">
                                                                    <i className="fas fa-clock mr-3"></i>
                                                                    <b>
                                                                        From:{" "}
                                                                    </b>
                                                                    {
                                                                        this
                                                                            .state
                                                                            .event_starts_at
                                                                    }
                                                                </div>
                                                                <div className="col-md-4 text-center">
                                                                    <i className="far fa-clock mr-3"></i>
                                                                    <b>To: </b>
                                                                    {
                                                                        this
                                                                            .state
                                                                            .event_ends_at
                                                                    }
                                                                </div>
                                                            </div>
                                                            <div className="form-group row">
                                                                <label className="col-md-2">
                                                                    <i className="fas fa-link mr-3"></i>
                                                                    Link
                                                                </label>
                                                                <input
                                                                    className="form-control col-md-10"
                                                                    onChange={
                                                                        this
                                                                            .onChangeMessageLink
                                                                    }
                                                                ></input>
                                                            </div>
                                                        </div>
                                                        <div className="form-group row mt-3">
                                                            <label className="col-md-2">
                                                                <b>Message</b>
                                                            </label>
                                                            <textarea
                                                                className="form-control col-md-10"
                                                                row="10"
                                                                onChange={
                                                                    this
                                                                        .onChangeMessageContent
                                                                }
                                                            ></textarea>
                                                        </div>
                                                        <div className="mt-3 text-right">
                                                            <button className="btn btn-danger btn-round">
                                                                <i className="fas fa-caret-right mr-3"></i>
                                                                Send
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }

    render() {
        return (
            <section>
                <div className="p-5 bg-light rounded-bottom">
                    <div className="row mb-2"></div>
                    {/* <div className="container mt-5">{this.redner_jobs()}</div> */}
                    <div className="container row mt-5">
                        {this.render_submissions()}
                    </div>
                </div>

                {/* <!-- Modal Schedule --> */}
                <div
                    className="modal fade"
                    id="CalendarModal"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="CalendarModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5
                                    className="modal-title"
                                    id="CalendarModalLabel"
                                >
                                    Add to Schedule
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
                                    <div className="row">
                                        <div className="col-md-10 mx-auto">
                                            <div className="form-group mt-5">
                                                <label>
                                                    <b>Add to Calendar</b>
                                                </label>
                                                <div className="form-group row">
                                                    <label className="col-4 col-form-label">
                                                        <i className="far fa-calendar-alt mr-3"></i>
                                                        Date
                                                    </label>
                                                    <div className="col-8">
                                                        <input
                                                            className="form-control"
                                                            type="date"
                                                            value={
                                                                this.state
                                                                    .event_date
                                                            }
                                                            onChange={
                                                                this
                                                                    .onChangeAddEventDate
                                                            }
                                                        ></input>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-4 col-form-label">
                                                        <i className="fas fa-clock mr-3"></i>
                                                        Starts At
                                                    </label>
                                                    <div className="col-8">
                                                        <input
                                                            className="form-control"
                                                            type="time"
                                                            value={
                                                                this.state
                                                                    .event_starts_at
                                                            }
                                                            onChange={
                                                                this
                                                                    .onChangeAddEventStart
                                                            }
                                                        ></input>
                                                    </div>
                                                </div>
                                                <div className="form-group row">
                                                    <label className="col-4 col-form-label">
                                                        <i className="far fa-clock mr-3"></i>
                                                        Ends At
                                                    </label>
                                                    <div className="col-8">
                                                        <input
                                                            className="form-control"
                                                            type="time"
                                                            value={
                                                                this.state
                                                                    .event_ends_at
                                                            }
                                                            onChange={
                                                                this
                                                                    .onChangeAddEventEnd
                                                            }
                                                        ></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="form-group">
                                                    <label>
                                                        <b>Title</b>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        onChange={
                                                            this
                                                                .onChangeAddEventTitle
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="form-group">
                                                    <label>
                                                        <b>Details</b>
                                                    </label>
                                                    <input
                                                        className="form-control"
                                                        onChange={
                                                            this
                                                                .onChangeAddEventDetails
                                                        }
                                                    ></input>
                                                </div>
                                                <div className="my-5 text-right">
                                                    <div className="d-inline">
                                                        <AddToCalendar
                                                            event={{
                                                                name: this.state
                                                                    .event_title,
                                                                details: this
                                                                    .state
                                                                    .event_details,
                                                                // location: Boston, MA",
                                                                startsAt: this
                                                                    .state
                                                                    .selectedStartDate,
                                                                endsAt: this
                                                                    .state
                                                                    .selectedEndDate
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="my-3 text-right">
                                                <button
                                                    type="button"
                                                    className="btn btn-danger btn-round"
                                                    data-dismiss="modal"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Submissions;
