import React from "react";
import { Button } from "antd";

export default class ImageController extends React.Component {
    render() {
        const { handleIncreaseWidth, handleDecreaseWidth } = this.props;
        return (
            <div>
                <Button
                    type="primary"
                    icon="left"
                    onClick={handleDecreaseWidth}
                />
                <Button
                    type="primary"
                    icon="right"
                    onClick={handleIncreaseWidth}
                />
            </div>
        );
    }
}
