import React, { Component } from 'react';

class Status extends Component {
    constructor() {
        super();
        this.state = {
            message: "Good Execution Status"
        }
    }
    changeMessage() {
        this.setState({ message: "Nice Example Status" })
    }
    render() {
        return (
            <div>
                <h2>{ this.state.message }</h2>
                <button onClick={ () => this.changeMessage() }>Click me</button>
            </div>
        );
    }
}
export default Status;