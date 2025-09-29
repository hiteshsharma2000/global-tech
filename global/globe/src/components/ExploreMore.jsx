import React from 'react'
import { FaTruck } from 'react-icons/fa'

const ExploreMore = () => {
    const data=[
        {
            img:"https://image2url.com/images/1759128751289-de531cc1-e940-41ba-80e5-ad50a16dea88.png",
            title:"home decor furniture",
            description:"“Design your space, design your mood.”",
            bg:"#efefef"
        },
        {
            img:"https://image2url.com/images/1759130846306-f4f004d3-2dea-4355-b715-42bcc3519a02.jpg",
            title:"WOODEN PUJA ROOM",
            description:"“Where devotion meets design, divinity finds a home.”",
            bg:"#f7ebdf"
        },
        {
            img:"https://image2url.com/images/1759130968526-81658c79-9539-4bfe-b8b8-c1d1176e1040.png",
            title:"home decor furniture",
            description:"“Design your space, design your mood.”",
            bg:"#dbdfe2"
        }
    ]
  return (
  <div className="w-[100%] bg-[#fef0e5] text-center">
      <br />
      <br />
      <br />
      <br />
      <h2
        style={{ fontFamily: "serif" }}
        className="text-[#60392b] font-bold text-[1.8rem]"
      >
        EXPLORE MORE
      </h2>
      <p  className="text-black font-bold">
       “FIND OUR VARIOUS ITEMS.”
      </p>
      <br />
      <br />
      <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-10 md:mx-15'>

      {data?.map((ele)=>{
          return <div className='flex rounded-b-xl rounded-tr-xl overflow-hidden shadow-xl' style={{backgroundColor:`${ele.bg}`}}>
          
            <div className='text-center w-[50%]'>
                <div className='w-[85%] bg-[#60392b] rounded-br-xl py-2 text-white font-bold' style={{fontFamily:"revert"}} >UP TO 35% OFF</div>
                <br />
                <h2 className='text-[#60392b] font-bold' style={{fontFamily:"revert"}}>{ele.title.toUpperCase()}</h2>
                <p className='text-[.85rem] text-start ml-[12px]' style={{fontFamily:"cursive"}}>{ele.description}</p>
                <br />
                <p className='text-start ml-[12px] text-[1.1rem]'>Start From</p>
                <p className='text-start ml-[12px] font-bold text-[1.2rem] mb-[5px]'>₹3,000 <span className=' text-gray-600 font-normal'> Onwards</span></p>
               
               <div className='flex text-center items-center mb-[8px]'>

                <FaTruck className='ml-[12px] text-[#60392b]'/>
                 <p className='text-start ml-[12px] text-[1.1rem]'>Shipping in 2 Days</p>
                 
               </div>

            </div>
            <div className='w-[50%]'>
                <img className='h-full w-full' src={ele.img} alt="" />
            </div>
            </div>
      })}
      </div>
      <br />
      <br />
      <br />

    </div>
  )
}

export default ExploreMore