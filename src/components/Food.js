import React, { useState } from 'react'
import { data } from '../data/data.js'
import { motion, AnimatePresence } from "framer-motion"

const Food = () => {
    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        )
    }
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price <= price;
            })
        )
    }

    return (
        <div className='max-w-[1240px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center py-6'>
                ¡ Nuestros productos Top !
            </h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Type */}
                <div>
                    <p className='font-bold text-gray-700'>Filtra por tipo</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Todas</button>
                        <button onClick={() => filterType('panes')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Panes</button>
                        <button onClick={() => filterType('dulces')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Dulces</button>
                        <button onClick={() => filterType('embutidos')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Embutidos</button>
                        <button onClick={() => filterType('panetones')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Panetones</button>
                        <button onClick={() => filterType('bizcochos')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1'>Bizcochos</button>
                    </div>
                </div>

                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filtra por precio</p>
                    <div className='flex justify-between flex-wrap max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('1')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1' dangerouslySetInnerHTML={{ __html: '&lt; S/. 3' }}></button>
                        <button onClick={() => filterPrice('5')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1' dangerouslySetInnerHTML={{ __html: '&lt; S/. 5' }}></button>
                        <button onClick={() => filterPrice('10')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1' dangerouslySetInnerHTML={{ __html: '&lt; S/. 10' }}></button>
                        <button onClick={() => filterPrice('25')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white border rounded-xl px-5 py-1' dangerouslySetInnerHTML={{ __html: '&lt; S/. 25' }}></button>
                    </div>
                </div>
            </div>

            {/* diplay food */}
            <AnimatePresence>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                    {foods.map((item, index) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.1 }}
                            key={item.id}
                            className="border shadow-lg rounded-lg hover:scale-105 duration-500 cursor-pointer">
                            <img className='w-full h-[150px] md:h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name} />
                            <div className='flex justify-between px-2 py-4'>
                                <p>{item.name}</p>
                                <p>
                                    <span className='bg-orange-500 text-white p-1 rounded-md'>S/. {item.price}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </AnimatePresence>
        </div>
    )
}

export default Food