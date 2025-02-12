import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/moviesSlice";
import { API_KEY } from "../utils/constants";

const useTrending = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
        const data = await response.json();

        dispatch(addNowPlaying(data));
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useTrending;