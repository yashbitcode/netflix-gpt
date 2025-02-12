import Header from "../components/Header";
import useNowPlaying from "../hooks/useNowPlaying";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";
import PrimaryCont from "./PrimaryCont";
import SecondaryCont from "./SecondaryCont";

const Browse = () => {
    useNowPlaying();
    usePopular();
    useTopRated();
    useUpcoming();
    
    return (
        <>
            <Header />
            <PrimaryCont />
            <SecondaryCont />
        </>
    );
};

export default Browse;