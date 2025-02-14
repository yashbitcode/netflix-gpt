import { useRef } from "react";
import gemini from "../../gemini";
import { useDispatch, useSelector } from "react-redux";
import gptQuery from "../utils/gptQuery";
import { addQueryResult } from "../utils/gptSearchSlice";
import MoviesList from "./MoviesList";

const GPTSearch = () => {
    const searchQueryRef = useRef(null);
    const dispatch = useDispatch();
    const queryResult = useSelector((store) => store.gptSearch.queryResult);
    const moviesList = useSelector((store) => store.gptSearch.moviesList);

    const handleGPTQuery = async () => {
        const searchQuery = `give me the string of 5 names of movies of this given query comma separated: "${searchQueryRef.current.value}", ignore words like tv series, shows, etc you just have to give movies name nothing else, and return empty string if you doesn't understand the query`;

        const res = await gemini(searchQuery);
        const result = res.response.text();

        const moviesList = result.split(",");

        const promisesArr = gptQuery(moviesList);
        Promise.all(promisesArr).then(moviesResult => dispatch(addQueryResult({moviesList, moviesResult})));
    };

    return (
        <div className="w-full pt-[2rem] bg-black">
            <form className="mx-auto bg-gray-700 p-[10px] w-full max-w-[700px] gap-[10px] flex" onSubmit={(e) => e.preventDefault()}>
                <input type="text" className="p-[10px] text-xl outline-0 bg-white w-full" placeholder="What Would You Like To Search?" ref={searchQueryRef} />

                <button className="bg-red-500 py-[10px] px-[20px] text-white text-xl font-semibold" onClick={handleGPTQuery}>Search</button>
            </form>

            <div>
                {
                    queryResult && (
                        queryResult.map((el, idx) => {
                            if(!el.results.length) return;
                            return (
                                <MoviesList title={moviesList[idx]} key={idx} moviesData={el}/>
                            );
                        })
                    )
                }
            </div>
        </div>
    );
}

export default GPTSearch;