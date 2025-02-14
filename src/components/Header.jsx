import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged  } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSearchSlice";

const Header = () => {
    const userAvatar = useSelector((store) => store.user?.photoURL);
    const gptSearchView = useSelector((store) => store.gptSearch.gptSearchToggle);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGptSearch = () => dispatch(toggleGptSearch());

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user) {
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid, email, displayName, photoURL}));
                console.log("user is there");
                navigate("/browse");
            }
            else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        
        return () => unsubscribe();
    }, []);
    
    return (
        <div className="flex items-center justify-between px-[1rem] bg-gradient-to-b from-black z-[10]">
            <div className="w-[200px]">
                <img src={LOGO} alt="netflix" />
            </div>

            {
                auth.currentUser && (
                    <>
                        <button className="font-semibold text-xl text-white py-2.5 px-5 bg-purple-400 rounded-[5px]" onClick={handleGptSearch}>
                            {
                                !gptSearchView ? "GPT Search" : "HomePage"
                            }
                        </button>
                        
                        <div className="flex gap-[10px] items-center">
                            <div className="w-[40px]">
                                <img className="w-full" src={userAvatar} />
                            </div>
                            <button className="bg-white rounded-[5px] text-[1.1rem] p-[8px]" onClick={() => {
                                signOut(auth);
                            }}>Sign Out</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Header;