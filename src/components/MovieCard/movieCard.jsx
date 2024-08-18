import { BiBookmarkAlt } from 'react-icons/bi';
import { CgRemove } from 'react-icons/cg';
import { toast } from 'react-toastify';
import useStore from '../../store/store';
import './movieCard.css';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie, path }) => {
  const addToWatchList = useStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useStore((state) => state.removeFromWatchlist);
  const navigate = useNavigate();

  const handleAdd = () => {
    addToWatchList(movie);
    toast.success("Movie added to watchlist");
  };

  const handleRemove = () => {
    removeFromWatchlist(movie.imdbID);
    toast.success("Movie removed from watchlist");
  };

  const handleMoviePage = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className='movieCard'>
      <img className='movieImage' src={movie.Poster} alt="movie" onClick={handleMoviePage} />

      <h4>{movie.Title}</h4>

      <div className='addToList'>
        <p>{movie.Year}</p>
        {path === '/home' ? (
          <BiBookmarkAlt className='bookmark' onClick={handleAdd} />
        ) : (
          <CgRemove className='bookmark' onClick={handleRemove} />
        )}
      </div>
    </div>
  );
};

export default MovieCard;
