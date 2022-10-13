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
                setMessage(err.response.data.error)
            })
    }

    return (
        <div>
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
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
                    <button>Log in!</button>
                </div>
                <Link to={'/signup'}>Sign Up</Link>
            </form>
        </div>
    );
}

export default LoginPage;