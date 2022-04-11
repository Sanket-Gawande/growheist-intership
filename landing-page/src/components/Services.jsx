import React from 'react'
import { FaGlobe, FaDatabase, FaPhotoVideo } from 'react-icons/fa'
import { BiServer } from 'react-icons/bi'

const Services = () => {
  const services = [
    {
      iocn: 'https://png.pngtree.com/png-vector/20190611/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496210.jpg',
      heading: 'Web Devlopment',
    },
    {
      iocn: 'https://www.pngitem.com/pimgs/m/609-6092213_illustration-hosting-hd-png-download.png',
      heading: 'Web Hosting',
    },
    {
      iocn: 'https://www.marcobehler.com/images/guides/undraw_server_status_5pbv-042ff01d.svg',
      heading: 'Databases',
    },
    {
      iocn: 'https://pixerio.com/wp-content/uploads/2020/12/Graphic-Design-Company.png',
      heading: 'Graphics design',
    },
    {
      iocn: 'https://cdn.dribbble.com/users/1615584/screenshots/16491825/media/ffd297af6564a74a24058949a6a38792.jpg?compress=1&resize=400x300&vertical=top',
      heading: 'UI/UX design',
    },
    {
      iocn: 'https://toppng.com/uploads/preview/server-11550708871dh4sonj4jr.png',
      heading: 'Backend Managment',
    },
    {
      iocn: 'https://softprodigy.com/wp-content/uploads/2019/06/cms.png',
      heading: 'Headless CMS',
    },
    {
      iocn: 'https://p7.hiclipart.com/preview/279/196/15/video-editing-software-imovie-others.jpg',
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

              <img src={service.iocn} className="w-24 h-24 rounded full block mx-auto my-2 text-red-500 group-hover:text-slate-100" />
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
