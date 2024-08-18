import { useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard/movieCard";
import Sidebar from "../../components/SideBar/sidebar";
import TopContainer from "../../components/TopContainer/topContainer";
import useStore from "../../store/store";

const WatchListPage = () => {
  const watchlist = useStore((state) => state.watchlist);
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="container">
      <Sidebar title="Watchlists" />
      <div className="rightContainer">
        <div className="innerContainer">
          <TopContainer title="Watchlists" />

          <div className="movieOuterContainer">
            {
              !watchlist.length ?
              <h3 className="headingAlignment">Nothing is present here</h3> : (
                watchlist.map((movie, i) => (
                  <MovieCard key={i} movie={movie} path={path} />
                ))
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchListPage;
