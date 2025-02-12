import LoginForm from "./LoginForm";
import Header from "../components/Header";
import { BASE_BG_IMG } from "../utils/constants";

const Login = () => {
    return (
        <>
            <Header />
            <div className="absolute top-0 z-[-10]">
                <img className="brightness-50" src={BASE_BG_IMG} alt="bg-img" />
            </div>
            <div className="flex w-full justify-center">
                <LoginForm />
            </div>
        </>
    );
};

export default Login;