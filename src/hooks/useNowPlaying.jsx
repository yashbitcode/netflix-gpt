import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/moviesSlice";

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await response.json();

        dispatch(addNowPlaying(data));
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useNowPlaying;