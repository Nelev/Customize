import React from "react";
import { Col, Input, Row } from "antd";
import { Field, reduxForm } from "redux-form";
import { history } from "react-router-prop-types";

import Header from "../../components/Header";

class Checkout extends React.Component {
    static propTypes = {
        history: history.isRequired
    };

    handleSubmit = () => {
        console.log("SUBMIT");
    };

    render() {
        const { pristine, reset, submitting } = this.props;
        return (
            <div className="v-Checkout">
                <Row>
                    <Col span={8} />
                    <Col span={8}>
                        <Header />
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>First Name</label>
                                <div>
                                    <Field
                                        name="firstName"
                                        component={Input}
                                        type="text"
                                        placeholder="First Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <div>
                                    <Field
                                        name="lastName"
                                        component={Input}
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Email</label>
                                <div>
                                    <Field
                                        name="email"
                                        component={Input}
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>Size</label>
                                <div>
                                    <Field
                                        name="favoriteColor"
                                        component="select"
                                    >
                                        <option />
                                        <option value="s">Small</option>
                                        <option value="m">Medium</option>
                                        <option value="l">Large</option>
                                    </Field>
                                </div>
                            </div>
                            <div>
                                <label>Notes</label>
                                <div>
                                    <Field name="notes" component="textarea" />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={pristine || submitting}
                                >
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    disabled={pristine || submitting}
                                    onClick={reset}
                                >
                                    Clear Values
                                </button>
                            </div>
                        </form>
                    </Col>
                    <Col span={8} />
                </Row>
            </div>
        );
    }
}

export default reduxForm({
    form: "checkout"
})(Checkout);
