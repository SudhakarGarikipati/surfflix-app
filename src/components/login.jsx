import React, { useState } from 'react'
import Header from './header';
import { Site_URL } from '../utils/constants';

const Login = () => {
  const [isSignInHeader, setHeader] = useState(true);
  const signUpHandler = () => {
    setHeader(!isSignInHeader);
  }
  return (
    <div>
      <div className='absolute'>
        <img src={Site_URL} alt='Login' />
      </div>
      {/* <div className='absolute w-4/12 bg-black z-1 left-1/3 top-1/8 mx-auto py-10 opacity-90'>
      <label className=' block text-white text-4xl my-4 py-2 mx-auto font-bold'>Sign In</label>
      <input type='text' placeholder='Email or Mobile number' className='block my-5 p-3 mx-auto bg-black text-white rounded-md border-2'/>
      <input type='password' placeholder='Password' className='block my-5 p-3 mx-auto bg-black text-white rounded-md border-2'/>
      <button className='cursor-pointer block bg-red-600 text-white my-2 p-2 mx-auto rounded-md mt-3 text-l font-semibold hover:bg-red-700'>Sign In</button>
      <label className=' block text-white my-2 mx-auto text-center'>OR</label>
      <button className='cursor-pointer block bg-gray-400 text-white my-2 p-2 mx-auto rounded-md mt-3 text-l font-semibold hover:bg-gray-700'>Use a Sign-In Code</button>
      <a href='#' className='text-white block mx-auto underline text-center my-2'>Forgot password?</a>
      <div className='w-9/12 mx-auto my-3'>
      <input type='checkbox' className="bg-amber-50  size-5"/><label className='text-white px-4 align-Text-top'>Remember me</label>
      </div>
      <label className=' text-gray-300 my-3 ml-15'>New to Netflix?</label>
      <a href='#' className='text-white ml-2 my-3 text-l font-bold hover:underline'>Sign up now.</a>
     <label className=' block text-white my-2 mx-auto text-sm'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</label>
     <p className=' block text-gray-400 my-2 mx-auto text-sm font-medium'>The information collected by Google reCAPTCHA is subject to the Google <a href='#' className='text-blue-400 font-medium'>Privacy Policy</a> and <a href='#' className='text-blue-400 font-medium'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
      </div> */}
      <form className=' w-3/12 absolute p-12 bg-black opacity-80 my-36 mx-auto right-0 left-0 text-white' >
        <label className='p-3 font-bold text-3xl'>{isSignInHeader? "Sign In" : "Sign Up"}</label>
        {isSignInHeader? null: <input type='text' placeholder='User Name' className='bg-gray-400 m-2 p-2 w-full text-black' />}
        <input type='text' placeholder='Email or Mobile number' className='bg-gray-400 m-2 p-2 w-full text-black' />
        <input type='password' placeholder='Password' className='m-2 p-2 w-full bg-gray-400 text-black'  />
        <button className='m-2 p-2 bg-red-500 w-full'>{isSignInHeader? "Sign In" : "Sign Up"}</button>
        <label className='m-2 p-2 w-full'>OR</label>
        <a href='#' className='m-2 p-2 w-full'>Forgot password?</a>
        <div className='m-2 w-full'>
          <input type='checkbox' className="bg-amber-50  size-5" /><label className='text-white px-4 align-Text-top'>Remember me</label>
        </div>
        
        <p  className='m-2 w-full' onClick={signUpHandler}>{isSignInHeader? "New to Netflix? Sign up" : "Existing user? Sign In"}</p>
        <p className='m-2 w-full'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
        <p className='m-2 w-full'>The information collected by Google reCAPTCHA is subject to the Google <a href='#' className='text-blue-400 font-medium'>Privacy Policy</a> and <a href='#' className='text-blue-400 font-medium'>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).</p>
      </form>
    </div>
  )
}
export default Login;