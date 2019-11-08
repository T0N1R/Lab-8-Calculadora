import React from 'react';
import ReactDOM from 'react-dom';

import '../../index.css';

//componentes
import Result from '../result';
import Boton from '../button';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
    this.state.valor = "";
    this.state.memoria = "";
    this.state.operacion = "";
  }

  handleClick(id){

    if(id=="+"){
      console.log("es SUMA")
      if (this.state.operacion == ""){
        console.log("state operacion esta vacio")
        console.log("antes: ", this.state.memoria)
        this.state.memoria = this.state.valor
        this.state.operacion = id
        this.limpiar()
        console.log("despues", this.state.memoria)
      }else if (this.state.operacion == "+"){
        console.log("ya hay suma en memoria")
        
        this.setState((state) => ({
          valor: parseFloat((state.memoria)) + parseFloat((state.valor))
        }))

        this.limpiarMemoria()

      }
    }

    if(id=="-"){
      console.log("es RESTA")
      if (this.state.operacion == ""){
        console.log("state operacion esta vacio")
        console.log("antes: ", this.state.memoria)
        this.state.memoria = this.state.valor
        this.state.operacion = id
        this.limpiar()
        console.log("despues", this.state.memoria)
      }else if (this.state.operacion == "-"){
        console.log("ya hay suma en memoria")
        
        this.setState((state) => ({
          valor: parseFloat(state.memoria) - parseFloat(state.valor)
        }))

        this.limpiarMemoria()

      }
    }

    if(id=="/"){
      console.log("es DIVISION")
      if (this.state.operacion == ""){
        console.log("state operacion esta vacio")
        console.log("antes: ", this.state.memoria)
        this.state.memoria = this.state.valor
        this.state.operacion = id
        this.limpiar()
        console.log("despues", this.state.memoria)
      }else if (this.state.operacion == "/"){
        console.log("ya hay suma en memoria")
        
        this.setState((state) => ({
          valor: parseFloat(state.memoria) / parseFloat(state.valor)
        }))

        this.limpiarMemoria()

      }
    }

    if(id=="x"){
      console.log("es MULTIPLICACION")
      if (this.state.operacion == ""){
        console.log("state operacion esta vacio")
        console.log("antes: ", this.state.memoria)
        this.state.memoria = this.state.valor
        this.state.operacion = id
        this.limpiar()
        console.log("despues", this.state.memoria)
      }else if (this.state.operacion == "x"){
        console.log("ya hay suma en memoria")
        
        this.setState((state) => ({
          valor: parseFloat(state.memoria) * parseFloat(state.valor)
        }))

        this.limpiarMemoria()

      }
    }

    if(id=="="){
      console.log("signo IGUAL")
      if(this.state.operacion != ""){
        if (this.state.operacion == "+"){
          this.setState((state) => ({
            valor: parseFloat(state.memoria) + parseFloat(state.valor)
          }))
        }

        if (this.state.operacion == "-"){
          this.setState((state) => ({
            valor: parseFloat(state.memoria) - parseFloat(state.valor)
          }))
        }

        if (this.state.operacion == "x"){
          this.setState((state) => ({
            valor: parseFloat(state.memoria) * parseFloat(state.valor)
          }))
        }

        if (this.state.operacion == "/"){
          this.setState((state) => ({
            valor: parseFloat(state.memoria) / parseFloat(state.valor)
          }))
        }

      }

      this.limpiarOperacion()

    }

    if(id=="."){
      console.log("PUNTO")
      this.setState((state) => ({
        valor: state.valor + id
      }))
    }

    if(id=="1" || id=="2" || id=="3" || id=="4" || id=="5" || id=="6" || id=="7" || id=="8" || id=="9" || id=="0" ){
      console.log(id)
      this.setState((state) => ({
        valor: state.valor + id,
      }))
    }

    if(id=="clear"){
      this.state.valor = ""
      this.state.memoria = ""
      this.state.operacion = ""

      this.limpiar()
      this.limpiarMemoria()
      this.limpiarOperacion()

      console.log("valor:", this.state.valor)
      console.log("memoria:", this.state.memoria)
      console.log("operacion:", this.state.operacion)
    }

    
  }

  limpiar(){
    this.setState((state) =>({
      valor: ""
    }))
  }

  limpiarMemoria(){
    this.setState((state) => ({
      memoria: ""
    }))
  }

  limpiarOperacion(){
    this.setState((state) =>({
      operacion: ""
    }))
  }

  
  render(){
    return(
      <div className="gridParent">
        <Result data={this.state.valor}/>
        <div className="wrapper">
          <Boton id={"boton7"} valor={"7"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton8"} valor={"8"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton9"} valor={"9"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton/"} valor={"/"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton4"} valor={"4"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton5"} valor={"5"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton6"} valor={"6"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"botonx"} valor={"x"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton1"} valor={"1"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton2"} valor={"2"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton3"} valor={"3"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton+"} valor={"+"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton."} valor={"."} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton0"} valor={"0"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton="} valor={"="} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"boton-"} valor={"-"} onClick={this.handleClick.bind(this)} ></Boton>
          <Boton id={"clear"} width={"300px"} valor={"clear"} onClick={this.handleClick.bind(this, "clear")} ></Boton>

        </div>
      </div>
    )
  }
};