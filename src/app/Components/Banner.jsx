import React from 'react'

export default function Banner() {
    return (
        <div className='  mx-auto mb-10 mt-'>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col gap-5 lg:flex-row">
                    <img
                        src="https://i.postimg.cc/k4cG3J86/4667595-removebg-preview.png"
                        className=" rounded-lg shadow-2xl flex-1"
                    />
                    <div className='flex-1'>
                        <h1 className="font-bold text-white text-5xl">Welcome to Our Store!</h1>
                        <p className="py-6 text-white">
                           Find your favorites at the best price
                        </p>
                        <button className="btn bg-[#201235] text-white p-2 rounded-xl">Get Started</button>
                    </div>
                    <div className="hero-content flex-col lg:flex-row">
                        <img
                            src="https://i.postimg.cc/kXZ4dhVc/levitating-music-headphones-display-removebg-preview.png"
                            className=" flex-1 rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
