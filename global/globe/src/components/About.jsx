import React from 'react'
import img from "../assets/aboutus.jpg"

const About = () => {
  return (
    <div className='w-[100%] bg-[#fef0e5] text-center'>
      <br />
      <br />
         <h2 style={{fontFamily:"serif"}}  className='text-[#60392b] font-bold text-[1.8rem]'>ABOUT US</h2>
         <p className='text-black font-bold'>“Crafting comfort, one piece at a time.”</p>
         <br />
         <br />
         <div className=' md:flex lg:flex bg-white mx-[10%] rounded-xl overflow-hidden  shadow-2xl'>
          <div className='py-[20px] text-start ml-[20px] sm:mr-[10px]'>
            <p>At Ask Me Furniture, we believe furniture isn’t just about utility – 
              it’s about creating spaces that inspire, relax, and connect people. Our collections blend fine craftsmanship, 
              durable materials, and modern design to give you furniture that lasts a lifetime.</p>
              <br />
            <p>With years of expertise, we curate and design pieces that adapt to your lifestyle
               – whether it’s a cozy home, a chic apartment, or a professional workspace.</p>
               <br />
               <h3 style={{fontFamily:"serif"}}  className='text-[#60392b] text-[1.6rem] font-bold'>
                “Furniture is the backbone of a beautiful home – strong, supportive, and full of character.”
               </h3>
               <br />
               <br />
                <button className="bg-[#4B1E1E] text-white px-2 py-2 rounded-full hover:bg-[#6B2E2E] transition flex items-center gap-2">
             <img className=" bg-white w-7 h-7 rounded-xl m-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAC2ElEQVR4AeyVSchNYRjHD6EsyCxjxhAiK2RIYUGUIZKMZauUEAoRsmChrBAi00IokSmSKSnZmMtUCqGQzL/fvee999zjnu+79/tk5fb/ned5x+eec573OQ2jf/z7H7DcA29MZw8YBr2hCVSsSh9pR3bcDLfgM1yCrXAWPsEdsN0dW6NqC9iA1WvgCbjZOmwL6ALeYTdsM1gOreABbIHMfTMHWNQI9sFCmAgz4SR4R5iCvuCdhvkwBqbDUfDRY0pVU8A9TG0J/eE8VKIrTBoA7nsQ6xPCFOVAsVX0VuEOgRnwEaqR73g2C/qArwBTVLmArRleDXPBxZiq5bpFrFoKbaCgcgGXMHoRzEhMnXWdle5jUNy8ygWcw9Bu+BvayyYmGyavdMC+dHeFUxBk+pt9oa3twGU8WAAwBY3EGwVB7uPR6Rc60gEdfMug7wATrY2i6CpcgCOgDHYP5ww8hkGgtnO5DBaFHVhlwj3H8UYwUZQO6KH+kBvJX7y7vBdFo2NnILY5BIWAI0IHNum/pN0JckoHfENvMqvu0g66HTuPYhvMw9ixvMVulPTN+ndhIB3wBQP+e8GNzLCpOLNgMijL3GCceTAcroGy0nhuxcSzz2rVGecZ5JQOeJ9e3+EkbNAxnEPwDYK8A8teCBb6LWkS2mNj50Zs/3iHvxg4DB56TL21gB2Ow1fIKX2HdlrtTZChNuqByTWN9SXlrVzAp0zaCPuhHdRFfqp8UttY7BHC5FUuoCMbuHh+LE2+dJoVqz0zXefxWoFfoqyAP5lltr3H3oRk9aCZKSuNNdhv5BRm/YASZQV00msuvku/i+fwD8AEaApJ2bbfcb+bfgcN/Co5Kfg1BXTOdy4roSd4XNzMcuW58kj4vm0bzPFezFsGhazEL1FtAcNk3+diGm1hHJh5J7DrwbNmcjnuH6ErW5UGDDv4zy3ku+jYBDvBBEkWBbqyVW3A7J0qHPkNAAD//5lv9fUAAAAGSURBVAMA+65/OcNBZ5MAAAAASUVORK5CYII=" alt="" />
             <span className="text-center">
              KNOW MORE
              </span>
            </button>
          </div>
          <img src={img} alt="" className='border-l border-black-500'  />

         </div>
         <br />
         <br />
         <br />
         <br />
         <br />
    </div>
  )
}

export default About