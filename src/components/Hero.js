import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Hero = () => {
    return (
        <Carousel className="max-w-[1240px] mx-auto" showThumbs={false} width={"none"} emulateTouch={true}  showArrows={false} showStatus={false}  showIndicators={false} swipeable={true} autoPlay infiniteLoop>
                <div className='max-w-[1240px] mx-auto p-4 '>
                    <div className='max-h-[500px] relative'>
                        <div className='absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
                            <h1 className='!px-10 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify select-none'>Panadería <span className='text-orange-500'>artesanal, </span></h1>
                            <h1 className='!px-10 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify select-none'> <span className='text-orange-500'>sabores </span>auténticos.</h1>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto p-4 '>
                    <div className='max-h-[500px] relative'>
                        <div className='absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
                            <h1 className='px-10 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify select-none'>Panadería <span className='text-orange-500'>artesanal, </span></h1>
                            <h1 className='px-10 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify select-none'> <span className='text-orange-500'>sabores </span>auténticos.</h1>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/3218467/pexels-photo-3218467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" />
                    </div>
                </div>
                <div className='max-w-[1240px] mx-auto p-4 '>
                    <div className='max-h-[500px] relative'>
                        <div className='absolute w-full h-full max-h-[500px] bg-black/40 text-gray-200 flex flex-col justify-center'>
                            <h1 className='px-10 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify select-none'>Panadería <span className='text-orange-500'>artesanal, </span></h1>
                            <h1 className='px-10 text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-justify select-none'> <span className='text-orange-500'>sabores </span>auténticos.</h1>
                        </div>
                        <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1532460734809-e7f8475ca917?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="#" />
                    </div>
                </div>
        </Carousel>
    )
}

export default Hero