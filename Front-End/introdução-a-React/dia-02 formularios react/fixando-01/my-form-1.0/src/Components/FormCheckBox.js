import React from "react";

class FormCheckBox extends React.Component {
    render() {
        const { funcao } = this.props;
        return (
            <label name="checkbox">
                Curtiu?
                <input type="checkbox" name="checkbox" onChange={funcao}></input>
            </label>
        )
    }
}

export default FormCheckBox;