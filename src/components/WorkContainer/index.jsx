import React from "react";
import { Col, Row } from "antd";

import ImageController from "../ImageController";
import "./style.css";

export const spacingUnit = 20;

export default class WorkContainer extends React.Component {
    state = { imgWidth: 100, imgHeight: 100, imgTop: 0, imgLeft: 0 };

    handleDecreaseHeight = () => {
        const newHeight = this.state.imgHeight - spacingUnit;
        this.setState({ imgHeight: newHeight });
    };

    handleDecreaseLeft = () => {
        const newLeft = this.state.imgLeft - spacingUnit;
        this.setState({ imgLeft: newLeft });
    };

    handleDecreaseTop = () => {
        const newTop = this.state.imgTop - spacingUnit;
        this.setState({ imgTop: newTop });
    };

    handleDecreaseWidth = () => {
        const newWidth = this.state.imgWidth - spacingUnit;
        this.setState({ imgWidth: newWidth });
    };

    handleIncreaseHeight = () => {
        const newHeight = this.state.imgHeight + spacingUnit;
        this.setState({ imgHeight: newHeight });
    };

    handleIncreaseLeft = () => {
        const newLeft = this.state.imgLeft + spacingUnit;
        this.setState({ imgLeft: newLeft });
    };

    handleIncreaseTop = () => {
        const newTop = this.state.imgTop + spacingUnit;
        this.setState({ imgTop: newTop });
    };

    handleIncreaseWidth = () => {
        const newWidth = this.state.imgWidth + spacingUnit;
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
                                        height: this.state.imgHeight,
                                        marginTop: this.state.imgTop,
                                        marginLeft: this.state.imgLeft
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
                            handleIncreaseTop={this.handleIncreaseTop}
                            handleDecreaseTop={this.handleDecreaseTop}
                            handleIncreaseLeft={this.handleIncreaseLeft}
                            handleDecreaseLeft={this.handleDecreaseLeft}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
