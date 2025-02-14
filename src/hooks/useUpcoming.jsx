import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";

const useUpcoming = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector((store) => store.movies.upcoming);

    useEffect(() => {
        !upcoming && fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await response.json();

        dispatch(addUpcoming(data));
    };
};

export default useUpcoming;