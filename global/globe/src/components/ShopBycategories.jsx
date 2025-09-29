import React, { useEffect, useState } from "react";

const ShopBycategories = () => {
  const [data, setdata] = useState(null);

  const getdata = async () => {
    try {
      await fetch("https://global-tech-dliz.vercel.app/shopbycategories/")
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
        SHOP BY CATEGORIES
      </h2>
      <p className="text-black font-bold">
        More than furniture – a lifestyle upgrade.”
      </p>
      <br />
      <br />
      <div className="grid grid-cols-1 mx-10 sm:grid-cols-2 md:grid-cols-4 gap-10 md:mx-10 items-center text-center">
        {data?.map((ele, ind) => {
          return (
            <div key={ind + 1} className="bg-white rounded-xl shadow-md">
              <img
                className="w-[60%] md:w-[40%] h-55 mx-auto"
                src={ele.img}
                alt=""
              />
              <h2 className="font-bold text-[1.2rem] text-[#60392b]">
                {ele.title.toUpperCase()}
              </h2>
              <p className="text-black">{ele.desciption}</p>
              <br />
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <section
        className="w-full "
        style={{
          backgroundImage: `url(https://image2url.com/images/1759089265529-a101534f-7a43-46f2-930b-312dc99a3b9c.png)`,
          backgroundSize: "cover", 
          backgroundPosition: "center", 
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          style={{ fontFamily: "serif" }}
          className="text-white font-bold text-[2.5rem] text-center py-[10px]"
        >
          “REDEFINE COMFORT. REDEFINE LUXURY.”
        </h2>

        <p style={{ fontFamily: "cursive" }} className="text-white  pb-50">
          Crafted with premium fabrics, timeless design, and ultimate comfort.
        </p>
        <p
          style={{ fontFamily: "cursive" }}
          className="text-white text-[.9rem] pt-35"
        >
          Experience world-class craftsmanship, tailored to perfection
        </p>
        <br />
        <button className="bg-[#4B1E1E] mx-auto text-white px-3 py-2 rounded-full hover:bg-[#6B2E2E] transition flex items-center gap-2">
          <img
            className=" bg-white w-5 h-5 rounded-xl m-0"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACRElEQVR4AeyVy4uOURzHzyCW/AWklJWFIgu5i6SkFBFLIoWyICtyS4mNWKCwklgQO0nYUJRLEQu3ha3N1Exz/Xze6TTned/n+k5Ns5jp+zm/c55zzu/7Puec58yMMMl/04ZFC+7KrKFzFjSSExtNYHAP3IOX8AgamXZjeAuTTbAaloCmM4m11NTwOlm3g2aviS7rUuJ9qGXaxFCzPSReC99A/aXQdCVR08p8lQNIpK5S7IP18BlS/aShqbi37jGP8lXHULMDTN8IHyBPP3io4Raie1xoWmV4hgQHYTO8hTJ9pXMd7ABNCZ0qMzzJcNlKfANRe6n4pn3Ej7Afoj5R2QA7wT0nZFVkeJxhF+EwvIAo99F98m138fA5mPgQMeo9FQ+Xz9wOmuPKMzxG92VQfywSzlI/BSZ7TPSHHSVegDTXL9rKXBnTdJADVlCkA4ZpR82hsgCeQqqHNOaBfYSWRlrlWKHptrFqCO2GLtUqOt38XmIPRPVT+QfLINVyGvb9JrbLw+bpfRY72g197gHxnhykkRrSDOcoroD7N5forXObeB7S1YjzvI1e0TcELeUZtjoKCg+In8kl+v/DNTgB7i2hWk0NzfiAYiF4cc8n3oXa6sbQ5B6KL1TSZaRZrW4NqzMXjJhShgP8yNnQjeI8c2Tml73hd0Z6/AmN5RXofxA/rczkMkOP/m5Ge1H7XdblHXOOgN8mIasywycMXQQ3oK6Z4+4wfjHkfi5lhswJXsI3QwinQ328HFxOpnSqyrBzxgSfjAIAAP//KszZ/gAAAAZJREFUAwAarnE5MwFsQAAAAABJRU5ErkJggg=="
            alt=""
          />
          <span className="text-center">SHOP NOW</span>
        </button>
        <br />
      </section>
    </div>
  );
};

export default ShopBycategories;
