import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { Bounce, toast } from 'react-toastify';
const Forget = () => {
    const navigate=useNavigate()
    const [reset,Setreset]=useState('')
    const handlesend=(e)=>{
        e.preventDefault()
        if(!reset){
            alert('enter your email')
        }else{
            sendPasswordResetEmail(auth, reset)
            .then(() => {
               navigate('/login')
               toast.success('check your email!',{
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
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
           if(errorCode=='Enter a valid email'){
            toast.error('🦄 Wow so easy!',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
           }
            });
        }
    }

    const auth = getAuth();
  return (
    <>
     /* From Uiverse.io by danilppzz */ 
     <div className='flex justify-center items-center h-[100vh]'>
<div className="flex h-[34px] text-[14px] text-white/60 justify-center ">
  <input onChange={(e)=>Setreset(e.target.value)}
    className="input w-[200px] bg-[#09090b] text-[#f4f4f5] px-3 py-1 rounded-l-lg border border-white/10 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 focus:ring-offset-[#09090b] transition-all duration-150 ease-in-out"
    name="text"
    type="text"
    placeholder="Email"
  />
  <button onClick={handlesend}
    className="text-[#f4f4f5] px-3 py-1 rounded-r-lg border-y border-r border-r-white/10 border-y-white/10 hover:bg-zinc-800/40 transition-all duration-150 easy-in-out"
  >
    Send
  </button>
</div>
</div>
    </>
  )
}
export default Forget