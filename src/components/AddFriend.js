import React from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

class AddFriend extends React.Component{
    state = {
        friends: {
            name:'',
            email:''
        }
    }

    handleChange = e => {
        console.log('e.name', e.target.name)
        console.log('e.value', e.target.value)
        this.setState({
          friends: {
            ...this.state.friends,
            [e.target.name]: e.target.value
          }
        });
      };

    addFriend = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/friends', this.state.friends)
        .then(res => {
            console.log('post res',res)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    render (){
        return (
            <div className="addFriend">
            <h1>ADD FRIEND</h1>
            <form className="addFriendInputs" onSubmit={this.addFriend}>
                <p>FRIEND NAME</p>
                <input
                    type="text"
                    name="name"
                    value={this.state.friends.name}
                    onChange={this.handleChange}
                />
                <p>FRIEND EMAIL</p>
                <input
                    type="email"
                    name="email"
                    value={this.state.friends.email}
                    onChange={this.handleChange}
                />
                <button>SUBMIT</button>
            </form>
            </div>
        )
    }
}

export default AddFriend;