import React, { useEffect, useState } from "react";
import { FaArrowCircleRight, FaArrowCircleUp } from "react-icons/fa";

const ShpByRoom = () => {
  const [data, setdata] = useState(null);

  const getdata = async () => {
    try {
      await fetch("http://localhost:4000/shopbyroom/")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);

          setdata(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
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
        SHOP BY ROOM
      </h2>
      <p className="text-black font-bold">“Find your perfect match.”</p>
      <br />
      <br />
      <div className="grid md:grid-cols-3 gap-15 bg-white px-[8%] py-[35px]">
        {data?.map((ele) => {
          return (
            <div className="rounded-xl overflow-hidden">
              <img src={ele.img} className="w-full rounded-xl md:h-55" alt="" />
              <br />
              <div className="flex justify-between mx-[5px]">
                <div className="text-start">
                  <h2
                    style={{ fontFamily: "serif" }}
                    className="text-[#6f574c] font-bold text-[1.2rem]"
                  >
                    {ele.title.toUpperCase()}
                  </h2>
                  <p className="text-[0.9rem] text-gray-600">
                    {ele.desciption}
                  </p>
                </div>
                <div className="flex flex-col-reverse justify-end items-end gap-2 pt-2">
                  <h2
                    className="text-[#6f574c] font-bold text-[.8rem]"
                    style={{ fontFamily: "serif" }}
                  >
                    BUY NOW
                  </h2>
                  <FaArrowCircleUp className="text-[1.2rem] text-[#6f574c]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      
      <section 
      className="w-full py-15 md:pl-10"
      style={{backgroundImage:'url(https://image2url.com/images/1759054616497-4c1cab05-442a-4311-99bf-af96dd79f4e0.png)'}}
      >
 {/* Overlay Card */}
      <div className=" sm:w-[80%] bg-black/80 rounded-xl p-6 md:p-10 max-w-md text-white shadow-lg">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-4">
         
          <div>
        <img className="w-[70%] rounded-xl mx-auto" src="https://image2url.com/images/1759055325221-b57ae6ab-0b1a-4eec-9758-395439a67a05.jpg" alt="" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-xl md:text-2xl font-bold mb-3">
          Discover Premium Furnitures

        </h1>
       

            <FaArrowCircleRight className="text-lg text-center mx-auto" />
     
<br />
        {/* Subtext */}
        <p className="text-sm mb-6 leading-relaxed">
          "Your home should tell the story of who you are, and be a collection of what you love."
        </p>

        <button className="bg-white  font-bold text-[#6f574c] px-3 py-2 rounded-full hover:bg-[#6B2E2E] transition flex items-center gap-2">
             <img className="  w-7 h-7 rounded-xl m-0 bg-[#6f574c]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAC2ElEQVR4AeyVSchNYRjHD6EsyCxjxhAiK2RIYUGUIZKMZauUEAoRsmChrBAi00IokSmSKSnZmMtUCqGQzL/fvee999zjnu+79/tk5fb/ned5x+eec573OQ2jf/z7H7DcA29MZw8YBr2hCVSsSh9pR3bcDLfgM1yCrXAWPsEdsN0dW6NqC9iA1WvgCbjZOmwL6ALeYTdsM1gOreABbIHMfTMHWNQI9sFCmAgz4SR4R5iCvuCdhvkwBqbDUfDRY0pVU8A9TG0J/eE8VKIrTBoA7nsQ6xPCFOVAsVX0VuEOgRnwEaqR73g2C/qArwBTVLmArRleDXPBxZiq5bpFrFoKbaCgcgGXMHoRzEhMnXWdle5jUNy8ygWcw9Bu+BvayyYmGyavdMC+dHeFUxBk+pt9oa3twGU8WAAwBY3EGwVB7uPR6Rc60gEdfMug7wATrY2i6CpcgCOgDHYP5ww8hkGgtnO5DBaFHVhlwj3H8UYwUZQO6KH+kBvJX7y7vBdFo2NnILY5BIWAI0IHNum/pN0JckoHfENvMqvu0g66HTuPYhvMw9ixvMVulPTN+ndhIB3wBQP+e8GNzLCpOLNgMijL3GCceTAcroGy0nhuxcSzz2rVGecZ5JQOeJ9e3+EkbNAxnEPwDYK8A8teCBb6LWkS2mNj50Zs/3iHvxg4DB56TL21gB2Ow1fIKX2HdlrtTZChNuqByTWN9SXlrVzAp0zaCPuhHdRFfqp8UttY7BHC5FUuoCMbuHh+LE2+dJoVqz0zXefxWoFfoqyAP5lltr3H3oRk9aCZKSuNNdhv5BRm/YASZQV00msuvku/i+fwD8AEaApJ2bbfcb+bfgcN/Co5Kfg1BXTOdy4roSd4XNzMcuW58kj4vm0bzPFezFsGhazEL1FtAcNk3+diGm1hHJh5J7DrwbNmcjnuH6ErW5UGDDv4zy3ku+jYBDvBBEkWBbqyVW3A7J0qHPkNAAD//5lv9fUAAAAGSURBVAMA+65/OcNBZ5MAAAAASUVORK5CYII=" alt="" />
             <span className="text-center">
              KNOW MORE
              </span>
            </button>
      </div>
      </section>
    </div>
  );
};

export default ShpByRoom;
