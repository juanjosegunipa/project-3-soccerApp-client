import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>User's predictions</Link>
            <Link to={'/results'}>Games results</Link>
            {isLoggedIn && (
                <>
                    <Link to={'/prediction'}>Make your prediction</Link >
                    <button onClick={logOutUser}>Log Out</button>
                </>
            )}
            {/* {user && (
                <>
                    <p>hey, {user.firstName}!</p>
                    <p>You have {user.points} points</p>
                </>
            )} */}
            {!isLoggedIn && (
                <>
                    <Link to={'/login'}>Log In</Link>
                    <Link to={'/signup'}>Sign Up</Link>
                </>
            )}


        </nav>
    );
}

export default Navbar;