import React from 'react';

class DeleteComponent extends React.Component{
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
        fetch(`/delete/${this.state.value}`,{
            method: 'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(response => {
            response.json();
            this.props.onDeleteQuery();
        })
    }

    render(){
        

        return(
            <div className={this.props.isActive ? 'active' : 'inactive'}>
                <form onSubmit={this.handleSubmit} id="delete-form">
                    <p>Borrar ciudad por nombre</p> 
                    <input type="text" name="nombre" placeholder="Nombre de la ciudad..." value={this.state.value} onChange={this.handleChange} ></input>
                    <button onClick={this.query}>Buscar y borrar</button>
                </form>
            </div>
        )
    }
}

export default DeleteComponent;