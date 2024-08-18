import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import Sidebar from "../../components/SideBar/sidebar";
import DetailMovieCard from "../../components/DetailMovieCard/detailMovieCard";
const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetailPage = () => {
  const params = useParams();
  const param = params.id;
  const [isLoading, setIsLoading] = useState(false);
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://www.omdbapi.com/?i=${param}&apikey=${apiKey}`);
        const json = await res.json();
        setMovieData(json);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    }

    if (param) {
      fetchData();
    }
  }, [param]);

  return (
    <div className="container">
      {
        isLoading ? <PulseLoader className="loading" size={10} /> : (
          <>
            {movieData && <Sidebar title={movieData.Title} />}
            <div className="rightContainer">
              <div className="innerContainer">
                {movieData && <DetailMovieCard movie={movieData} />}
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}

export default MovieDetailPage;
