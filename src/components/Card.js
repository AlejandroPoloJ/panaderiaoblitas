import React from 'react'

const Card = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-4 pt-4'>Pan de Molde</p>
                <p className='px-4'>Through 8/26</p>
                <button className='border border-white bg-white text-black mx-4 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Comprar ahora</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-4 pt-4'>Pancitos de ofrenda</p>
                <p className='px-4'>Through 8/26</p>
                <button className='border border-white bg-white text-black mx-4 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Comprar ahora</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1588861472194-6883d8b5e552?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className='rounded-xl relative hover:scale-105 duration-500 cursor-pointer'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className=' font-bold text-2xl px-4 pt-4'>Panes especiales</p>
                <p className='px-4'>Through 8/26</p>
                <button className='border border-white bg-white text-black mx-4 rounded-xl px-5 py-1 absolute bottom-4 shadow-md'>Comprar ahora</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1615585601987-296cdc0f9334?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
    </div>
  )
}

export default Card