import React from 'react';

class CreateComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            CountryCode: '',
            District: '',
            Population: 0
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCountryCode = this.handleChangeCountryCode.bind(this);
        this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
        this.handleChangePopulation = this.handleChangePopulation.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.query = this.query.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    handleChangeName(event){
        this.setState({Name: event.target.value});
    }
    handleChangeCountryCode(event){
        this.setState({CountryCode: event.target.value});
    }
    handleChangeDistrict(event){
        this.setState({District: event.target.value});
    }
    handleChangePopulation(event){
        this.setState({Population: event.target.value});
    }
    
    query(){
        fetch('/create',{
            method: 'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                Name: this.state.Name,
                CountryCode: this.state.CountryCode,
                District: this.state.District,
                Population: Number.parseInt(this.state.Population)
            })
        })
        .then(response => {
            response.json();
            this.props.onCreateQuery();
        })
    }

    render(){
        

        return(
            <div className={this.props.isActive ? 'active' : 'inactive'}>
                <form onSubmit={this.handleSubmit} className="table-form">
                    <p>Nueva ciudad</p>
                    <table>
                        <tbody>
                            <tr>
                                <td>Nombre:</td>
                                <td><input type="text" name="name" value={this.state.Name} onChange={this.handleChangeName} ></input></td>
                            </tr>
                            <tr>
                                <td>Código de país:</td>
                                <td><input type="text" name="codigo" value={this.state.CountryCode} onChange={this.handleChangeCountryCode} ></input></td>
                            </tr>
                            <tr>
                                <td>Distrito:</td>
                                <td><input type="text" name="distrito" value={this.state.District} onChange={this.handleChangeDistrict} ></input></td>
                            </tr>
                            <tr>
                                <td>Población:</td>
                                <td><input type="number" name="poblacion" value={this.state.Population} onChange={this.handleChangePopulation} ></input></td>
                            </tr>
                        </tbody>
                    </table>
                    
                    <button onClick={this.query}>Crear ciudad</button>
                </form>
            </div>
        )
    }
}

export default CreateComponent;