import React from "react";
import "./style.css";

export default class WorkContainer extends React.Component {
    render() {
        const { imgUploaded } = this.props;
        return (
            <div className="c-WorkContainer">
                <div className="c-WorkContainer-imgupload">
                    <img src={imgUploaded} alt="" />
                </div>
            </div>
        );
    }
}
