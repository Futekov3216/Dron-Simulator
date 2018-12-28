import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import Drone from './Drone'
import buttonsJson from './buttons.js'

const endpoint = "http://localhost:3001";
const socket = socketIOClient(endpoint);

class App extends Component {
  constructor(){
    super()
    this.state = {
      response: false,
      leftRotate:90,
      forrward:2,
      mLeft: 20,
      up:20,
      controllerCommands: [
        this.LeftR, // rotate 90
        this.forrward, // move forrward
        null, // rotate 15
        this.moveLeft, // move left
        this.up, // move up 
        null, //move right
        null, //move down
        null, // take off
        null, // land
      ]
    }
  }
  componentDidMount(){
    socket.on("data", data => {
    this.setState({
       response: data
      })
    });
  }

  LeftR = async () => {
    await socket.emit('leftR', this.state.leftRotate);
    await socket.on('leftR', leftR => {
      leftR += 90 
      this.setState({
        leftRotate: leftR
      })
    })
  }

  forrward = async () => {
    await socket.emit('forrward', this.state.forrward);
    await socket.on('forrward', forrward => {
      forrward += 1
      this.setState({
        forrward: forrward
      })
    })
  }

  up = async () => {
    await socket.emit('up', this.state.up);
    await socket.on('up', up => {
      up = 20
      this.setState({
        up: up
      })
    })
  }

  moveLeft = async () => {
    await socket.emit('mLeft', this.state.mLeft);
    await socket.on('mLeft', mLeft => {
      mLeft += 20
      this.setState({
        mLeft: mLeft
      })
    })
  }


        
  buttons = () => {
    return buttonsJson.map((res, index) => {
      return <button key={index} className={res.class} onClick={this.state.controllerCommands[index]}><span className={res.sclass}>{res.stitle}</span>{res.title}</button>
    })
  }
  
  render() {
    const { response } = this.state;
    return (
      <div className="App">
        <h1>{response ? "CONNECTED" : "DISCONNECTED"}</h1>
         <div className="commandGrid">{this.buttons()}</div>
        {/* <Drone data={this.state.response} leftRotate={this.state.leftRotate} up={this.state.up} forrward={this.state.forrward}/> */}
      </div>
    );
  }
}

export default App;
