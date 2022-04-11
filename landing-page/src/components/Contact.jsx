import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen md:bg-purple-50 flex flex-col md:flex-row items-center justify-center">
      <div className="md:min-h-[480px] h-full">
        <img
          className="w-full md:h-[515px] block mx-auto md:mx-0"
          src="https://us.123rf.com/450wm/ostapenko/ostapenko1811/ostapenko181100207/127461558-isometric-user-support-service-or-call-center-customer-service-banner-vector-illustration.jpg?ver=6"
          alt="contact-us"
        />
      </div>
      <div className="h-full min-h-[480px] w-full  px-4 mx-auto md:mx-0  md:w-[450px] bg-white py-8 pX-8">
        <form>
          <h2 className="text-center text-xl text-slate-800 my-2">
            Leave a message !
          </h2>
          <h4 className="mt-4 mb-2  text-slate-600">Full name</h4>
          <input
            type="text"
            className="input  w-full outline-none py-1 px-4 border rounded-md"
            required
          />
          <h4 className="mt-4 mb-2  text-slate-600">Email address</h4>
          <input
            type="text"
            className="input w-full  outline-none py-1 px-4 border rounded-md"
            required
          />
          <h4 className="mt-4 mb-2  text-slate-600">Phone number</h4>
          <input
            type="text"
            className="input w-full  outline-none py-1 px-4 border rounded-md"
            pattern="\+?\d{0,4}?\d{10}\"
            required
          />
          <h4 className="mt-4 mb-2  text-slate-600">Your query...</h4>
          <textarea
            type="text"
            className="input  w-full block outline-none py-1 px-4 border rounded-md"
            pattern="\+?\d{0,4}?\d{10}\"
            required
          />

          <button className="block bg-red-500 hover:bg-red-600 rounded-md text-white  py-2  px-4 mt-6">
            {' '}
            Send message
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
