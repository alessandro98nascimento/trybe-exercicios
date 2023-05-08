import React from "react";
import FormCheckBox from "./FormCheckBox";
import FormCidade from "./FormCidade";
import FormEmail from "./FormEmail";
import FormFeedBack from "./FormFeedBack";
import FormName from "./FormName";

class Form extends React.Component {
    state = {
        checkbox: false,
        Cidade: '',
        Nome: '',
        FeedBack: '',
        Email: '',
    }

    handleChange = ({target}) => {
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <form>
                <fieldset>
                    <FormCidade funcao={this.handleChange} />
                    <FormName funcao={ this.handleChange} />
                    <FormEmail funcao={this.handleChange} />
                    <FormFeedBack funcao={this.handleChange} />
                    <FormCheckBox funcao={this.handleChange} />
                </fieldset>
            </form>
        )
    }
}

export default Form;