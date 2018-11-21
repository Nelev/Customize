import React from "react";
import { Button, Divider } from "antd";

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
                <div className="c-Controller-Table">
                    <table>
                        <tr>
                            <td />
                            <td>
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="up"
                                    onClick={handleIncreaseHeight}
                                    shape="circle"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="left"
                                    onClick={handleDecreaseWidth}
                                    shape="circle"
                                />
                            </td>
                            <td />
                            <td>
                                {" "}
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="right"
                                    onClick={handleIncreaseWidth}
                                    shape="circle"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="down"
                                    onClick={handleDecreaseHeight}
                                    shape="circle"
                                />
                            </td>
                        </tr>
                    </table>
                </div>
                <Divider />
                <span>
                    <b>Use the pad to adjust image position!</b>
                </span>
                <Divider />
                <div className="c-Controller-Table">
                    <table>
                        <tr>
                            <td />
                            <td>
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="up"
                                    onClick={handleDecreaseTop}
                                    shape="circle"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="left"
                                    onClick={handleDecreaseLeft}
                                    shape="circle"
                                />
                            </td>
                            <td />
                            <td>
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="right"
                                    onClick={handleIncreaseLeft}
                                    shape="circle"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td />
                            <td>
                                <Button
                                    className="c-Controller-Button"
                                    type="primary"
                                    icon="down"
                                    onClick={handleIncreaseTop}
                                    shape="circle"
                                />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
