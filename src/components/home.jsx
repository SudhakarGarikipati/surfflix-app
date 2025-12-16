import React from 'react'

const Home = () => {
    return (
        <div className='bg-black h-fulll̥'>
            <div className='w-5/12 py-50 m-auto align-middle'>
            <label className='text-white text-6xl'>
                Unlimited movies, TV shows, and more
            </label>
            <br/>
            <label className='text-white text-2xl'>Starts at $7.99. Cancel anytime.</label>
             <br/>
            <label className='text-white text-l'>Ready to watch? Enter your email to create or restart your membership.</label>
             <br/>
            <input type='text' placeholder='Email address' className='p-3 m-3 border-2 bg-amber-100'/>
            <button className='p-3 m-3 rounded-lg border-2 bg-red-600 text-white'>Get Started</button>
            </div>
        </div>
    )
}

export default Home