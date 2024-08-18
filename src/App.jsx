import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home/home';
import LoginPage from './pages/Login/login';
import WatchListPage from './pages/Watchlist/watchlist';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieDetailPage from './pages/MovieDetail/movieDetail';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const ProtectedRoute = ({ element }) => {
    if (isAuthenticated) {
      return element;
    } else {
      return <Navigate to="/" replace />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={<ProtectedRoute element={<HomePage />} />} />
        <Route path="/watchlist" element={<ProtectedRoute element={<WatchListPage />} />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
      <ToastContainer 
        autoClose={1500}
        transition={Bounce}
      />
    </BrowserRouter>
  );
}

export default App;
