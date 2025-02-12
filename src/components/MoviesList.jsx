import MovieCard from "./MovieCard";

const MoviesList = ({title, moviesData}) => {
    if(!moviesData) return;

    return (
        <div className="pb-[3rem] mx-[0.7rem] z-[10]">
            <h1 className="text-4xl text-white font-semibold mb-[1rem]">{title}</h1>
            <div className="flex overflow-scroll gap-[10px] pb-2 [&::-webkit-scrollbar]:h-[0px]">
                {
                    moviesData.results.map((el) => <MovieCard baseData={el} key={el.id} />)
                }
            </div>
        </div>
    )
}; 

export default MoviesList;