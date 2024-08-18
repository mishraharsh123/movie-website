import { useEffect, useState } from "react";
import searchIcon from "../../assets/search-icon.svg";
import Sidebar from "../../components/SideBar/sidebar";
import TopContainer from "../../components/TopContainer/topContainer";
import './home.css';
import { PulseLoader } from "react-spinners";
import MovieCard from "../../components/MovieCard/movieCard";
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify';

const apiKey = import.meta.env.VITE_API_KEY;

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  const handleSearch = async () => {
 
    try {
      setIsLoading(true);
      const res = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${apiKey}`);
      const json = await res.json();
      setData(json.Search);
      setIsLoading(false);
      
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }
  
  useEffect(()=>{
    handleSearch()
  },[searchQuery])

  return (
    <div className="container">
      <Sidebar title="Home Page" />
      <div className="rightContainer">
        <div className="innerContainer">
          <TopContainer title="Home Page" />
          <div className="searchContainer">
            <img className="searchIcon" src={searchIcon} alt="search icon" />
            <input
              className="searchBox"
              type="text"
              placeholder="Search for the movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch} className="searchBtn">Search</button>
          </div>

          <div className="movieOuterContainer">
            {
              !data ?
                <h3 className="headingAlignment">Movie not found</h3> : (
                  !data.length ?
                    <h3 className="headingAlignment">Search for the movies...</h3> : (
                      isLoading ? <PulseLoader className="loading" size={10} /> : (
                        data.map((movie, i) => (
                          <MovieCard key={i} movie={movie} path={path} />
                        ))
                      )
                    )
                )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
