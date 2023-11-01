import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";
import {FiEye,FiEyeOff} from 'react-icons/fi'
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Register = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const [showPassword,setShowPassword] = useState(false)
    const {googleSignIn,setUser,createSignInUser} = useContext(AuthContext)

    const handleRegisterForm = e =>{
           e.preventDefault()
           const name = e.target.name.value
           const email = e.target.email.value
           const password = e.target.password.value
           const photoURL = e.target.photoURL.value
       
        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;

        if (password.length < 6) {
           toast('password must be 6 character')
        }
         else if (!regex.test(password)) {
             toast("at least one uppercase and one special character")
          } 
          else{
            createSignInUser(email,password)
            .then((result)=>{
              //  update user created
               updateProfile(result.user,{
                displayName : name,
                photoURL : photoURL,
               })
               .then(()=>{
                  console.log('profile updated');
                  window.location.reload(true)
               })
               setUser(result.user)
               toast('user created Successfully')
               navigate(location?.state ? location.state : '/')
            })
            .catch((error)=>{
               toast(error.message)
            })
          }

    }
     
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
              Register Now
            </h1>
            <form className="card-body" onSubmit={handleRegisterForm}>
              <div className="form-control">
             
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
              
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
              
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <span onClick={()=>setShowPassword(!showPassword)} className='absolute lg:ml-[350px] ml-[300px] md:ml-[350px] mt-[16px] cursor-pointer'>{showPassword ? <FiEye/> : <FiEyeOff/>}</span>
              </div>

              <div className="form-control mt-6">
                <input  className="text-white border-none cursor-pointer bg-[#FF3811] py-3 text-lg font-semibold rounded-md"
                  type="submit"
                  value={'Register'}
                >
               
                </input>
              </div>
            </form>
            <div onClick={handleGoogleSignIn} className="flex cursor-pointer w-[85%] m-auto justify-center items-center border border-[#FF3811] rounded-md p-1 ">
                <FcGoogle className="text-4xl mr-4" />
                <button> Login With Google</button>
              </div>
            <div className="my-3">
                <p className="text-center">
                  Already have an account ? please{" "}
                  <Link to={"/login"} className="text-[#FF3811]">
                    Login
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

export default Register;