import React from "react";
import FormCidade from "./FormCidade";
import FormEmail from "./FormEmail";
import FormFeedBack from "./FormFeedBack";
import FormName from "./FormName";

class Form extends React.Component {
    state = {
        Cidade: '',
        Nome: '',
        FeedBack: '',
        Email: '',
    }

    handleChange = ({target}) => {
        const { name, value } = target;
        
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <form>
              <FormCidade funcao={this.handleChange} />
              <FormName funcao={ this.handleChange} />
              <FormEmail funcao={this.handleChange} />
              <FormFeedBack funcao={this.handleChange} />
            </form>
        )
    }
}

export default Form;