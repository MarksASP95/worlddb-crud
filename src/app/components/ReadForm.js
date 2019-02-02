import React from 'react';
import toastr from 'toastr';

class ReadForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.query = this.query.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    query(){
        fetch(`read/${this.state.value}`)
        .then(response => {
            response.json()
            .then(cities => {
                this.props.onReadQuery(cities);
            })
        })
        
    }


    render(){
        
        return(
            <div className={this.props.isActive ? 'active' : 'inactive'}>
                <form onSubmit={this.handleSubmit} id="read-form">
                    <p>Buscar ciudad por nombre</p> 
                    <input type="text" name="nombre" placeholder="Nombre de la ciudad..." value={this.state.value} onChange={this.handleChange}></input>
                    <button onClick={this.query}>Buscar</button>
                </form>
                
            </div>
        );
    }
}

export default ReadForm;