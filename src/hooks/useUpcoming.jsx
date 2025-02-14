import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await response.json();

        dispatch(addUpcoming(data));
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useUpcoming;