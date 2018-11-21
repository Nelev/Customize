import { Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { history } from "react-router-prop-types";
import { bindActionCreators } from "redux";

import { setImage } from "./actions";
import Header from "../../components/Header";
import WorkContainer from "../../components/WorkContainer";

class Create extends React.Component {
    static propTypes = {
        setImage: PropTypes.func.isRequired,
        history: history.isRequired
    };

    handleImageUpload = e => {
        let { setImage } = this.props;
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setImage(reader.result, file);
        };
        reader.readAsDataURL(file);
    };

    render() {
        const { imgUrl } = this.props;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={4} />
                    <div className="v-Create-Content">
                        <Col span={16}>
                            <Header />
                            <WorkContainer
                                showUploadList
                                imgUploaded={imgUrl}
                            />
                            <input
                                type="file"
                                onChange={event =>
                                    this.handleImageUpload(event)
                                }
                            />
                        </Col>
                        <Col span={4} />
                    </div>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        imgUrl: state.views.create.imgUrl,
        file: state.views.create.file
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setImage: bindActionCreators(setImage, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Create);
