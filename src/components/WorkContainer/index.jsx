import React from "react";

import ImageController from "../ImageController";
import "./style.css";

export default class WorkContainer extends React.Component {
    state = { imgWidth: 100, imgHeight: 100 };

    handleIncreaseWidth = () => {
        const newWidth = this.state.imgWidth + 40;
        this.setState({ imgWidth: newWidth });
    };

    handleDecreaseWidth = () => {
        const newWidth = this.state.imgWidth - 40;
        this.setState({ imgWidth: newWidth });
    };
    render() {
        const { imgUploaded } = this.props;
        return (
            <div className="c-WorkContainer">
                <div className="c-WorkContainer-imgupload">
                    <img
                        src={imgUploaded}
                        alt=""
                        style={{
                            width: this.state.imgWidth,
                            height: this.state.imgHeight
                        }}
                    />
                </div>
                <ImageController
                    handleIncreaseWidth={this.handleIncreaseWidth}
                    handleDecreaseWidth={this.handleDecreaseWidth}
                />
            </div>
        );
    }
}
