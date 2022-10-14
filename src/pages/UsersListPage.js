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
            {usersArray.map(e => {
                return (
                    <div>
                        <h2 style={{ color: 'white' }}>{e.firstName} {e.lastName}'s <Link to={`/prediction/${e.prediction}`} style={{ color: 'white' }}>Predictions</Link></h2>
                    </div>
                );
            })}
        </div>
    );
}

export default UserListPage;