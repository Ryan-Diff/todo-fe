import React, { Component } from 'react'

export default class HomePage extends Component {
    state = {
        todos: [],
    }

    componentDidMount = async () => {
        if (!this.props.token) {
          this.props.history.push('/login');
        } 
    }
    render() {
        return (
            <div>
                Hey its time to pretend you're not procrastinating! 
            </div>
        )
    }
}