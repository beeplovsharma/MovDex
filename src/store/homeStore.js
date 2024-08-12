import { create } from "zustand";

const homeStore = (set) => ({
  urls: {},
  backgroundImg: '',
  genres:{},
  addMovies: (urls) => {
    set((state) => ({
      urls: {
        urls,
      },
    }));
  },
  addImage: (url) => {
    set((state) => ({
      backgroundImg: url,
    }));
  },
  addGenres: (genres) => {
    set((state) => ({ genres }));
  },
});

const useHomeStore = create(homeStore);
export default useHomeStore;
