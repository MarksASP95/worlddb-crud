import React from 'react';
import toastr from 'toastr';

class ResultsTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        
        return(
            <div className="component">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Pais</th>
                            <th scope="col">Población</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.queryResults.map(result => {
                                return(
                                    <tr>
                                        <td scope="row">{result.Name}</td>
                                        <td>{result.CountryCode}</td>
                                        <td>{result.Population}</td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default ResultsTable;