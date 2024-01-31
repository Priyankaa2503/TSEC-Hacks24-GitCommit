import React, { useState } from 'react'
import Header from '../../components/Header'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages'
import {data} from './Data'

const Explore = () => {
  const [foods, setfoods] = useState(data)
    // const [foods, setfoods] = useState(data)
    const filterType =(category)=>{
      setfoods(
          data.filter((item)=>{
              return item.category ==category;
          })
      );
  };

  const filterPrice=(price)=>{
      setfoods(
          data.filter((item)=>{
              return item.price == price;
          })
      );
  };
  return (
    <div>
        <Header/>
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 text-4xl font-bold text-center'>EXPLORE</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-slate-600 '>Filter Type</p>
                    <div className='flex justify-between flex-wrap m-1 '>
                    <button onClick={()=> setfoods(data)} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                    <button onClick={()=> filterType('pizza')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                    <button onClick={()=> filterType('fries')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Fries</button>
                    <button onClick={()=> filterType('pasta')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pasta</button>
                    <button onClick={()=> filterType('sandwich')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Sandwiches</button>
                    </div>
                </div>
                <div >
                    <p className='font-bold text-slate-600'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full '>
                    <button onClick={()=> setfoods(data)} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                    <button onClick={()=> filterPrice('under 100')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Under 100</button>
                    <button onClick={()=> filterPrice('under 150')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Under 150</button>
                    <button onClick={()=> filterPrice('under 200')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Under 200</button>
                    <button onClick={()=> filterPrice('under 300')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Under 300</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item,index)=>(
                    <div key={index} className='border shadow-lg hover:scale-105 rounded-lg'>
                        <img  className='w-full h-[200px] object-cover rounded-t-lg' src={item.image} alt={item.name}/>               
                    <div className='flex justify-between px-2 py-3'>
                    <p className='font-bold font-sans text-xl'>{item.name}</p>
                    <p>
                        <span className='bg-orange-500 p-1 text-white rounded-full'>{item.price}</span>
                    </p>
                    </div>
                    </div>
                    
                ))}

                
            </div>
        </div>
        {/* <div>
                <p className='font-bold text-slate-600 '>Filter Type</p>
                <div className='flex justify-between flex-wrap m-1 '>
                <button onClick={()=> setfoods(data)} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>All</button>
                <button onClick={()=> filterType('pizza')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pizza</button>
                <button onClick={()=> filterType('fries')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Fries</button>
                <button onClick={()=> filterType('pasta')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Pasta</button>
                <button onClick={()=> filterType('sandwich')} className='border-2 px-4 rounded-2xl border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1'>Sandwiches</button>
                </div>
            </div> */}
        <ResponsiveMasonry className='mt-12'  columnsCountBreakPoints={{350:1,768:3,992:4}}>
        <Masonry gutter='1rem'>
            {
                foods.map((item,index)=>(
                    <img className='masonry__img'
                    src={item}
                    key={index}
                    alt=''
                    style={{width:"100%",display:"block",borderRadius:"10px"}}/>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
    </div>
  )
}

export default Explore