import React, { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Raj",
    role: "Quality Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We bought it both stylish and super comfortable. It instantly upgraded our living room!",
  },
  {
    name: "Arjun R.",
    role: "Research Strategist",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Fast delivery and amazing customer support. Highly recommend!",
  },
  {
    name: "Sneha",
    role: "Interior Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "The furniture fits perfectly in our space and looks incredible!",
  },
];

const CustomerReview = () => {
     const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
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
        CUSTOMER REVIEWS
      </h2>
      <p className="text-black font-bold mt-[5px]">“Loved by thousands of happy homes.”</p>
      <br />
      <br />
        <section className='w-full  ' style={{backgroundImage:"url(https://image2url.com/images/1759131101421-0beeb459-bb6b-49a0-8a6c-dd9cd4ac32f6.png)" }}>

 <div className='w-full h-full  bg-black/80'>
     <section className="w-full py-12 h-full  relative">
      <div className="flex justify-center h-full items-center gap-4">
        <button onClick={prevSlide} className="text-2xl text-gray-700 hover:text-gray-900">
          <FaArrowLeft />
        </button>

        {testimonials.map((t, index) => (
          <div
            key={index}
            className={`w-80 items-center text-center flex h-[80%] md:w-[40%] bg-white rounded-xl shadow-lg p-6 text-center transition-all duration-500 ${
              index === current ? "block" : "hidden"
            }`}
          >
            <div className=" mb-3 bg-[#62392f] text-white px-5 py-3 rounded-xl">
              <div className="w-16  rounded-full overflow-hidden border-2 border-brown-500">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                
              </div>
               <div className="flex justify-center mt-2 text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            </div>
            <div className="flex flex-col">

            <p className="text-gray-700 mb-2">"{t.text}"</p>
            <h3 className="font-bold">{t.name}</h3>
            <p className="text-sm text-gray-500">{t.role}</p>
            </div>
           
          </div>
        ))}

        <button onClick={nextSlide} className="text-2xl text-gray-700 hover:text-gray-900">
          <FaArrowRight />
        </button>
      </div>

      <p className="text-center mt-8 text-gray-600 italic text-sm">
        "THE BEST ROOMS HAVE SOMETHING TO SAY ABOUT THE PEOPLE WHO LIVE IN THEM."
      </p>
    </section>

 </div>
        </section>
        <br />
        <br />
    </div>
  )
}

export default CustomerReview