import React from "react";
import { Button, Col, Divider, Row } from "antd";

import "./style.css";

export default class ImageController extends React.Component {
    render() {
        const {
            handleIncreaseWidth,
            handleDecreaseWidth,
            handleDecreaseHeight,
            handleIncreaseHeight,
            handleIncreaseTop,
            handleDecreaseTop,
            handleIncreaseLeft,
            handleDecreaseLeft
        } = this.props;
        return (
            <div className="c-Controller">
                <Divider />
                <span>
                    <b>Use the pad to adjust image size!</b>
                </span>
                <Divider />
                <Row>
                    <Col span="6" />
                    <Col span="3">
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="left"
                            onClick={handleDecreaseWidth}
                            shape="circle"
                        />
                    </Col>
                    <Col span="3">
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="up"
                            onClick={handleIncreaseHeight}
                            shape="circle"
                        />
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="down"
                            onClick={handleDecreaseHeight}
                            shape="circle"
                        />
                    </Col>
                    <Col span="3">
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="right"
                            onClick={handleIncreaseWidth}
                            shape="circle"
                        />
                    </Col>
                </Row>
                <Divider />
                <span>
                    <b>Use the pad to adjust image position!</b>
                </span>
                <Divider />
                <Row>
                    <Col span="6" />
                    <Col span="3">
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="left"
                            onClick={handleDecreaseLeft}
                            shape="circle"
                        />
                    </Col>
                    <Col span="3">
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="up"
                            onClick={handleDecreaseTop}
                            shape="circle"
                        />
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="down"
                            onClick={handleIncreaseTop}
                            shape="circle"
                        />
                    </Col>
                    <Col span="3">
                        <Button
                            className="c-Controller-Button"
                            type="primary"
                            icon="right"
                            onClick={handleIncreaseLeft}
                            shape="circle"
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}
