import { useRef, useState } from "react";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, debugErrorMap, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { DEFAULT_PROFILE_AVATAR } from "../utils/constants";

const LoginForm = () => {
    const dispatch = useDispatch();

    const [signSet, setSignSet] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const fullname = useRef(null);

    const handleClick = () => {
        const fullnameField = fullname?.current?.value;
        const emailField = email.current.value;
        const passwordField = password.current.value;

        // const msg = validate(emailField, passwordField);
        // setErrorMsg(msg);

        // if(msg) return;
        
        if(!signSet) {
            createUserWithEmailAndPassword(auth, emailField, passwordField)
            .then((userCredential) => {
                const user = userCredential.user;

                updateProfile(user, {
                    displayName: fullnameField,
                    photoURL: DEFAULT_PROFILE_AVATAR
                }).then(() => {
                    const {uid, email, displayName, photoURL} = user; 
                    dispatch(addUser({uid, email, displayName, photoURL}));
                }).catch((error) => {
                    setErrorMsg(error.message);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                setErrorMsg(errorCode + ": " + errorMessage);
            });
        }
        else {
            signInWithEmailAndPassword(auth, emailField, passwordField)
                .then((userCredential) => {

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    setErrorMsg(errorCode + ": " + errorMessage);
                });
            
        }
    }

    return (
        <div className="rounded-[5px] bg-[#000000cc] text-white mt-[5rem] p-[40px] w-full max-w-[500px]">
            <h1 className="text-4xl mb-[2rem]">{signSet ? "Sign In" : "Sign Up"}</h1>
            <form className="flex flex-col gap-[20px]" onSubmit={(e) => e.preventDefault()}>
                {
                    !signSet && (
                        <input ref={fullname} className="rounded-[5px] border p-[15px] text-xl outline-0" type="text" placeholder="Full Name" />
                    )
                }
                <input ref={email} className="rounded-[5px] border p-[15px] text-xl outline-0" type="email" placeholder="Email" />
                <input ref={password} className="rounded-[5px] border p-[15px] text-xl outline-0" type="password" placeholder="Password" />
                <p className="text-red-500 text-xl font-semibold">{errorMsg}</p>
                <button className="rounded-[5px] w-full p-[10px] bg-red-600 text-[1.3rem] cursor-pointer" onClick={handleClick}>{signSet ? "Sign In" : "Sign Up"}</button>
            </form>
            <p className="text-xl mt-[1.2rem]">{!signSet ? "Have Account? " : "New To Netflix? "}<span className="font-bold hover:underline cursor-pointer" onClick={() => setSignSet(!signSet)}>{!signSet ? "Sign in now" : "Sign up now"}</span></p>
        </div>
    );
};

export default LoginForm; 