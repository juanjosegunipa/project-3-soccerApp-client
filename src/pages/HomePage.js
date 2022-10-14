// import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'
import { useState, useEffect } from 'react';
import axios from 'axios';

function HomePage() {

    const [usersArray, setUserArray] = useState([]);

    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/`)
            .then(res => setUserArray(res.data.foundUsersArray))
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {user && (
                <>
                    <p>hey, {user.firstName}!</p>
                    {/* <p>You have {user.points} points</p> */}
                </>
            )}
            <h1>Soccer pool</h1>
            <h2>In this page you can guess all the results of the soccer World Cup games, the user with the most points wins.</h2>
            {/* {usersArray.map(e => {
                return (
                    <div>
                        <h2>{e.firstName} {e.lastName} Points: {e.points}</h2>
                    </div>
                );
            })} */}

        </>
    );
}

export default HomePage