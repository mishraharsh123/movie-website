import { Link, useLocation, useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = ({ title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const handleLogout = () => {
    localStorage.removeItem('email');
    navigate("/");
  };

  return (
    <div className='sidebar'>
      <h2 className='topHeading' style={{ color: "red" }}>{title}</h2>

      <div className='buttons'>
        <Link
          to='/home'
          className={`${path === '/home' ? "red" : ''} btn`}
        >
          Home
        </Link>

        <Link
          to='/watchlist'
          className={`${path === '/watchlist' ? "red" : ''} btn`}
        >
          My List
        </Link>
      </div>

      <button
        className='accountBtn'
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
