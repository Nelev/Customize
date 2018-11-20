import React from "react";
import { Button } from "antd";

export default class ImageController extends React.Component {
    handleWidth = () => {
        const { handleIncreaseWidth } = this.props;
        console.log("component");
        handleIncreaseWidth();
    };

    render() {
        const { handleIncreaseWidth } = this.props;
        return (
            <div>
                <Button onClick={handleIncreaseWidth} />
                <Button />
                <Button />
                <Button />
            </div>
        );
    }
}
