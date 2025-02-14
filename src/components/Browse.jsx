import Header from "../components/Header";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import PrimaryCont from "./PrimaryCont";
import SecondaryCont from "./SecondaryCont";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
    const gptSearchView = useSelector((store) => store.gptSearch.gptSearchToggle);

    useNowPlaying();
    usePopular();
    useTopRated();
    useUpcoming();
    
    return (
        <>
            <Header />
            {
                gptSearchView ? <GPTSearch /> : (
                    <>
                        <PrimaryCont />
                        <SecondaryCont />
                    </>
                )
            }
        </>
    );
};

export default Browse;