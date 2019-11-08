import React from 'react';

class Result extends React.Component{

    render(){

        const resultado ={
            height: "80px",
            width: "362px",
            backgroundColor: "rgb(67, 67, 71)",
            fontSize: "80px",
            color: "aliceblue"
        
        }

        return(
            <div id="bla" style={resultado}>{this.props.data}</div>
        )
    }
};

export default Result;