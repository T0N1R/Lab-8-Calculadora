import React from 'react';
import '../components/button.css';

export default class Boton extends React.Component {
    render(){
        
        return(
        <button className="box" id={this.props.id} onClick={() => this.props.onClick(this.props.valor)}>{this.props.valor}</button>
        )
    }
}