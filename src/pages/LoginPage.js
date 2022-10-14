import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/auth.context'

function LoginPage() {

    const { storeToken, authenticateUser, setMessage } = useContext(AuthContext)

    const navigate = useNavigate();

    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
    })

    const handleSubmit = event => {
        event.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, state)
            .then(res => {
                console.log(res.data);
                storeToken(res.data.authToken);
                authenticateUser();
            })
            .catch(err => {
                console.log(err)
                setMessage('invalid username or password')
                setInterval(() => setMessage(''), 30000)
            })
    }

    return (
        <div className='wrapper'>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit} className='auth-form'>
                <div>
                    {/* <label>Username</label> */}
                    <input
                        name='username'
                        value={state.username}
                        onChange={updateState}
                        placeholder='username'
                    />
                </div>
                <div>
                    {/* <label>Password</label> */}
                    <input
                        name='password'
                        type='password'
                        value={state.password}
                        onChange={updateState}
                        placeholder='password'
                    />
                </div>
                <div>
                    <button className='auth-button'>Log in!</button>
                </div>
                <div className='member'>
                    <p>Don't have an account? <Link to={'/signup'} className='auth-link'>Sign Up</Link></p>
                </div>

            </form>
        </div>
    );
}

export default LoginPage;