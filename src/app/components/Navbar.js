import React from 'react';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div id="buttons">
                <ul>
                    <li onClick={() => this.props.onSelectOperation('create')}><span>C</span>reate</li>
                    <li onClick={() => this.props.onSelectOperation('read')}><span>R</span>ead</li>
                    <li onClick={() => this.props.onSelectOperation('update')}><span>U</span>pdate</li>
                    <li onClick={() => this.props.onSelectOperation('delete')}><span>D</span>elete</li>
                </ul>
            </div>
        )
    }
}


export default Navbar;