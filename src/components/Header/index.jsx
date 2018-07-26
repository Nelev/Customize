import { Breadcrumb, Button, Col, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default class Header extends React.Component {
    renderCreateButton() {
        return (
            <Button type="primary">
                <Link to="create">Create!</Link>
            </Button>
        );
    }
    renderLinks() {
        return (
            <Breadcrumb>
                <Breadcrumb.Item>
                    <a href="">Get inspired!</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Squad</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Contacts</a>
                </Breadcrumb.Item>
            </Breadcrumb>
        );
    }

    renderLogo() {
        return;
    }

    render() {
        return (
            <div className="c-Header">
                <Row gutter={16}>
                    <Col span={2}>{this.renderLogo()}</Col>
                    <Col span={8}>{this.renderLinks()}</Col>
                    <Col span={8}>{this.renderCreateButton()}</Col>
                </Row>
            </div>
        );
    }
}
