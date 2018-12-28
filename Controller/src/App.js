import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import './App.css';
import buttonsJson from './buttons.js'

const endpoint = "http://10.10.0.239:3001";
const socket = socketIOClient(endpoint);

class App extends Component {
  constructor(){
    super()
    this.state = {
      land:{
        leftRotate: 0,
        rightRotate: 0,
        forrward: 2,
        mLeft: 0,
        up: 0,
      },
      response: false,
      leftRotate: 0,
      forrward:2,
      back:-2,
      mLeft: 0,
      up:20,
      controllerCommands: [
        this.Rotate, // rotate 90
        this.forrward, // move forrward
        this.Rotate, // rotate 15
        this.Sideways, // move left
        this.up, // move up 
        this.Sideways, //move right
        this.back, //move down
        null, // take off
        this.Land, // land
      ],
      latitude:'',
      longitude:''
    }
  }
  componentDidMount(){
    socket.on("data", data => {
    this.setState({
       response: data
      })
    });
  }

  Rotate = async (e) => { // ROTATIONS
    let target = await e.target.getAttribute('index')
    var leftRotate = await Number(target === "360" ? 360 : -360);
    var result = this.state.leftRotate + leftRotate
    await socket.emit('leftR', result);
    await socket.on('leftR', async leftR => {
     await this.setState({
       leftRotate: leftR,
      })
    })
    console.log(" UIBHFAOUSH OIA",this.state.leftRotate)
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


  back = async () => {
    await socket.emit('forrward', this.state.back);
    await socket.on('forrward', forrward => {
      forrward -= 1
      this.setState({
        forrward: forrward
      })
    })
  }

  up = async () => {
    await socket.emit('up', this.state.up);
    await socket.on('up', up => {
      up += 20
      this.setState({
        up: up
      })
    })
  }

  Sideways = async (e) => {
    let target = await e.target.getAttribute('index')
    var leftRotate = await Number(target === "left" ? 20 : -20);
    var result = this.state.mLeft + leftRotate
    await socket.emit('mLeft', result);
    await socket.on('mLeft', async mLeft => {
      await this.setState({
        mLeft: result
      })
    })
  }

  Land = async () => {
    await socket.emit('land', this.state.land);
    await socket.on('land', land => {
     
      this.setState({
        leftRotate: 360,
        rightRotate: -360,
        forrward: 2,
        mLeft: 20,
        up: 20,
      })
    })
  }

  showPosition = (position) => { // for laptops 
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })
    console.log(this.state.latitude)
  }

  error = (err) => {
    alert(err)
  }

  location = () => {
   navigator.geolocation.getCurrentPosition(this.showPosition, this.error);
  }


        
  buttons = () => {
    return buttonsJson.map((res, index) => {
      return <button key={index} className={res.class} index={res.title} onClick={this.state.controllerCommands[index]}><span className={res.sclass}>{res.stitle}</span>{res.title}</button>
    })
  }
  
  render() {
    const { response } = this.state;
    return (
      <div className="App">
        {/* <button onClick={this.location}>location</button> */}
        {/* {this.location()} */}
        {/* <h1>latitude {this.state.latitude}</h1>
        <h1>longitude {this.state.longitude}</h1> */}
        <h1>{response ? "CONNECTED" : "DISCONNECTED"}</h1>
         <div className="commandGrid">{this.buttons()}</div>
        {/* <Drone data={this.state.response} leftRotate={this.state.leftRotate} up={this.state.up} forrward={this.state.forrward}/> */}
      </div>
    );
  }
}

export default App;
