import { useState, useEffect } from 'react';
import { useNavigate, Link} from "react-router-dom";
import { jwtDecode } from 'jwt-decode'; // Import the jwtDecode function

function Navi() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
    const navigate = useNavigate();

  useEffect(() => {
    // Check for a JWT token in local storage or cookies
    const token = localStorage.getItem('token') || document.cookie.replace(/(?:(?:^|.*;\s*)jwtToken\s*=\s*([^;]*).*$)|^.*$/, "$1");

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsLoggedIn(true);
        setUserName(decodedToken.name || decodedToken.username || 'User'); // Adjust based on your payload
      } catch (error) {
        console.error('Error decoding JWT:', error);
        setIsLoggedIn(false); // Invalidate token if decoding fails
        localStorage.removeItem('token');
        navigate('/');
      }
    } else {
      setIsLoggedIn(false);
    }
  },[]);

  const handleLogout = () => {
    // Clear the JWT token from local storage and/or cookies
    localStorage.removeItem('jwtToken');
    document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    setUserName('');
    // Optionally redirect the user to the login page
    // window.location.href = '/login';
  };

  return (
    <>
    <div className='z-10 fixed top-0 w-full'>
      <nav className='text-black bg-white border-cyan-50 border-b-1
      items-center justify-between flex mx-[3vw] pb-[0.5vw]' style={{
        clipPath: 'polygon(0 0, 100% 0, 98% 85%, 2% 85%)',
      }}>
        <Link to="/"
          className="text-[2.2vw] pl-[3vw] m-[5px] font-bold ">
          ThoughtShare
        </Link>
        <div className='arvo-bold text-[12px] m-[5px] '>
          {isLoggedIn ? (
            <>
              <Link to='/dashboard'className='pr-2 mr-[1vw]'> {userName}</Link>
              <button onClick={handleLogout} className='p-[10px] mr-[3vw] border-[1px] rounded-2xl'>Logout</button>
            </>
          ) : (
            <Link to="/login" className='p-[0.5vw] border-[1px] rounded-2xl mr-[2vw]'>Sign in / up</Link>
          )}
        </div>
      </nav>
    </div>
    
    </>
  );
}

export default Navi;