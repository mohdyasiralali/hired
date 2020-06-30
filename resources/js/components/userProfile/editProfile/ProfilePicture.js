import React from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class ProfilePicture extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            file: null,
            src: null,
            crop: {
                unit: "%",
                width: 30,
                aspect: 1 / 1
            },
            croppedImageUrl: null
        };
        this.onSelectFile = this.onSelectFile.bind(this);
        this.onImageLoaded = this.onImageLoaded.bind(this);
        this.onCropChange = this.onCropChange.bind(this);
        this.onCropComplete = this.onCropComplete.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onSelectFile(e) {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () =>
                this.setState({ src: reader.result })
            );
            reader.readAsDataURL(e.target.files[0]);
        }

        $("#cropModal").modal("show");
    }

    onImageLoaded(image) {
        this.imageRef = image;
    }

    onCropComplete(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = this.getCroppedImg(this.imageRef, crop);
            this.setState({ croppedImageUrl });
        }
    }

    onCropChange(crop, percentCrop) {
        this.setState({ crop });
    }

    dataURLtoFile(dataurl, filename) {
        let arr = dataurl.split(","),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        let croppedImage = new File([u8arr], filename, { type: mime });
        this.setState({ croppedImage: croppedImage });
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext("2d");

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        const reader = new FileReader();
        canvas.toBlob(blob => {
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                this.dataURLtoFile(reader.result, "cropped.jpg");
            };
        });
    }

    onClickSave(e) {
        e.preventDefault();
        this.props.savepp(this.state.croppedImage);
    }

    render() {
        const { crop, src } = this.state;
        return (
            <div id="profile-image" className="text-center">
                <form>
                    <div>
                        <img
                            src={
                                this.state.file === null
                                    ? this.props.avatar
                                    : this.state.file
                            }
                            className="mx-auto rounded"
                            alt="avatar"
                            style={{ width: "25%" }}
                        ></img>
                        <div>
                            <label className="custom-file">
                                <input
                                    type="file"
                                    id="file"
                                    className="custom-file-input"
                                    // onChange={this.handleChange}
                                    onChange={this.onSelectFile}
                                    accept="image/*"
                                ></input>
                                <span className="custom-file-control btn btn-danger">
                                    <i className="far fa-caret-square-up"></i>{" "}
                                    Choose file
                                </span>
                            </label>
                        </div>
                    </div>
                </form>
                <div>
                    {/* <!-- Modal --> */}
                    <div
                        className="modal fade"
                        id="cropModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="cropModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5
                                        className="modal-title"
                                        id="cropModalLabel"
                                    >
                                        Change Profile Picture
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
                                    {src && (
                                        <ReactCrop
                                            src={src}
                                            crop={crop}
                                            ruleOfThirds
                                            onImageLoaded={this.onImageLoaded}
                                            onComplete={this.onCropComplete}
                                            onChange={this.onCropChange}
                                        />
                                    )}
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={this.onClickSave}
                                    >
                                        Save changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePicture;
