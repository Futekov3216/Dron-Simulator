import React, { Component } from 'react';
import drone from './images/drone.png'


class Drone extends Component {
    constructor(props) {
        super(props)
        this.state = {
        
        }
    }
    render() {
        return (
           <div> 
            <div className="commandsOutput">
                    <h1>ROTATE 90C {JSON.stringify(this.props.leftRotate)}</h1>
                    <h1>forrward {JSON.stringify(this.props.forrward)}</h1>
            </div>
            <div className="drone">
                    <img src={drone} style={{ transform: `rotate(${-1 * this.props.leftRotate}deg) `}} />
            </div>
           </div> 
        )
    }
}
export default Drone;
