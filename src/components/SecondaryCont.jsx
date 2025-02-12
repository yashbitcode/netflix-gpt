import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryCont = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black p-1">    
            <div className="bg-transparent mt-[-13rem]">
                <MoviesList title={"Now Playing"} moviesData={movies.nowPlaying} />
                <MoviesList title={"Top Rated"} moviesData={movies.topRated} />
                <MoviesList title={"Popular"} moviesData={movies.popular} />
                <MoviesList title={"Upcoming"} moviesData={movies.upcoming} />
            </div>
        </div>
    );
};

export default SecondaryCont;