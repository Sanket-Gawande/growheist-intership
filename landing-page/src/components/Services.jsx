import React from 'react'
import { FaGlobe, FaDatabase, FaPhotoVideo } from 'react-icons/fa'
import { BiServer } from 'react-icons/bi'

const Services = () => {
  const services = [
    {
      iocn: '<FaGlobe/>',
      heading: 'Web Devlopment',
    },
    {
      iocn: 'BiServer',
      heading: 'Web Hosting',
    },
    {
      iocn: 'FaDatabase',
      heading: 'Databases',
    },
    {
      iocn: 'FaPhotoVideo',
      heading: 'Graphics design',
    },
    {
      iocn: 'FaPhotoVideo',
      heading: 'UI/UX design',
    },
    {
      iocn: 'FaPhotoVideo',
      heading: 'Backend Managment',
    },
    {
      iocn: 'FaPhotoVideo',
      heading: 'Headless CMS',
    },
    {
      iocn: 'FaPhotoVideo',
      heading: 'VideoGraphy',
    },
  ]
  return (
    <div className="w-full py-8 bg-sky-50">
      <h1 className="text-center text-2xl  border-2 border-slate-700 w-[250px] py-2 text-white bg-slate-700 mx-auto rounded-md">
        Our services
      </h1>
      <div className=" my-8  flex  flex-wrap items-center justify-center px-16">
        {services.map((service) => {
          return (
            <div key={service.heading} className="group m-4 border border-red-500 hover:border-slate-400 md:mx-8 mx-2 w-60  rounded-md h-66 shadow-md shadow-slate-600/20 hover:shadow-transparent transition-all  duration-200 p-4 bg-white hover:bg-red-500">
              {/* <img
              src="/web2.png"
              alt="web dev"
              className="w-24 h-24 rounded full block mx-auto my-2 "
            /> */}

              <FaGlobe className="w-24 h-24 rounded full block mx-auto my-2 text-red-500 group-hover:text-slate-100" />
              <h4 className="text-center group-hover:text-white font-extrabold  my-4 text-lg text-red-500">
                {service.heading}
              </h4>
              <p className="text-sm text-slate-600   leading-4 group-hover:text-slate-100 group-hover:font-bold">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Adipisci excepturi, saepe esse voluptas dolore, libero quae a
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Services
