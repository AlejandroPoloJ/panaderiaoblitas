import React from 'react'
import BotonCompra from './BotonCompra.js';

const Card = () => {

    const TipoCombo = ["Combo del Día","Combo Ejecutivo","Combo Espcial"];

    return (
        <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-4 pt-4'>{TipoCombo[0]}</p>
                    <p className='px-4'>Solo Pomalca</p>
                    <BotonCompra tipocompra={TipoCombo[0]}/>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Combo del día" />
            </div>
            <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-4 pt-4'>{TipoCombo[1]}</p>
                    <p className='px-4'>Solo Pomalca</p>
                    <BotonCompra tipocompra={TipoCombo[1]}/>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1588861472194-6883d8b5e552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Combo Ejecutivo" />
            </div>
            <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className=' font-bold text-2xl px-4 pt-4'>{TipoCombo[2]}</p>
                    <p className='px-4'>Solo Pomalca</p>
                    <BotonCompra tipocompra={TipoCombo[2]}/>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1615585601987-296cdc0f9334?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Combo Especial" />
            </div>
        </div>
    )
}

export default Card