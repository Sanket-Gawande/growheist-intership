import React from 'react'
import {
  FaGoogle,
  FaInstagram,
  FaSearch,
  FaTelegram,
  FaWhatsapp,
} from 'react-icons/fa'

const Footer = ({ setSearchBox, searchBox }) => {
  return (
    <div className="sticky top-[100%] w-full py-1 bg-slate-700 border-t-4 border-red-500">
      <div className="flex justify-between px-4 md:px-12 border-b border-slate-400">
        <img src="/logo-dark.png" alt="logo" className="w-16 h-16 p-2" />
        <div className="flex justify-center text-white items-center space-x-4">
          <FaInstagram />
          <FaGoogle />
          <FaTelegram />
          <FaWhatsapp />
        </div>
      </div>
      {/* general info */}
      <div className="text-slate-300 flex justify-between w-[90%] mx-auto  md:flex-row flex-col items-center border-b border-slate-500 py-4">
        <p className="md:w-[400px] text-[12px]">
          <span className="text-lg text-slate-200 py-4 block font-bold">About</span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi delectus
          sit iusto, similique non in architecto voluptatem labore accusamus
          optio quia, repellendus magnam sunt provident maiores molestias earum
          pariatur, officiis eaque aliquid iure cumque dolorem quas.
        </p>
        <div className="md:w-[450px]">
          <ul className=" my-8 flex text-sm flex-wrap">
            <li className="bg-slate-500 m-2  py-2 px-4  rounded-md">
              <a href="/">Home</a>
            </li>
            <li className="bg-slate-500 m-2  py-2 px-4  rounded-md">
              <a href="/">Blog</a>
            </li>
            <li className="bg-slate-500 m-2  py-2 px-4  rounded-md">
              <a href="/">About</a>
            </li>
            <li className="bg-slate-500 m-2  py-2 px-4  rounded-md">
              <a href="/">Events</a>
            </li>
            <li className="bg-slate-500 m-2  py-2 px-4  rounded-md">
              <a href="/">Contact</a>
            </li>
          </ul>
          <FaSearch
            onClick={() => {
              setSearchBox(!searchBox)
            }}
            className="text-white cursor-pointer bg-rose-500 p-2 w-16 h-8  text-md  mx-2 rounded-md"
          />
        </div>
      </div>

      {/* address */}
      <div className="flex flex-col   text-center md:text-left justify-between text-white md:flex-row  my-8 mx-auto w-[90%]">
        <div className="my-8">
          <h4>At State Bank Building , new Delhi 4400001</h4>
          <h4>+91 454 056 9954</h4>
          <h4>Growheist.business@gmail.com</h4>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7755.787839342693!2d77.2123282817334!3d28.6153106142973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e1!3m2!1sen!2sin!4v1648964513339!5m2!1sen!2sin"
          height="200"
          allowFullScreen=""
          loading="lazy"
          className="block mx-auto w-[350px] md:w-[400px]"
          referrerPolicy="no-referrer-when-downgrade"
          style={{}}
        ></iframe>
      </div>
      <p className="text-white py-4 rounded-md bg-slate-600 text-lg text-center w-[90%] mx-auto my-4">
        All rights are reserved to &copy;GrowHeist
      </p>
    </div>
  )
}

export default Footer
