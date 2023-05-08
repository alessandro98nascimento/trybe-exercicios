import React from "react";

class FormFeedBack extends React.Component {
    render() {
        const {funcao} = this.props;
        return (
            <label name="FeedBack">
                FeedBack:
                <textarea maxLength="200" name="FeedBack" onChange={funcao}></textarea>
            </label>
        )   
    }
}

export default FormFeedBack;