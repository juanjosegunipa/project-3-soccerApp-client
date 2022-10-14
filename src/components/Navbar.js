import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../contexts/auth.context'

function Navbar() {

    const { isLoggedIn, user, logOutUser } = useContext(AuthContext)

    return (
        <nav style={{ display: 'flex', justifyContent: 'space-evenly' }} className='navbar'>
            <Link to={'/'} className='nav-element'>Home</Link>
            <Link to={'/users'} className='nav-element'>User's predictions</Link>
            <Link to={'/results'} className='nav-element'>Games results</Link>
            {isLoggedIn && (
                <>
                    <Link to={'/prediction'} className='nav-element'>Make your prediction</Link >
                    <button onClick={logOutUser} className='nav-element'>Log Out</button>
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
                    <Link to={'/login'} className='nav-element'>Log In</Link>
                    <Link to={'/signup'} className='nav-element'>Sign Up</Link>
                </>
            )}


        </nav>
    );
}

export default Navbar;