import { useSelector } from "react-redux";
import PrimaryBgVideo from "./PrimaryBgVideo";

const PrimaryCont = () => {
    const nowPlaying = useSelector((store) => store.movies?.nowPlaying);
    if(!nowPlaying) return;

    const topMovie = nowPlaying.results[0];
    const {original_title, overview, id} = topMovie;

    return (
        <div className="relative mt-[-12rem] z-[-1]">
            <div className="flex flex-col gap-[18px] w-full h-full justify-center pl-[2.5rem] bg-gradient-to-r from-black absolute text-white max-w-[500px] mt-[-3rem]">
                <h1 className="text-[2rem] font-semibold">{original_title}</h1>
                <p>{overview}</p>

                <div className="flex gap-[14px]">
                    <button className="py-[10px] px-[30px] rounded-[5px] font-semibold text-[1.3rem] bg-white text-black">Play</button>
                    <button className="py-[10px] px-[30px] rounded-[5px] font-semibold text-[1.3rem] bg-[#c4c4d844]">More Info</button>
                </div>
            </div>
            <PrimaryBgVideo movieId={id} />
        </div>
    )
};

export default PrimaryCont;