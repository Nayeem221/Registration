import React, { useState } from 'react';
import { FiEyeOff } from 'react-icons/fi';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { FaEye } from "react-icons/fa";
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithPopup } from "firebase/auth";
import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { HashLoader } from 'react-spinners';

const Register = () => {
 const [name,setname]=useState('')
 const [nameerror,setnameerror]=useState('')
 const [password,setpassword]=useState('')
 const [passworderror,setpassworderror]=useState('')
  const[show,setshow]=useState(false)
const navigate=useNavigate()

  

 const [loading,setloading]=useState(false)
 //firebase variable 
 const auth = getAuth();
 const provider = new GoogleAuthProvider();

 const handleshow=()=>{
setshow(!show)
 }
const handlesubmit=(e)=>{
  setloading(true)
 e.preventDefault()
  if(!name){
    setnameerror('enter your name ')
    setloading(false)
  }
 if(!password){
  setpassworderror('enter your password')
  setloading(false)
 }else{
  createUserWithEmailAndPassword(auth, name, password)
  .then((userCredential) => {
    setloading(false)
    // Signed up 
    const user = userCredential.user;
    sendEmailVerification(auth.currentUser)
  .then(() => {
    navigate('/login')
    toast.warn('Email verification sent !',{
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  });
   
  })
  .catch((error) => {
    setloading(false)
    const errorCode = error.code;
    const errorMessage = error.message;
    if(errorCode=='auth/email-already-in-use'){
      toast.warn('Email already exist!',{
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    // ..
  });

 }

}
const handlegoogle=()=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

  return (
    <>
      <section className="registration pt-[101px] pb-[109px]">
        <div className="container  sm:flex sm:flex-col sm:justify-center sm:items-center sm:m-auto flex flex-col lg:flex-row justify-center lg:gap-[82px]">
          <div className="textpart pl-[40px] sm:flex sm:flex-col sm:justify-center sm:items-center sm:m-auto ">
            <h1 className="text-[36px] md:text-center font-nunito font-extrabold mb-[21px]">WELCOME BACK!</h1>
            <div className="flex gap-1">
              <p className="text-[24px] font-medium font-nunito mb-[64px]">Don’t have an account,</p>
              <button className="text-[24px] font-medium font-nunito mb-[64px]">Sign up</button>
            </div>
            <div className="flex flex-col w-[300px] lg:w-[640px]">
              <label className="text-[28px] font-nunito font-semibold text-[#444B59] mb-[16px]">
                Username
              </label>
              <input onChange={(e)=>{setname(e.target.value),setnameerror('') }}
                className="lg:py-[24px] lg:px-[32px] py-[16px] px-[23px] rounded-[20px] lg:rounded-[80px] border-2 border-[#789ADE] text-black lg:mb-[36px] outline-none"
                placeholder="deniel123@gmail.com"
                type="text"
              />
              <div className='text-center error'><span className='text-red-500'>{nameerror}</span></div>
              <label className="text-[28px] font-nunito font-semibold text-[#444B59] mb-[16px]">
                Password
              </label>
              <div className="relative ">
                <input onChange={(e)=>{setpassword(e.target.value),setpassworderror('')}}
                  className="lg:py-[24px] lg:px-[32px] py-[16px] px-[23px] rounded-[20px] lg:rounded-[80px]  border-2 border-[#789ADE] outline-none text-black w-full"
                  placeholder="......."
                  type={show?"password":"text"}
                />
                {
                  show?
                  <FaEye onClick={handleshow}    className="absolute right-11  top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
                 
                :
                <FiEyeOff onClick={handleshow}
                  className="absolute right-11  top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer "
                />
                }
               
                
                
               
              </div>
              <div className='text-center pt-9'> <span className='text-red-500 '>{passworderror}</span></div>
            </div>

            <div className="lg:flex lg:w-[640px] lg:justify-between w-[300px] flex justify-between mt-[36px]">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="appearance-none border border-blue-300 rounded-full w-5 h-5 checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <label htmlFor="remember-me" className="text-gray-600">
                  Remember me
                </label>
              </div>
              <h3 className="text-[20px] font-nunito font-semibold text-[#8699DA]  cursor-pointer">
              <Link to={'/forget'}>Forget password?</Link>  
              </h3>
            </div>
            {/* set */}
            {
              loading?
              <HashLoader />
          
            :
            <button onClick={handlesubmit} className="flex justify-center items-center w-[300px] lg:w-[640px] bg-[#8699DA] py-[24px] px-[32px] rounded-[80px] mt-[65px] text-white">
            Sign In
          </button>
            }

            <div className="pr-[300px]  sm:mx-auto lg:pr-0 lg:flex flex justify-center w-[640px] items-center mt-8 mb-[15px] lg:justify-center lg:items-center lg:mt-[54px] lg:mb-[16px]">
              <hr className="sm:text-center  lg:w-[240px] w-[50px] h-[0px] border-2 border-[#C8D3F9] text-[#C8D3F9]" />
              <h3 className="sm:text-center text-[20px] font-nunito font-normal">or continue with</h3>
              <hr className="sm:text-center  lg:w-[240px] w-[50px] h-[0px] text-[#C8D3F9] border-2 border-[#C8D3F9]" />
            </div>

            <div onClick={handlegoogle} className=" cursor-pointer  flex justify-center items-center gap-[60px]">
              <div className="lg:w-[120px] lg:h-[80px] w-[50px] h-[50px] border-2 border-[#789ADE] rounded-[8px] flex justify-center items-center">
                <img className='cursor-pointer'  onClick={handlegoogle} src="images/google.png" alt="Google" />
              </div>
              <div className="lg:w-[120px] lg:h-[80px] w-[50px] h-[50px] border-2 border-[#789ADE] rounded-[8px] flex justify-center items-center">
                <img className='cursor-pointer'  src="images/facebook.png" alt="Facebook" />
              </div>
              <div className="lg:w-[120px] lg:h-[80px] w-[50px] h-[50px] border-2 border-[#789ADE] rounded-[8px] flex justify-center items-center">
                <img className='cursor-pointer' src="images/apple.png" alt="Apple" />
              </div>
            </div>
          </div>

          <div className="imagepart lg:pr-0 pr-12 lg:mt-[101px] lg:w-[783px]">
            <img src="images/Image.png" alt="Welcome" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
