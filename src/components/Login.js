import React from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

class Login extends React.Component{
    state = {
        credentials: {
            username: '',
            password:''
        }
    };

    handleChange = e => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
          }
        });
      };

    login = e => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', this.state.credentials)
        .then(res=> {
            const { token } = res.data;
            localStorage.setItem("token", token);
            this.props.history.push('/friends');
        })
        .catch(err => {
            console.log(err);
        })
        // localStorage.removeItem("token")
    }

    render (){
        return (
            <div className="login">
            <h1>LOGIN</h1>
            <form className="loginInputs" onSubmit={this.login}>
                <p>USERNAME</p>
                <input
                    type="text"
                    name="username"
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <p>PASSWORD</p>
                <input
                    type="password"
                    name="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
                <button>SUBMIT</button>
            </form>
            </div>
        )
    }
}

export default Login;