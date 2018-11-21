import { Col, Row } from "antd";
import React from "react";

import ImageController from "../ImageController";
import "./style.css";

export const spacingUnit = 20;

export default class WorkContainer extends React.Component {
    state = { imgWidth: 100, imgHeight: 100, imgTop: 200, imgLeft: 200 };

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

    handleResetPosition = () => {
        this.setState({ imgTop: 200, imgLeft: 200 });
    };

    handleResetSizes = () => {
        this.setState({ imgHeight: 100, imgWidth: 100 });
    };
    render() {
        const { imgUploaded } = this.props;
        const gotUploaded = imgUploaded !== null ? true : false;
        console.log(gotUploaded);
        return (
            <div className="c-Create">
                <Row>
                    <Col span={7}>
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
                        <div className="c-Image-Controller">
                            <ImageController
                                gotUploaded={gotUploaded}
                                handleIncreaseWidth={this.handleIncreaseWidth}
                                handleDecreaseWidth={this.handleDecreaseWidth}
                                handleDecreaseHeight={this.handleDecreaseHeight}
                                handleIncreaseHeight={this.handleIncreaseHeight}
                                handleIncreaseTop={this.handleIncreaseTop}
                                handleDecreaseTop={this.handleDecreaseTop}
                                handleIncreaseLeft={this.handleIncreaseLeft}
                                handleDecreaseLeft={this.handleDecreaseLeft}
                                handleResetPosition={this.handleResetPosition}
                                handleResetSizes={this.handleResetSizes}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
