import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryCont = () => {
    const movies = useSelector((store) => store.movies);

    return (
        <div className="bg-black p-1">    
            <div className="bg-transparent mt-[-13rem]">
                <MoviesList title={"Now Playing"} moviesData={movies.nowPlaying} />
                <MoviesList title={"Trending"} moviesData={movies.nowPlaying} />
                <MoviesList title={"Faster"} moviesData={movies.nowPlaying} />
                <MoviesList title={"Upcoming"} moviesData={movies.nowPlaying} />
            </div>
        </div>
    );
};

export default SecondaryCont;