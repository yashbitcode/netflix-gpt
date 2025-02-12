import { useDispatch } from "react-redux";
import { API_KEY } from "../utils/constants";
import { addPrimaryMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePrimaryTrailer = (movieId) => {
    const dispatch = useDispatch();

    const fetchTrailer = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
        const data = await response.json();

        const allTrailers = data.results.filter((el) => el.type === "Trailer");
        const trailer = allTrailers.length ? allTrailers[0] : data.results[0];

        dispatch(addPrimaryMovieTrailer(trailer?.key));
    };

    useEffect(() => {
        fetchTrailer();
    }, []);
}

export default usePrimaryTrailer;