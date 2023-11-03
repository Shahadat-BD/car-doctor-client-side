import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {FiEye,FiEyeOff} from 'react-icons/fi'
import useAuth from "../../hook/useAuth";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [showPassword,setShowPassword] = useState(false)
  const { setUser, signInUser,googleSignIn} = useAuth()

  const handleLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        toast("user logged in Successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
          toast(error.message)
      });
  };

  // login with google 
  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then((result)=>{
        setUser(result.user)
        navigate(location?.state ? location.state : '/')
        toast('user logged in successfully')
    })
    .catch((error)=>{
        toast(error.message)
    })
}

  return (
    <div>
      <div className="bg-gray-50">
        <div className="hero-content">
          <div className="card flex-shrink-0 w-full max-w-md  bg-base-100">
            <h1 className="text-3xl font-semibold text-center mt-3 text-[#FF3811]">
              Login Now
            </h1>
            <form className="card-body" onSubmit={handleLoginForm}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="write your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                  <span onClick={()=>setShowPassword(!showPassword)} className='absolute lg:ml-[350px] ml-[300px] md:ml-[350px] mt-[52px] cursor-pointer'>{showPassword ? <FiEye/> : <FiEyeOff/>}</span>
              </div>
              <div className="form-control mt-6">
                <input  className="text-white border-none cursor-pointer bg-[#FF3811] py-3 text-lg font-semibold rounded-md"
                value={'Login'}
                type="submit"
                >
                </input >
              </div>
            </form>
            <div onClick={handleGoogleSignIn} className="flex cursor-pointer w-[85%] m-auto justify-center items-center border border-[#FF3811] rounded-md p-1 ">
                <FcGoogle className="text-4xl mr-4" />
                <button> Login With Google</button>
              </div>
              <div className="my-3">
                <p className="text-center">
                  A New User ? please{" "}
                  <Link to={"/register"} className="text-[#FF3811]">
                    Register
                  </Link>
                </p>
              </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Login;