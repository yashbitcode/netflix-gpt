import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/moviesSlice";
import { API_KEY } from "../utils/constants";

const usePopular = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
        const data = await response.json();

        dispatch(addPopular(data));
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default usePopular;