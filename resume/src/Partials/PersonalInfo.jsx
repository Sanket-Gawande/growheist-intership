import React from 'react'

const PersonalInfo = () => {
  return (
    <fieldset className="border border-slate-500 rounded-md my-4 p-8">
      <legend className="text-gray-200 py-2  text-md px-6 bg-slate-500 rounded-md mx-4">
        Personal information
      </legend>
      {/* info section */}
      <div className="flex  flex-col md:flex-row flex-wrap justify-center">
        <span className="m-4">
          <h4>First name</h4>
          <input
            type="text"
            name="fname"
            required
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Middle name</h4>
          <input
            type="text"
            name="mname"
            required
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Surname</h4>
          <input
            type="text"
            required
            name="lname"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Date of Birth</h4>
          <input
            type="date"
            name="dob"
            required
            id=""
            className="border  w-[255px] outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>

        <span className="m-4">
          <h4>Marietal status</h4>
          <select
            required
            name="lname"
            className="border outline-none w-[255px]  py-1 px-4 rounded-md border-slate-400 my-2"
          >
            <option value="married">Married</option>
            <option value="unmarried" selected>
              Unmarried
            </option>
          </select>
        </span>
      </div>
    </fieldset>
  )
}

export default PersonalInfo
