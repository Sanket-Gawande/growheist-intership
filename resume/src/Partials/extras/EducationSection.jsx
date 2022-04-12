import React, { useEffect, useState } from 'react'

const EducationSection = () => {
 
  return (
    <fieldset className="border border-slate-300  w-[90%] mx-auto rounded-sm  my-4 ">
    
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
      
    </fieldset>
  )
}

export default EducationSection
