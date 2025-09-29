import React from 'react'
import herologo from '../assets/hero.jpg'
const Hero = () => {
  return (
      <section
        className="bg-cover bg-center min-h-[90vh] flex flex-col items-center text-center"
        style={{
          backgroundImage:
            `url('${herologo}')`, 
        }}
      >
       

        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl mt-[10vh]  md:text-5xl font-bold text-[#60392b] mb-4">
            FURNITURE THAT FEELS LIKE HOME
          </h2>
          <p className="text-gray-600 mb-8">
            Discover Timeless Designs, Modern Comfort, And Premium Quality –
            Crafted To Transform Every Corner Of Your Space.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            <button className="bg-[#4B1E1E] text-white px-3 py-2 rounded-full hover:bg-[#6B2E2E] transition flex items-center gap-2">
              <img className=" bg-white w-7 h-7 rounded-xl m-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAACRElEQVR4AeyVy4uOURzHzyCW/AWklJWFIgu5i6SkFBFLIoWyICtyS4mNWKCwklgQO0nYUJRLEQu3ha3N1Exz/Xze6TTned/n+k5Ns5jp+zm/c55zzu/7Puec58yMMMl/04ZFC+7KrKFzFjSSExtNYHAP3IOX8AgamXZjeAuTTbAaloCmM4m11NTwOlm3g2aviS7rUuJ9qGXaxFCzPSReC99A/aXQdCVR08p8lQNIpK5S7IP18BlS/aShqbi37jGP8lXHULMDTN8IHyBPP3io4Raie1xoWmV4hgQHYTO8hTJ9pXMd7ABNCZ0qMzzJcNlKfANRe6n4pn3Ej7Afoj5R2QA7wT0nZFVkeJxhF+EwvIAo99F98m138fA5mPgQMeo9FQ+Xz9wOmuPKMzxG92VQfywSzlI/BSZ7TPSHHSVegDTXL9rKXBnTdJADVlCkA4ZpR82hsgCeQqqHNOaBfYSWRlrlWKHptrFqCO2GLtUqOt38XmIPRPVT+QfLINVyGvb9JrbLw+bpfRY72g197gHxnhykkRrSDOcoroD7N5forXObeB7S1YjzvI1e0TcELeUZtjoKCg+In8kl+v/DNTgB7i2hWk0NzfiAYiF4cc8n3oXa6sbQ5B6KL1TSZaRZrW4NqzMXjJhShgP8yNnQjeI8c2Tml73hd0Z6/AmN5RXofxA/rczkMkOP/m5Ge1H7XdblHXOOgN8mIasywycMXQQ3oK6Z4+4wfjHkfi5lhswJXsI3QwinQ328HFxOpnSqyrBzxgSfjAIAAP//KszZ/gAAAAZJREFUAwAarnE5MwFsQAAAAABJRU5ErkJggg==" alt="" />
             <span className="text-center">
              SHOP NOW
              </span>
            </button>
            <button className="bg-[#4B1E1E] text-white px-3 py-2 rounded-full hover:bg-[#6B2E2E] transition flex items-center gap-2">
             <img className=" bg-white w-7 h-7 rounded-xl m-0" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAC2ElEQVR4AeyVSchNYRjHD6EsyCxjxhAiK2RIYUGUIZKMZauUEAoRsmChrBAi00IokSmSKSnZmMtUCqGQzL/fvee999zjnu+79/tk5fb/ned5x+eec573OQ2jf/z7H7DcA29MZw8YBr2hCVSsSh9pR3bcDLfgM1yCrXAWPsEdsN0dW6NqC9iA1WvgCbjZOmwL6ALeYTdsM1gOreABbIHMfTMHWNQI9sFCmAgz4SR4R5iCvuCdhvkwBqbDUfDRY0pVU8A9TG0J/eE8VKIrTBoA7nsQ6xPCFOVAsVX0VuEOgRnwEaqR73g2C/qArwBTVLmArRleDXPBxZiq5bpFrFoKbaCgcgGXMHoRzEhMnXWdle5jUNy8ygWcw9Bu+BvayyYmGyavdMC+dHeFUxBk+pt9oa3twGU8WAAwBY3EGwVB7uPR6Rc60gEdfMug7wATrY2i6CpcgCOgDHYP5ww8hkGgtnO5DBaFHVhlwj3H8UYwUZQO6KH+kBvJX7y7vBdFo2NnILY5BIWAI0IHNum/pN0JckoHfENvMqvu0g66HTuPYhvMw9ixvMVulPTN+ndhIB3wBQP+e8GNzLCpOLNgMijL3GCceTAcroGy0nhuxcSzz2rVGecZ5JQOeJ9e3+EkbNAxnEPwDYK8A8teCBb6LWkS2mNj50Zs/3iHvxg4DB56TL21gB2Ow1fIKX2HdlrtTZChNuqByTWN9SXlrVzAp0zaCPuhHdRFfqp8UttY7BHC5FUuoCMbuHh+LE2+dJoVqz0zXefxWoFfoqyAP5lltr3H3oRk9aCZKSuNNdhv5BRm/YASZQV00msuvku/i+fwD8AEaApJ2bbfcb+bfgcN/Co5Kfg1BXTOdy4roSd4XNzMcuW58kj4vm0bzPFezFsGhazEL1FtAcNk3+diGm1hHJh5J7DrwbNmcjnuH6ErW5UGDDv4zy3ku+jYBDvBBEkWBbqyVW3A7J0qHPkNAAD//5lv9fUAAAAGSURBVAMA+65/OcNBZ5MAAAAASUVORK5CYII=" alt="" />
             <span className="text-center">
              KNOW MORE
              </span>
            </button>
          </div>

          {/* Search */}
          <div className="flex items-center justify-between border border-[#60392b]  rounded-full px-4 py-2  shadow-md w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search Here"
              className="flex-1 outline-none px-2 text-sm"
            />
            <button className="text-gray-600">🔍</button>
          </div>
        </div>
      </section>
  )
}

export default Hero