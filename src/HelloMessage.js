import React, { Component } from 'react'

export default class HelloMessage extends Component {
    render() {
        return (
            <div>
                <h1 className = "text-center"> Good morning, {this.props.name}!</h1>
           </div>
        )
    }
}
