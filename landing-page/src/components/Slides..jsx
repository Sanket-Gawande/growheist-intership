// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper'
import { useEffect, useState } from 'react'
import { FaEnvelope, FaPhone, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

export default function App() {
  const [users, setUsers] = useState([])
  useEffect(async () => {
    const response = await fetch('/users.json')
    const users = await response.json()
    setUsers(users)
    console.log({ users })
  }, [])
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="text-center">
        {users.length < 1 ? (
          <h4>Loading...</h4>
        ) : (
          users.results.map((user) => {
            return (
              <SwiperSlide>
                <div className=" w-auto md:w-[700px] px-8 py-8 h-auto md:h-[280px] mx-auto shadow-md shadow-slate-500/20 rounded-md flex-col md:flex-row flex justify-between items-center bg-white">
                  {/* about */}
                  <div className="flex flex-col  my-8 justify-center md:w-[40%]">
                    <img
                      src={user.picture.thumbnail}
                      className="mx-auto  w-24 h-24 rounded-full border border-red-500 block"
                      alt=""
                    />
                    <h4 className="my-4 font-semibold text-slate-700">
                      {' '}
                      {user.name.title} {user.name.first} {user.name.last}
                    </h4>
                    <p className="text-slate-500 text-[10px] font-bold border border-slate-200 text-left  pr-4  flex items-center">
                      <FaPhone className="mr-2 bg-slate-400 w-6 h-6 p-1 text-slate-700" />{' '}
                      {user.phone}
                    </p>
                    <p className="text-slate-500  my-2 text-[10px] font-bold border border-slate-200 text-left  pr-4  flex items-center">
                      <FaEnvelope className="mr-2 bg-slate-400 w-6 h-6 p-1 text-slate-700" />{' '}
                      {user.email}
                    </p>
                  </div>
                  <p className="md:w-[50%] relative text-[12px] text-left text-md text-slate-700">
                    <span className="absolute -left-6 top-0 text-slate-400">
                      <FaQuoteLeft />
                    </span>
                    <span className="absolute -bottom-4 right-4 text-slate-400">
                      <FaQuoteRight />
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt repellendus ratione vero nulla, sapiente placeat.
                    Sanket Iure commodi sit omnis assumenda dolor mollitia
                    voluptatem alias sunt, debitis libero facere dolores
                    quisquam.
                  </p>
                </div>
              </SwiperSlide>
            )
          })
        )}
      </Swiper>
    </>
  )
}
