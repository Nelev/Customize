import { Col, Row } from "antd";
import React from "react";
import { history } from "react-router-prop-types";

import CheckoutForm from "../../components/CheckoutForm";
import Header from "../../components/Header";
import "./style.css";

export default class Checkout extends React.Component {
    static propTypes = {
        history: history.isRequired
    };

    handleSubmit = () => {
        console.log("SUBMIT");
    };

    render() {
        return (
            <div className="v-Checkout">
                <Row gutter={16}>
                    <Col span={4} />
                    <Col span={16}>
                        <Header />
                        <CheckoutForm onSubmit={this.handleSubmit} />
                    </Col>
                    <Col span={4} />
                </Row>
            </div>
        );
    }
}
