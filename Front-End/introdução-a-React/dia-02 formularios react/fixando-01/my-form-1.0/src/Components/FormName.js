import React from "react";

class FormName extends React.Component {
    render() {
        const { funcao } = this.props;
        return (
            <label name="Nome">
                Nome:
                <input name="Nome" type="text" onChange={funcao}>
                </input>
            </label>
        )
    }
}

export default FormName;