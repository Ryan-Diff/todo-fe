import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    state = {
        todos: [],
    }

    // componentDidMount = async () => {
    //     if (!this.props.token) {
    //       this.props.history.push('/login');
    //     } 
    // }
    render() {
        return (
            <div>
                Hey its time to pretend you're not procrastinating! Sign in or sign up to get started.
                <Link to='/login'>Log in or Sign up</Link>
            </div>
        )
    }
}