import React, { useEffect, useState } from 'react'
import WS from './extras/WorkSection'
const WorkInfo = () => {
  const wsec = <WS />

  const [ws, setWs] = useState([])
  console.log({ ws })

  const AddWorkSection = (e) => {
    e.preventDefault()
    setWs([wsec, ...ws])
    
  }

  return (
    <fieldset className="border border-slate-500 rounded-sm  p-4 my-4 md:p-8 pb-0">
      <legend className="text-gray-200 py-2  text-md px-6 bg-slate-500 rounded-md mx-4">
        Work information
      </legend>
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

      {ws.map((item) => item)}

      <button
        onClick={AddWorkSection}
        className="my-2   mt-6 block mx-auto  text-2xl font-bold shadow-md shadow-slate-700/50 text-white bg-red-500 rounded-full w-12 h-12"
      >
        +
      </button>
    </fieldset>
  )
}

export default WorkInfo
