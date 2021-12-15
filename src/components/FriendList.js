import React from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import axiosWithAuth from './axiosWithAuth';

class FriendList extends React.Component{
    state = {
        friends:[]
    }

    componentDidMount() {
        const token = localStorage.getItem("token");

        axiosWithAuth()
        .get('/friends')
        .then(res => {
            this.setState({
                friends: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    render (){
        return (
            <div className="friendList">
                <h2>Friendlist</h2>
                <ul>
                    {this.state.friends.map(friend => {
                        return <li key={friend.id}>{friend.name} - {friend.email}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default FriendList;