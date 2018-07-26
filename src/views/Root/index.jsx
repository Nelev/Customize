import { Divider, Row, Col } from "antd";
import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import "./style.css";

class Root extends React.Component {
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4} />
                    <span className="v-main">
                        <Col span={16}>
                            <Header />
                            <Divider />
                            <Container />
                        </Col>
                    </span>
                    <Col span={4} />
                </Row>
            </div>
        );
    }
}

export default Root;
