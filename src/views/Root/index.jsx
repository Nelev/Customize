import { Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { history } from "react-router-prop-types";
import { bindActionCreators } from "redux";

import { fetchCarouselImages } from "./actions";
import Header from "../../components/Header";
import MainCarousel from "../../components/MainCarousel";
import MainSidePanel from "../../components/MainSidePanel";
import { statePropType } from "./reducer";

import "./style.css";

class Root extends React.Component {
    static propTypes = {
        ...statePropType,
        fetchCarouselImages: PropTypes.func.isRequired,
        history: history.isRequired
    };

    componentDidMount() {
        const { fetchCarouselImages } = this.props;
        fetchCarouselImages();
    }

    render() {
        const { carouselImages, isFetchingCarouselImages } = this.props;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4} />
                    <div className="v-Main">
                        <Col span={16}>
                            <Header />
                            <Col span={10}>
                                <div>
                                    <b>Check out our latest works!</b>
                                </div>
                                <MainCarousel
                                    carouselImages={carouselImages}
                                    isFetchingCarouselImages={
                                        isFetchingCarouselImages
                                    }
                                />
                            </Col>
                            <Col span={6}>
                                <div>
                                    Press <b>Create Button</b> and get started!
                                </div>
                                <Col />
                                <MainSidePanel />
                            </Col>
                        </Col>
                    </div>
                    <Col span={4} />
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        carouselImages: state.views.root.carouselImages,
        isFetchingCarouselImages: state.views.root.isFetchingCarouselImages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCarouselImages: bindActionCreators(fetchCarouselImages, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Root);
