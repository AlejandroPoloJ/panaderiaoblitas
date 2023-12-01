import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
                <div className="cursor-pointer">
                    <h1 className='text-orange-500 font-bold text-3xl sm:text-4xl lg:text-4xl select-none'>Panadería Oblitas</h1>
                </div>
                <div className='flex'>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 ml-5 rounded inline-flex items-center"
                onClick={() => window.open('https://www.facebook.com/PanDeOblitas', '_blank')}>      
                    <FaFacebook size={20} className="mr-2" />
                    <span>Facebook</span>
                </button>
                <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 ml-5 rounded inline-flex items-center"
                onClick={() => window.open('https://wa.me/+51941939547?text=Hola%20panadería%20Oblitas%20quiero%20hacer%20un%20pedido.', '_blank')}>      
                    <FaWhatsapp size={20} className="mr-2" />
                    <span>Whatsapp</span>
                </button>
                </div>
            </div>
        </>
    )
}

export default Navbar