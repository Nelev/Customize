import React from "react";
import { Button, Divider, Tooltip } from "antd";
import { Link } from "react-router-dom";

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
            handleDecreaseLeft,
            handleResetPosition,
            handleResetSizes,
            gotUploaded
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
                        <tbody>
                            <tr>
                                <td />
                                <td>
                                    <Tooltip title="Increase Image Heigth">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="up"
                                            onClick={handleIncreaseHeight}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Tooltip title="Decrease Image Width">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="left"
                                            onClick={handleDecreaseWidth}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                                <td>
                                    <Tooltip title="Reset Image Sizes">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="delete"
                                            onClick={handleResetSizes}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                                <td>
                                    <Tooltip title="Increase Image Width">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="right"
                                            onClick={handleIncreaseWidth}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                    <Tooltip title="Decrease Image Heigth">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="down"
                                            onClick={handleDecreaseHeight}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Divider />
                <span>
                    <b>Use the pad to adjust image position!</b>
                </span>
                <Divider />
                <div className="c-Controller-Table">
                    <table>
                        <tbody>
                            <tr>
                                <td />
                                <td>
                                    <Tooltip title="Move Image Up">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="up"
                                            onClick={handleDecreaseTop}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Tooltip title="Move Image Left">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="left"
                                            onClick={handleDecreaseLeft}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                                <td>
                                    <Tooltip title="Reset Image Position">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="delete"
                                            onClick={handleResetPosition}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                                <td>
                                    <Tooltip title="Move Image Right">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="right"
                                            onClick={handleIncreaseLeft}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                            <tr>
                                <td />
                                <td>
                                    <Tooltip title="Move Image Down">
                                        <Button
                                            className="c-Controller-Button"
                                            type="primary"
                                            icon="down"
                                            onClick={handleIncreaseTop}
                                            shape="circle"
                                        />
                                    </Tooltip>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Divider />
                <div className="c-Checkout">
                    <Button type="primary" disabled={!gotUploaded}>
                        <Link to="checkout">Checkout</Link>
                    </Button>
                </div>
            </div>
        );
    }
}
