import { Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default class MainSidePanel extends React.Component {
    renderCreateButton() {
        return (
            <Button type="primary">
                <Link to="create">Create!</Link>
            </Button>
        );
    }

    render() {
        return (
            <div className="c-Main-Side-Panel">
                <Row gutter={16}>
                    <Col span={8}>{this.renderCreateButton()}</Col>
                </Row>
            </div>
        );
    }
}
