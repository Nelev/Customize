import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    decreaseWidth,
    increaseWidth,
    decreaseHeight,
    increaseHeight,
    decreaseTop,
    increaseTop,
    decreaseLeft,
    increaseLeft
} from "./actions";
import ImageController from "../ImageController";
import "./style.css";

export const spacingUnit = 20;

class WorkContainer extends React.Component {
    state = { imgWidth: 100, imgHeight: 100, imgTop: 200, imgLeft: 200 };

    handleDecreaseHeight = () => {
        const { decreaseHeight } = this.props;
        decreaseHeight();
    };

    handleDecreaseLeft = () => {
        const { decreaseLeft } = this.props;
        decreaseLeft();
    };

    handleDecreaseTop = () => {
        const { decreaseTop } = this.props;
        decreaseTop();
    };

    handleDecreaseWidth = () => {
        const { decreaseWidth } = this.props;
        decreaseWidth();
    };

    handleIncreaseHeight = () => {
        const { increaseHeight } = this.props;
        increaseHeight();
    };

    handleIncreaseLeft = () => {
        const { increaseLeft } = this.props;
        increaseLeft();
    };

    handleIncreaseTop = () => {
        const { increaseTop } = this.props;
        increaseTop();
    };

    handleIncreaseWidth = () => {
        const { increaseWidth } = this.props;
        increaseWidth();
    };

    handleResetPosition = () => {
        this.setState({ imgTop: 200, imgLeft: 200 });
    };

    handleResetSizes = () => {
        this.setState({ imgHeight: 100, imgWidth: 100 });
    };
    render() {
        const {
            imgUploaded,
            imgWidth,
            imgHeight,
            imgTop,
            imgLeft
        } = this.props;
        const gotUploaded = imgUploaded !== null ? true : false;
        return (
            <div className="c-Create">
                <div className="c-WorkContainer">
                    <div className="c-WorkContainer-imgupload">
                        <img
                            src={imgUploaded}
                            alt=""
                            style={{
                                width: imgWidth,
                                height: imgHeight,
                                marginTop: imgTop,
                                marginLeft: imgLeft
                            }}
                        />
                    </div>
                </div>
                <div className="c-Image-Controller">
                    <ImageController
                        gotUploaded={gotUploaded}
                        handleIncreaseWidth={this.handleIncreaseWidth}
                        handleDecreaseWidth={this.handleDecreaseWidth}
                        handleDecreaseHeight={this.handleDecreaseHeight}
                        handleIncreaseHeight={this.handleIncreaseHeight}
                        handleIncreaseTop={this.handleIncreaseTop}
                        handleDecreaseTop={this.handleDecreaseTop}
                        handleIncreaseLeft={this.handleIncreaseLeft}
                        handleDecreaseLeft={this.handleDecreaseLeft}
                        handleResetPosition={this.handleResetPosition}
                        handleResetSizes={this.handleResetSizes}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        imgWidth: state.components.workContainer.imgWidth,
        imgHeight: state.components.workContainer.imgHeight,
        imgTop: state.components.workContainer.imgTop,
        imgLeft: state.components.workContainer.imgLeft
    };
}

function mapDispatchToProps(dispatch) {
    return {
        decreaseWidth: bindActionCreators(decreaseWidth, dispatch),
        increaseWidth: bindActionCreators(increaseWidth, dispatch),
        decreaseHeight: bindActionCreators(decreaseHeight, dispatch),
        increaseHeight: bindActionCreators(increaseHeight, dispatch),
        decreaseTop: bindActionCreators(decreaseTop, dispatch),
        increaseTop: bindActionCreators(increaseTop, dispatch),
        decreaseLeft: bindActionCreators(decreaseLeft, dispatch),
        increaseLeft: bindActionCreators(increaseLeft, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WorkContainer);
