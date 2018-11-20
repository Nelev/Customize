import React from "react";
import { Col, Row } from "antd";

import ImageController from "../ImageController";
import "./style.css";

export default class WorkContainer extends React.Component {
    state = { imgWidth: 100, imgHeight: 100 };

    handleDecreaseHeight = () => {
        const newHeight = this.state.imgHeight - 40;
        this.setState({ imgHeight: newHeight });
    };

    handleDecreaseWidth = () => {
        const newWidth = this.state.imgWidth - 40;
        this.setState({ imgWidth: newWidth });
    };

    handleIncreaseHeight = () => {
        const newHeight = this.state.imgHeight + 40;
        this.setState({ imgHeight: newHeight });
    };

    handleIncreaseWidth = () => {
        const newWidth = this.state.imgWidth + 40;
        this.setState({ imgWidth: newWidth });
    };

    render() {
        const { imgUploaded } = this.props;
        return (
            <div className="c-Create">
                <Row>
                    <Col span={9}>
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
                        </div>
                    </Col>
                    <Col span={4}>
                        <ImageController
                            handleIncreaseWidth={this.handleIncreaseWidth}
                            handleDecreaseWidth={this.handleDecreaseWidth}
                            handleDecreaseHeight={this.handleDecreaseHeight}
                            handleIncreaseHeight={this.handleIncreaseHeight}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
