import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


function UserListPage() {

    const [usersArray, setUserArray] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/users`)
            .then(res => setUserArray(res.data.foundUsersArray))
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <h1>Click on any user to see their predictions</h1>
            {usersArray.map(e => {
                return (
                    <div>
                        <h2>{e.firstName} {e.lastName} Points: {e.points} <Link to={`/prediction/${e.prediction}`}>Predictions</Link></h2>
                    </div>
                );
            })}
        </div>
    );
}

export default UserListPage;