import React from 'react'
import { FiSearch } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <div className="flex max-w-[1240px] mx-auto items-center p-4 justify-between">
                <div className="cursor-pointer">
                    <h1 className='text-orange-500 font-bold text-3xl sm:text-4xl lg:text-4xl select-none'>Panadería Oblitas</h1>
                </div>
                <div className='flex'>
                <div className="flex justify-center bg-gray-200 h-10 rounded-md sm:pl-2 sm:w-[400px] lg:w-[400px] items-center">
                    <input type="search" className='hidden sm:flex bg-transparent p-2 sm:w-full focus:outline-none text-black ' placeholder='Ingresa una categoría . . .' />
                    <FiSearch size={5} className="bg-orange-500 text-white p-[10px] h-10 rounded-md w-10 font-bold " />
                </div>
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