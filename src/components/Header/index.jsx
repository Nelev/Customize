import { Breadcrumb, Col, Row } from "antd";
import React from "react";

import "./style.css";

export default class Header extends React.Component {
    renderLinks() {
        return (
            <Breadcrumb>
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
                </Row>
            </div>
        );
    }
}
