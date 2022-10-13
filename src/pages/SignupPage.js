import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/auth.context'

function SignupPage() {

    const { storeToken, authenticateUser, setMessage } = useContext(AuthContext)

    const navigate = useNavigate();

    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: ''
    });

    const updateState = event => setState({
        ...state,
        [event.target.name]: event.target.value
    })

    const handleSubmit = event => {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, state)
            .then(res => {
                console.log(res.data);
                storeToken(res.data.authToken);
                authenticateUser();
                setMessage(`Welcome ${res.data.username}`)
                // navigate('/login');
            })
            .catch(err => {
                console.log(err)
                setMessage('username already exists')
                setInterval(() => setMessage(''), 30000)
            })
    }

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        name='firstName'
                        value={state.firstName}
                        onChange={updateState}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        name='lastName'
                        value={state.lastName}
                        onChange={updateState}
                    />
                </div>
                <div>
                    <label>Username</label>
                    <input
                        name='username'
                        value={state.username}
                        onChange={updateState}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        name='password'
                        type='password'
                        value={state.password}
                        onChange={updateState}
                    />
                </div>
                <div>
                    <button>Sign Up!</button>
                </div>
                <Link to={'/login'}>Log In</Link>
            </form>
        </div>
    );
}

export default SignupPage;