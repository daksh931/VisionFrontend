import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setToken, setUserData } from "../../store/Slices/authSlice";
import { BorderBeam } from "./MagicUI/borderbeam";
import { toast } from "react-toastify";


export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { token, userData } = useSelector((state) => state.auth);
  const handleLogin = async (e) => {
    e.preventDefault();

    console.log(email, password)
    const logindata = {
      email: email,
      password: password,
    }

    try{

    const response = await axios.post(import.meta.env.VITE_BACKEND_URL + "/api/v1/user/login",
      JSON.stringify(logindata),
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }).then((res) => {
        console.log(res.data.user)

        dispatch(setToken(JSON.stringify(res.data.token)))
        localStorage.setItem("token", JSON.stringify(res.data.token))

        // console.log(res.data.user)
        dispatch(setUserData(res.data.user))
        localStorage.setItem("user", JSON.stringify(res.data.user))

      })

    // console.log(res.data.token)
    // console.log(loginData)
    // console.log("Success Login")
    toast.success("Login Sucess");
    return navigate('/')
  }
  catch(error){
    toast.error("Something went wrong...")
  }
  }

  {/* <div class="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */ }
  return (
    <>
      <form method="post" onSubmit={handleLogin}>
        <div class=" flex flex-col top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">

        {/* <div className="login-container flex flex-col w-full min-h-[120vh] bg-slate-100"> */}


          <div className="relative self-center mt-12 shadow-xl  shadow-zinc-200 hover:shadow-zinc-300  rounded-md border-[1px] border-slate-200  min-h-96 min-w-80  bg-slate-50 p-4 font-semibold ">
            <h2 className="text-slate-700 text-center font-bold text-2xl ">
              Login Here
            </h2>

            <Input type={'email'} placeholder={"Email"} onChange={(e) => setEmail(e.target.value)} />
            <Input type={'password'} placeholder={"Password"} onChange={(e) => setPassword(e.target.value)} />

            <div className="pt-6">

              <div className="flex justify-center w-full ">
                <button type="submit"
                  className={`align-middle w-full min-h-8 duration-300 select-none font-serif font-thin text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md bg-zinc-950  text-white hover:text-gray-100 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-[1px] border-gray-500 mt-5 hover:border-gray-900 text-nowrap	 mx-2 `}
                > Login
                </button>
              </div>
              <div > <Link className="flex justify-center text-md text-zinc-900 hover:text-zinc-700 mt-7" to={'/forgotpassword'}> Forgot Password?</Link>
              </div>
            </div>
            <BorderBeam duration={5} size={200} />
          </div>
        </div>
      </form>
    </>
  );
}
