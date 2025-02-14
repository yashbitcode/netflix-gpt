import { CARD_BASE_IMG, NO_IMG_BANNER } from "../utils/constants";

const MovieCard = ({baseData}) => {
    const {backdrop_path, original_title} = baseData;

    return (
        <div className="flex w-full min-w-[390px] max-w-[400px] rounded-[7px] relative overflow-hidden">
            <div className="absolute text-white bottom-[20px] left-[20px] z-[10]">
                <h1 className="text-2xl">{original_title}</h1>
            </div>
            <div className="w-full z-[5] h-full">
                {
                    backdrop_path ? <img className="w-full brightness-75" src={CARD_BASE_IMG + backdrop_path} alt="" /> : <div className="bg-gray-700 h-full"></div>
                }
            </div>
        </div>
    );
};

export default MovieCard;