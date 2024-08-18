import { BiBookmarkAlt } from 'react-icons/bi';
import './topContainer.css';

const TopContainer = ({ title }) => {
  return (
    <div className="topContainer">
      <h2 className='topContainerHeading'>Welcome to <span style={{ color: "red" }}>{title}</span></h2>
      <div className='paraContainer'>
        <p className='para'>Browse movies, add them to watchlists and share them with friends.</p>
        <p className='para'>Just click the <BiBookmarkAlt /> button to add a movie to your watchlist, or click on the movie poster to see more details about it.</p>
      </div>
    </div>
  );
}

export default TopContainer;
