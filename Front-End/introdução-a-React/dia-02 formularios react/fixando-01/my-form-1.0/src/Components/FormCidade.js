import React from "react";

class FormCidade extends React.Component {
    render() {
        const { funcao } = this.props
        return (
            <label name="Cidade">
                Cidade:
                <select name="Cidade" onChange={funcao}>
                    <option>Selecione a cidade</option>
                    <option>Cubatão</option>
                    <option>Itariri</option>
                    <option>São Paulo</option>
                    <option>Santos</option>
                    <option>Peruíbe</option>
                </select>
              </label>
        )
    }
}

export default FormCidade;