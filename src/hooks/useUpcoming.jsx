import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/moviesSlice";
import { API_KEY } from "../utils/constants";

const useUpcoming = () => {
    const dispatch = useDispatch();

    const fetchData = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`);
        const data = await response.json();

        dispatch(addUpcoming(data));
    };

    useEffect(() => {
        fetchData();
    }, []);
};

export default useUpcoming;