import React from "react";

import WorkContainer from "../../components/WorkContainer";

class Create extends React.Component {
    state = {
        imgurl: null,
        file: null
    };

    handleImageUpload = e => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imgurl: reader.result
            });
        };
        reader.readAsDataURL(file);
    };

    render() {
        return (
            <div className="v-Create-Content">
                <WorkContainer showUploadList imgUploaded={this.state.imgurl} />
                <input type="file" onChange={e => this.handleImageUpload(e)} />
            </div>
        );
    }
}

export default Create;
