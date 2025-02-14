import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/moviesSlice";

const useTopRated = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        
        const data = await response.json();

        dispatch(addTopRated(data));
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useTopRated;