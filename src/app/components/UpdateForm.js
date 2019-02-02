import React from 'react';

class UpdateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            curName: '',
            newName: ''
        }

        this.handleChangeCurName = this.handleChangeCurName.bind(this);
        this.handleChangeNewName = this.handleChangeNewName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.query = this.query.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    handleChangeCurName(event){
        this.setState({curName: event.target.value});
    }

    handleChangeNewName(event){
        this.setState({newName: event.target.value});
    }

    query(){
        fetch('/update',{
            method: 'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                curName: this.state.curName,
                newName: this.state.newName
            })
        })
        .then(response => {
            response.json()
            this.props.onUpdateQuery();
        })
    }

    render(){
        

        return(
            <div className={this.props.isActive ? 'active' : 'inactive'}>
                <form onSubmit={this.handleSubmit} className="table-form">
                    <p>Cambiar nombre de ciudad</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nombre actual:</td>
                                <td><input type="text" name="nombre-actual" value={this.state.curName} onChange={this.handleChangeCurName} ></input></td>
                            </tr>
                            <tr>
                                <td>Nombre nuevo:</td>
                                <td><input type="text" name="nombre-nuevo" value={this.state.newName} onChange={this.handleChangeNewName} ></input></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <button onClick={this.query}>Buscar y cambiar</button>
                </form>
            </div>
        )
    }
}

export default UpdateComponent;