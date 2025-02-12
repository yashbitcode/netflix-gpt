/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import usePrimaryTrailer from "../hooks/usePrimaryTrailer";

const PrimaryBgVideo = ({movieId}) => {
    usePrimaryTrailer(movieId);

    const trailerKey = useSelector((store) => store.movies.primaryMovieTrailer); 
    
    return (
        <div className="w-full aspect-video">
            <iframe className="w-full aspect-video pointer-events-none" src={`https://www.youtube.com/embed/${trailerKey}?controls=0&loop=1&autoplay=1&mute=1&si=UB71qaPT3VboRjU2`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    );  
};

export default PrimaryBgVideo;