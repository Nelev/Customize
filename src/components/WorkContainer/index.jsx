import React from "react";
import { Button } from "antd";
import "./style.css";

export default class WorkContainer extends React.Component {
    state = { imgWidth: 100, imgHeight: 100 };

    handleIncreaseWidth = () => {
        const newWidth = this.state.imgWidth + 40;
        console.log(newWidth, "NEW");
        this.setState({ imgWidth: newWidth });
    };

    renderButtons() {
        return (
            <div>
                <Button onClick={this.handleIncreaseWidth} />
                <Button />
                <Button />
                <Button />
            </div>
        );
    }

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
                {this.renderButtons()}
            </div>
        );
    }
}
