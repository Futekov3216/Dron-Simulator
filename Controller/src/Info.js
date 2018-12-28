import React, { Component } from 'react';

class Info extends Component {
    constructor(props){
        super(props)

    }
    render(){
        return (
            <div className="wrapperInfo">
                <h1> UP: {this.props.up}</h1>
                <h1> forrward: {this.props.forrward}</h1>
                <h1> position: {this.props.position}</h1>
            </div>
        )
    }
}
export default Info;