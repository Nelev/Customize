import { connect } from "react-redux";
import React from "react";
import { setImage } from "./actions";
import WorkContainer from "../../components/WorkContainer";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { history } from "react-router-prop-types";

class Create extends React.Component {
    static propTypes = {
        setImage: PropTypes.func.isRequired,
        history: history.isRequired
    };

    handleImageUpload = e => {
        console.log(this.props);
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
            <div className="v-Create-Content">
                <WorkContainer showUploadList imgUploaded={imgUrl} />
                <input type="file" onChange={e => this.handleImageUpload(e)} />
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
