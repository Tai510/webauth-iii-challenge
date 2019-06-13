import React from 'react';
import axios from 'axios';
import '../auth/addInterceptors';
import requiresAuth from '../auth/requiresAuth';

class UserList extends React.Component {
    state = {
        users: [],
    };

    componentDidMount() {
        const endpoint = '/users';
        axios
        .get(endpoint)
        .then(res => {
            console.log('users', res.data);
            this.setState(() => ({ users: res.data }))
        })
        .catch(({ response }) => {
            console.log('users error', response)
        });
    }

    render() {
        return (
            <div>
                <h2>Our Users</h2>
                <ul>
                    {this.state.users.map(user => (
                        <li key={user.id}>{user.username}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default requiresAuth(UserList);