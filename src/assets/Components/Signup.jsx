import Input from "./ui/Input";
import Button from "./ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setToken, setUserData } from "../../store/Slices/authSlice";
import { useSelector } from "react-redux";
import { BorderBeam } from "./MagicUI/borderbeam";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";


export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name : "",
    email : "",
    phone : "",
    password : "",
    role : "user",
  }
  // const [name, setName] = useState();
  // const [email, setEmail] = useState();
  // const [phone, setPhoneNumber] = useState();
  // const [password, setPassword] = useState();
  // const [role, setRole] = useState("admin");

  // const { token, userData } = useSelector((state) => state.auth)

  const {values, handleBlur, handleSubmit, handleChange,errors,touched} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit: async (values) => {
      const signupData = {
        name: values.name,
        email: values.email,
        phone: values.phone,
        password: values.password,
        role: values.role
      }
      console.log(signupData)
     try{
  
      const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/v1/user/register',
        JSON.stringify(signupData),
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // help to set cookies in browser from backend server
        }).then((res) => {
          dispatch(setToken(res.data.token))
          localStorage.setItem("token", JSON.stringify(res.data.token))
  
          // console.log(res.data)
  
          dispatch(setUserData(res.data.user))
          localStorage.setItem("user", JSON.stringify(res.data.user))
        })
        
          toast.success("SignUp Success...")
      
        return navigate('/');
      }
      catch(error){
        toast.error("Something went wrong")
      }
  
    }
  })

  const handleRadioButton = (e) => {
    setRole(e);
  }
  // console.log(role)

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // console.log(name, email, phone, password, role);
  //   console.log("signup worked")
  //   if (!name || !email || !phone || !password || !role) {
  //     alert("Fields should not be empty")
  //   }
  //   if (password && password.length < 8) {
  //     alert("Password should contain atleast 8 letters")
  //   }

  //   const signupData = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     password: password,
  //     role: role
  //   }
  //   // console.log(signupData)
  //  try{

  //   const response = await axios.post(import.meta.env.VITE_BACKEND_URL + '/api/v1/user/register',
  //     JSON.stringify(signupData),
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       withCredentials: true, // help to set cookies in browser from backend server
  //     }).then((res) => {
  //       dispatch(setToken(res.data.token))
  //       localStorage.setItem("token", JSON.stringify(res.data.token))

  //       // console.log(res.data)

  //       dispatch(setUserData(res.data.user))
  //       localStorage.setItem("user", JSON.stringify(res.data.user))
  //     })
      
  //       toast.success("SignUp Success...")
    
  //     return navigate('/');
  //   }
  //   catch(error){
  //     toast.error("Something went wrong")
  //   }

  //   // console.log("Sucessfully signedUp")
  // }

  return (
    <>
      <form onSubmit={handleSubmit}  >

        <div id="Signup-container" className="flex flex-col w-full min-h-[120vh]  bg-white bg-[radial-gradient(ellipse_90%_90%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          <div className="relative self-center mt-12 shadow-xl  shadow-zinc-200 hover:shadow-zinc-300  rounded-md border-[1px] border-slate-200  min-h-96 min-w-80  bg-slate-50 p-4 font-semibold">
            <h2 className="text-slate-700 text-center font-bold text-2xl ">
              Signup Here
            </h2>

            <Input name={"name"} placeholder={"Name"} onChange={handleChange} value={values.name}  onBlur={handleBlur}/>
            {errors.name && touched.name ?<p className="form-error pl-3 text-red-500 font-normal"> {errors.name}</p> : null}
            
            <Input name={"email"} placeholder={"Email"} onChange={handleChange} value={values.email} onBlur={handleBlur} />
            {errors.email && touched.email ?<p className="form-error pl-3 text-red-500 font-normal"> {errors.email}</p> : null}
            
            <Input name={"phone"} type={"number"} placeholder={"Phone Number"} onChange={handleChange} value={values.phone} onBlur={handleBlur}/>
            {errors.phone && touched.phone ?<p className="form-error pl-3 text-red-500 font-normal"> {errors.phone}</p> : null}
            
            <Input name={"password"} type={'password'} placeholder={"Password"} onChange={handleChange} value={values.password}  onBlur={handleBlur}/>
            {errors.password && touched.password ?<p className="form-error pl-3 text-red-500 font-normal"> {errors.password}</p> : null}

            {/* Radio Btns */}
            <div className="px-2 py-1 flex justify-evenly">
              <div>
                <input name="role" type="radio" id="admin" value="admin" onChange={handleChange} onBlur={handleBlur} checked={values.role === "admin"} />
                <label htmlFor="admin"> Admin</label>
              </div>

              <div>
                <input name="role" type="radio" id="user" value="user" onChange={handleChange} onBlur={handleBlur}  checked={values.role === "user"} />
                <label htmlFor="user"> User</label>
              </div>
            </div>
            {errors.role && touched.role ?<p className="form-error pl-3 text-red-500 font-normal"> {errors.role}</p> : null}

            <div className="flex justify-center w-full">


              <button type="submit"
                className={`align-middle w-full min-h-8 duration-300 select-none font-serif font-thin text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md bg-zinc-950  text-white hover:text-gray-100 shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] border-[1px] border-gray-500 hover:border-gray-900 text-nowrap	 mx-2 `}
              > Signup
              </button>
            </div>
            <BorderBeam duration={5} size={200} />
          </div>
        </div>
      </form>

    </>
  );
}