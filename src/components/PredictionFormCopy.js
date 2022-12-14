import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/auth.context'

function PredictionFormCopy() {

    const { setMessage } = useContext(AuthContext)

    const navigate = useNavigate()

    const [state, setState] = useState({});

    const updateState = key => index => event => {
        const copyState = { ...state };
        copyState[key][index] = {
            ...copyState[key][index],
            score: {
                ...copyState[key][index].score,
                [event.target.name]: event.target.value
            }
        }
        setState(copyState);
    };

    const handleSubmit = event => {
        event.preventDefault();
        const copyState = { ...state }
        Object.keys(copyState).forEach(key => copyState[key].forEach(match => delete match.group));
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/prediction`, copyState, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }
        })
            .then(axiosRes => {
                console.log(axiosRes);
                navigate('/');
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                navigate('/');
                setMessage('You already made a prediction')
                setInterval(() => setMessage(''), 30000)

            })
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/matches/all`)
            .then(axiosRes => {
                const groupNames = axiosRes.data.matches.reduce((a, c) => {
                    if (c.stage === 'GROUP_STAGE' && !a.includes(c.group)) a.push(c.group);
                    return a;
                }, []);

                const groupNameKeys = groupNames.map(e => e.split('_')[0].toLowerCase() + e.split('_')[1])

                const groups = {};

                groupNameKeys.forEach((groupNameKey, i) => {
                    groups[groupNameKey] = axiosRes.data.matches.filter(e => e.group === groupNames[i]).map(e => ({ group: groupNames[i], homeTeam: e.homeTeam, awayTeam: e.awayTeam, score: { homeTeam: '', awayTeam: '' } }));
                });

                setState(groups);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <div className='group-container'>
                {
                    Object.keys(state).sort((a, b) => a.localeCompare(b)).map(k => {
                        return (
                            <div className='single-group'>
                                <div style={{ color: 'white', marginBottom: '10px' }}>{state[k][0].group.split('_').join(' ')}</div>
                                {
                                    state[k].map((e, i) => {
                                        return (
                                            <form style={{ marginBottom: '50px' }}>
                                                <label style={{ color: 'white' }}> {e.homeTeam.name} </label>
                                                <input type='number' name='homeTeam' className='pre-input' value={state[k][i].score.homeTeam} onChange={updateState(k)(i)} />
                                                <span style={{ color: 'white' }}> vs </span>
                                                <input type='number' name='awayTeam' className='pre-input' value={state[k][i].score.awayTeam} onChange={updateState(k)(i)} />
                                                <label style={{ color: 'white' }}> {e.awayTeam.name} </label>
                                            </form>
                                        );
                                    })
                                }
                            </div>
                        )
                    })
                }

            </div>
            <button onClick={handleSubmit} className='auth-button' style={{ width: '10%' }}>Submit predictions</button>
        </>
    )
}

export default PredictionFormCopy;