import React, { useEffect, useState } from 'react'

const WhyChoose = () => {
const [data,setdata]=useState(null)

const getdata=async ()=>{
  try {
     await fetch('http://localhost:4000/whychoose/').then((res)=>{
      return res.json()
     }).then((res)=>{
      console.log(res);
      
      setdata(res.data)
     })
    

  } catch (error) {
    console.log(error);
    
  }
}
useEffect(()=>{
  getdata()
},[])


  return (
   <div className='w-[100%] bg-[#fef0e5] text-center'>
         <br />
         <br />
            <h2 style={{fontFamily:"serif"}}  className='text-[#60392b] font-bold text-[1.8rem]'>WHY CHOOSE US</h2>
            <p className='text-black font-bold'>“MORE THAN FURNITURE - A LIFESTYLE UPGRADE”</p>
            <br />
            <br />
           
  <div className="md:w-[90%] mx-auto flex flex-wrap justify-center gap-10 p-6">
  {data?.map((ele, ind) => (
    <div
      key={ind + 1}
      className="w-full sm:w-[45%] md:w-[30%] max-w-sm rounded-xl overflow-hidden flex flex-col items-center text-center p-4"
    >
    
      <img
        src={ele.img}
        alt={ele.title}
        className="w-full h-70 object-cover rounded-md shadow-xl"
      />


      <h3 className="mt-3 text-lg text-[#6f574c] font-bold uppercase">
        {ele.title}
      </h3>

      <p className="text-sm">{ele.desciption}</p>
    </div>
  ))}
</div>


<br />
<br />
<section className='w-full' style={{
          backgroundImage:
            `url(https://image2url.com/images/1759049731443-043b6e0f-1f1c-4055-8b3f-5c21278abee2.jpg)`, 
        }}>
  <h2 style={{fontFamily:"cursive"}}  className='text-white font-bold text-[1.5rem] text-center py-[10px]'>“We don’t just sell furniture. We deliver comfort, design, and joy.”</h2>
</section>
       </div>
  )
}

export default WhyChoose