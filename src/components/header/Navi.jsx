import { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';

function Navi() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token =
      localStorage.getItem('token') ||
      document.cookie.replace(
        /(?:(?:^|.*;\s*)jwtToken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );

    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setIsLoggedIn(true);
        setUserName(decodedToken.name || decodedToken.username || 'User');
      } catch (error) {
        console.error('Error decoding JWT:', error);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        navigate('/');
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');  // FIXED mismatch
    document.cookie = "jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <div className="z-10 fixed top-0 w-full bg-white border-b border-gray-200">
      <nav
        className="
          flex flex-col md:flex-row 
          md:items-center md:justify-between
          px-4 md:px-10 py-3
          bg-white text-black
        "
        style={{
          clipPath: 'polygon(0 0, 100% 0, 98% 85%, 2% 85%)',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            font-bold 
            text-xl sm:text-2xl md:text-3xl
            mb-2 md:mb-0
          "
        >
          ThoughtShare
        </Link>

        {/* Right side */}
        <div className="flex items-center space-x-4 text-sm sm:text-base">
          {isLoggedIn ? (
            <>
              <Link to="/dashboard" className="font-semibold">
                {userName}
              </Link>
              <button
                onClick={handleLogout}
                className="
                  px-4 py-2 
                  border border-gray-400 rounded-xl 
                  hover:bg-gray-100 transition
                  text-sm sm:text-base
                "
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="
                px-4 py-2 
                border border-gray-400 rounded-xl 
                hover:bg-gray-100 transition
                text-sm sm:text-base
              "
            >
              Sign in / up
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navi;
