import React, { useEffect, useState } from 'react'
import EducationSection from './extras/EducationSection'
const EducationInfo = () => {
  const [es , setes] = useState([])
  const ES = <EducationSection/>
  const AddEducationSection= (e)=>{
    e.preventDefault()
    setes([ES , ...es])
  }
  return (
    <fieldset className="border border-slate-500 rounded-md  my-4 md:p-8">
      <legend className="text-gray-200 py-2  text-md px-6 bg-slate-500 rounded-md mx-4">
        Education details
      </legend>
      {/* info section */}
      <div className="flex  flex-col md:flex-row flex-wrap justify-center">
        <span className="m-4">
          <h4>School/College name</h4>
          <input
            type="text"
            name="institute"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>City</h4>
          <input
            type="text"
            name="education_city"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Field of study</h4>
          <input
            type="text"
            name="field"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Degree</h4>
          <input
            type="text"
            name="pincode"
            required
            placeholder="HSC or BTech"
            className="border  w-[255px] outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>

        <span className="m-4">
          <h4>Year of Passout</h4>
          <input
            name="yearofpassout"
            type="text"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>


      </div>
      {
        es.map(item => item)
      }
      <button
        onClick={AddEducationSection}
        className="my-2   mt-6 block mx-auto  text-2xl font-bold shadow-md shadow-slate-700/50 text-white bg-red-500 rounded-full w-12 h-12"
      >
        +
      </button>
    </fieldset>
  )
}

export default EducationInfo
