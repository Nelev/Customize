import React from "react";
import { Button } from "antd";

export default class ImageController extends React.Component {
    render() {
        const {
            handleIncreaseWidth,
            handleDecreaseWidth,
            handleDecreaseHeight,
            handleIncreaseHeight
        } = this.props;
        return (
            <div>
                <Button
                    type="primary"
                    icon="left"
                    onClick={handleDecreaseWidth}
                >
                    Decrease Image Width
                </Button>
                <Button
                    type="primary"
                    icon="right"
                    onClick={handleIncreaseWidth}
                >
                    Increase Image Width
                </Button>
                <Button
                    type="primary"
                    icon="left"
                    onClick={handleDecreaseHeight}
                >
                    Decrease Image Height
                </Button>
                <Button
                    type="primary"
                    icon="right"
                    onClick={handleIncreaseHeight}
                >
                    Increase image Height
                </Button>
            </div>
        );
    }
}
