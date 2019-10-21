import React, {Component} from 'react';


class Navigation extends Component{
    render(){
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a href="#">{ this.props.tittle} </a>
                <span className="badge badge-pill badge-light ml-2">{this.props.cant}</span>
            </nav>
        )
    }
}

export default Navigation;