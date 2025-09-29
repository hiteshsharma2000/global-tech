// src/components/NewCollections.jsx

import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart, FaTruck } from "react-icons/fa";



export default function NewCollections() {
  const [data,setdata]=useState(null)

  const getdata=async ()=>{
    try {
      await fetch('https://global-tech-dliz.vercel.app/newcollection/').then((response)=>{
        return response.json()
      }).then((result)=>{
        // console.log(result.data);
        
        setdata(result.data)
        
      })
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getdata()
  },[])

  function getDriveImageUrl(shareLink) {
  // Match the file ID in the share link
  const match = shareLink.match(/\/d\/([a-zA-Z0-9_-]+)\//);
  if (!match) return null; // invalid link
  const fileId = match[1];
  // Return direct image URL
  return `https://global-tech-dliz.vercel.app/newcollection/image/${fileId}`;
}

  return (
    <section className="py-12 bg-white text-center">
      {/* Heading */}
      <h2 style={{fontFamily:"serif"}}  className="text-2xl md:text-3xl font-bold text-[#4B1E1E] mb-10">
        NEW COLLECTIONS
      </h2>

      {/* Product Grid */}
      <div className=" md:mx-[3%] grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {data?.map((item,ind) => {
         const imgUrl = getDriveImageUrl(item.img)
        //  console.log(ind,imgUrl);
         
          return (<div
            key={ind+1}
            className="  p-4 flex flex-col items-center"
          >
            {/* Badge + Icons */}
            <div className="w-full flex justify-between items-center mb-2">
              <span className="bg-[#4B1E1E] text-white text-xs px-2 py-1 rounded-full">
                DEAL PRICE!
              </span>
              <div className="flex gap-2 text-[#4B1E1E]">
                <FaHeart className="cursor-pointer hover:text-red-500" />
                <FaShoppingCart className="cursor-pointer hover:text-green-600" />
              </div>
            </div>

            {/* Image */}
            <img
              src={imgUrl}
              alt={item.title}
              className="w-full h-40 object-contain mb-4"
            referrerPolicy="no-referrer"
            />


            {/* Title */}
            <p className="text-sm font-medium mb-2">{item.title}</p>

            {/* Price */}
            <div className="text-lg font-bold text-black">
              {item.price}{" "}
              <span className="line-through text-gray-400 text-sm">
                {item.oldPrice}
              </span>
              <span className="text-green-600 ml-2">{item.discount}</span>
            </div>

            {/* Shipping */}
            <div className="flex items-center text-gray-600 text-sm mt-2">
              <FaTruck className="mr-2" />
              Shipping in 2 Days
            </div>
          </div>)
})}
      </div>

      {/* View All Button */}
      <div className="mt-10">
        <button className="bg-[#4B1E1E] text-white px-6 py-2 rounded-full hover:bg-[#6B2E2E] transition flex items-center gap-2 mx-auto">
          <span className="text-lg">➕</span> VIEW ALL
        </button>
      </div>
    </section>
  );
}
