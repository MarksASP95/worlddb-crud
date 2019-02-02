import React from 'react';
import toastr from 'toastr';
import ReadForm from './components/ReadForm';
import ResultsTable from './components/ResultsTable';
import Navbar from './components/Navbar';
import DeleteComponent from './components/DeleteComponent';
import UpdateComponent from './components/UpdateForm';
import CreateForm from './components/CreateComponent';


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            queryResults: [],
            messageFromChild: '',
            operations: {
                create: false,
                read: false,
                update: false,
                delete: false
            }
        }
        this.childDidReadQuery = this.childDidReadQuery.bind(this);
        this.childDidCreateQuery = this.childDidCreateQuery.bind(this);
        this.childDidDeleteQuery = this.childDidDeleteQuery.bind(this);
        this.childDidUpdateQuery = this.childDidUpdateQuery.bind(this);

        this.changeOperation =  this.changeOperation.bind(this);
    }

    componentDidMount(){
    }

    childDidReadQuery(cities){
        toastr.success("Datos obtenidos", "¡Éxito!")
        this.setState({queryResults: cities});
        //alert(`PARENT SAYS: I have a message from my son, it says: ${this.state.messageFromChild}`);
    }

    childDidCreateQuery(){
        toastr.success("Datos insertados", "¡Éxito!");
    }
    childDidDeleteQuery(){
        toastr.success("Datos borrados", "¡Éxito!");
    }
    childDidUpdateQuery(){
        toastr.success("Datos actualizados", "¡Éxito!");
    }


    changeOperation(opKey){
        var operationsCopy = this.state.operations;
        Object.keys(this.state.operations).forEach(keyName => {
            
            if(keyName === opKey){
                operationsCopy[keyName] = true;
            }
            else{
                operationsCopy[keyName] = false;
            }
            this.setState({operations:operationsCopy})
        });

        console.log(this.state);
    }

    render(){
        return(
            <div>
                <nav className="blue lighten-1">
                    <div className="container">
                        <a className="logo" href="/">WorldDB</a>
                    </div>
                </nav>
                <Navbar onSelectOperation={this.changeOperation} />
                <CreateForm isActive={this.state.operations.create} onCreateQuery={this.childDidCreateQuery} />
                <ReadForm isActive={this.state.operations.read} onReadQuery={this.childDidReadQuery} />
                <UpdateComponent isActive={this.state.operations.update} onUpdateQuery={this.childDidUpdateQuery} />
                <DeleteComponent isActive={this.state.operations.delete} onDeleteQuery={this.childDidDeleteQuery} />
                <ResultsTable queryResults={this.state.queryResults} messageFromSibling={this.state.messageFromChild}/>
                
            </div>
        );
    }
}
export default App;