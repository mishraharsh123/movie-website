import { create } from 'zustand';

const useStore = create((set) => ({
  watchlist: [],
  addToWatchlist: (movie) => set((state) => {
    const movieExists = state.watchlist.some(w => w.imdbID === movie.imdbID);
    if (!movieExists) {
      return { ...state, watchlist: [...state.watchlist, movie] };
    }
    return state;
  }),
  removeFromWatchlist: (id) => set((state) => ({
    watchlist: state.watchlist.filter(movie => movie.imdbID !== id)
  }))
}));

export default useStore;
