import React from 'react'

const WorkSection = () => {
  return (
    <fieldset className="border border-slate-500 rounded-sm  my-4 pb-0">
     
      {/* info section */}
      <div className="flex  flex-col md:flex-row flex-wrap justify-center">
        <span className="m-4">
          <h4>Profile</h4>
          <input
            type="text"
            name="Profile"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Organization</h4>
          <input
            type="org"
            name="text"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Location</h4>
          <input
            type="text"
            name="location"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Start date</h4>
          <input
            type="date"
            name="start_date"
            required
            className="border  w-[255px] outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>End date</h4>
          <input
            type="date"
            name="end_date"
            required
            className="border  w-[255px] outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
      </div>
    </fieldset>
  )
}

export default WorkSection
