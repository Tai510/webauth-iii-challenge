import React from 'react';
import axios from 'axios';
import './Login.css'

class LogIn extends React.Component {
state = {
    username: '',
    password: '',
}

handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/login';
    axios
     .post(endpoint , this.state)
     .then( res => {
         console.log('RESPONSE' , res.data);
         localStorage.setItem('jwt', res.data.token);
        //  this.props.history.push('/users')
     })
     .catch(error => {
         console.error('ERROR', error);
     })
}
  

    render() {
        return (
            <div>
                <form
                 onSubmit={this.handleSubmit}
                 className='Login-form'>

                    <div>
                    <label
                     className='username-label'
                     htmlFor="username">UserName :</label>
                     <input
                     className='username'
                     id="username"
                     value={this.state.username}
                     onChange={this.handleInputChange}
                     type="text"
                     />   
                    </div>

                    <div>
                    <label className='password-label'
                     htmlFor="password">Password :</label>
                    <input
                     className='password'
                     id="password"
                     value={this.state.password}
                     onChange={this.handleInputChange}
                     type="password"
                     />
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </form>
               
            </div>
        )
    }
}



export default LogIn