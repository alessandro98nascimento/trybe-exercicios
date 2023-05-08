import React from "react";

class FormEmail extends React.Component {
    render() {
        const {funcao} = this.props;
        return (
            <label name="Email">
                E-mail:
                <input name="Email" type="email" onChange={funcao}>
                </input>
              </label>
        )   
    }
}

export default FormEmail;