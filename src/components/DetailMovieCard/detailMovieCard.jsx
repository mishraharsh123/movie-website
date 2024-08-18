import './detailMovieCard.css';

const DetailMovieCard = ({ movie }) => {
    return (
        <div className="detailMovieCard">
            <img className="moviePoster" src={movie.Poster} alt={movie.Title} />
            <div className="movieDetails">
                <h2>{movie.Title}</h2>
                <p><strong>Year:</strong> {movie.Year}</p>
                <p><strong>Actors:</strong> {movie.Actors}</p>
                <p><strong>Country:</strong> {movie.Country}</p>
                <p><strong>Type:</strong> {movie.Type}</p>
                <p><strong>Plot:</strong> {movie.Plot}</p>
                <p><strong>Writer:</strong> {movie.writer}</p>
            </div>
        </div>
    )
}

export default DetailMovieCard;
