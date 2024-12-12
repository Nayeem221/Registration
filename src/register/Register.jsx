import React, { useState } from 'react'

import { FiEyeOff } from "react-icons/fi";
const Register = () => {

  return (
    <>
    <section className='registration pt-[101px] pb-[109px]  '>
      <div className="container flex flex-col lg:flex-row justify-center  lg:flex lg:justify-between">
        <div className="textpart ">
   <h1 className='text-[36px] font-nunito font-extrabold mb-[21px]'>WELCOME BACK!</h1>
   <div className='flex gap-1'>
    <p className=' text-[24px] font-medium font-nunito mb-[64px]'>Don’t have a account,</p>
    <button className='text-[24px] font-medium font-nunito mb-[64px]'>Sign up</button>
     
   </div >
   <div className='flex flex-col w-[300px] lg:w-[640px]'>
   <label className='text-[28px] font-nunito font-semibold text-[#444B59] mb-[16px]' htmlFor="">Username</label>
   <input className='lg:py-[24px] lg:px-[32px] py-[16px] px-[23px] rounded-[20px] lg:rounded-[80px] border-2 border-[#789ADE] text-[#C8D3F9] lg:mb-[36px] outline-none' placeholder='deniel123@gmail.com' type="text" />
   <label className='text-[28px] font-nunito font-semibold text-[#444B59] mb-[16px]' htmlFor="">Password</label>
   <input className='lg:py-[24px] lg:px-[32px] py-[16px] px-[23px] rounded-[20px] lg:rounded-[80px] border-2 border-[#789ADE] outline-none text-black mb-[47px] relative' placeholder='.......' type="text" />
   <FiEyeOff className='lg:absolute absolute left-[260px] top-[475px] lg:left-[830px] lg:top-[535px]' />
    
   </div>
   <div className='lg:flex lg:w-[640px] lg:justify-between w-[300px] flex justify-between '>
   <div class="flex items-center space-x-2">
  <input
    type="checkbox"
    id="remember-me"
    class="appearance-none border border-blue-300 rounded-full w-5 h-5 checked:bg-blue-500 checked:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
  />
  <label for="remember-me" class="text-gray-600">Remember me</label>
</div>
    <h3 className='text-[20px] font-nunito font-semibold text-[#8699DA]'>Forget password?</h3>
   </div>
   <button className='flex justify-center items-center w-[300px] lg:w-[640px] bg-[#8699DA] py-[24px] px-[32px] rounded-[80px] mt-[65px] text-white'>Sign In</button>
   <div className='lg:flex flex justify-center gap-[1px] items-center mt-8 mb-[15px] pl-8 lg:pl-0 lg:justify-center lg:items-center lg:mt-[54px] lg:mb-[16px]'>
    <hr className='lg:w-[240px] w-[50px] h-[2px]' />
    <p className='lg:w-[240px] w-[230px] text-[20px] font-nunito font-normal '>or continue with</p>
    <hr className='lg:w-[240px] w-[50px] h-[2px] text-[#789ADE]' />
   </div>
   <div className='flex justify-center items-center gap-[60px] '>
    <div className='lg:w-[120px] lg:h-[80px] w-[50px] h-[50px] border-2 border-[#789ADE] rounded-[8px] flex justify-center items-center' >
      <img src="images/google.png" alt="" />
    </div>
    <div className='lg:w-[120px] lg:h-[80px] w-[50px] h-[50px] border-2 border-[#789ADE] rounded-[8px] flex justify-center items-center' >
 <img src="images/facebook.png" alt="" />
    </div>
    <div className='lg:w-[120px] lg:h-[80px] w-[50px] h-[50px] border-2 border-[#789ADE] rounded-[8px] flex justify-center items-center' >
 <img src="images/apple.png" alt="" />
    </div>
   </div>
        </div>
        <div className="imagepart lg:pr-0 pr-12">
      <img src="images/Image.png" alt="" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Register
