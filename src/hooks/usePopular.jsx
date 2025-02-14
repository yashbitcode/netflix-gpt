import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/moviesSlice";

const usePopular = () => {
    const dispatch = useDispatch();
    const popular = useSelector((store) => store.movies.popular);

    useEffect(() => {
        !popular && fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`);
        const data = await response.json();

        dispatch(addPopular(data));
    };
};

export default usePopular;