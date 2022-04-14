import React, { useEffect, useState } from 'react'
import SkillsSection  from './extras/SkillsSection'
const SkillInfo = () => {
  const [ss, setss] = useState([])
  const SS = <SkillsSection />
  const AddSkillsSection = (e) => {
    e.preventDefault()
    setss([SS, ...ss])
  }
  return (
    <fieldset className="border border-slate-500 rounded-md  my-4 p-4 md:p-8">
      <legend className="text-gray-200 py-2  text-md px-6 bg-slate-500 rounded-md mx-4">
        Education details
      </legend>
      {/* info section */}
      <div className="flex  flex-col md:flex-row flex-wrap justify-center">
        <span className="m-4">
          <h4>Add your skills</h4>
          <input
            type="text"
            name="skills"
            list="skills"
            placeholder="eg. photoshop"
            className="border outline-none py-1 px-2 mx-2 rounded-md border-slate-400 my-2"
          />
          <datalist id="skills">
            <option value="html" />
            <option value="css" />
            <option value="javascript" />
            <option value="nodejs" />
            <option value="php" />
            <option value="json" />
            <option value="express" />
            <option value="reactjs" />
            <option value="nextjs" />
            <option value="mongoDB" />
            <option value="sql" />
          </datalist>
          <select
            name="skill_level"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          >
            <option value="25"> 25%</option>
            <option value="50"> 50%</option>
            <option value="75"> 75%</option>
            <option value="100"> 100%</option>
          </select>
        </span>
      {ss.map((item) => item)}
      </div>
      <button
        onClick={AddSkillsSection}
        className="my-2   mt-6 block mx-auto  text-2xl font-bold shadow-md shadow-slate-700/50 text-white bg-red-500 rounded-full w-12 h-12"
      >
        +
      </button>
    </fieldset>
  )
}

export default SkillInfo
