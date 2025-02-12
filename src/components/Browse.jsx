import Header from "../components/Header";
import useNowPlaying from "../hooks/useNowPlaying";
import PrimaryCont from "./PrimaryCont";
import SecondaryCont from "./SecondaryCont";

const Browse = () => {
    useNowPlaying();
    
    return (
        <>
            <Header />
            <PrimaryCont />
            <SecondaryCont />
        </>
    );
};

export default Browse;