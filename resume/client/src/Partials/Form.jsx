import React, { useRef, ErrorBoundry } from 'react'
import AdressInfo from './AdressInfo'
import PersonalInfo from './PersonalInfo'
import EducationInfo from './EducationInfo'
import WorkInfo from './WorkInfo'
import SkillsInfo from './SkillsInfo'
import {AiFillFilePdf , AiOutlineFilePdf } from "react-icons/ai"
const Form = () => {
  const formRef = useRef()
  async function formSubmit(e) {
    e.preventDefault()
    console.log('sbumitted')
    const formdata = new FormData(e.target)
    const res = await fetch('http://localhost:8001/formdata', {
      body: JSON.stringify(formdata),
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    })
    const r = await res.json()
    console.log({ r })
  }

  return (
    <>
      <form
        action="http://localhost:8000/formdata"
        className="my-16 py-12 md:w-[90%] max-w-[1000px] px-4 md:px-0 mx-auto rounded-md"
        // onSubmit={formSubmit}
        method="post"
        ref={formRef}
      >
        <PersonalInfo />

        <AdressInfo />

        <EducationInfo />
        <WorkInfo />
        <SkillsInfo/>
        <button
          type="submit"
          className="text-white bg-red-500 block mx-auto my-16  rounded-md py-2 px-12"
        >
          Submit data & generate PDF
          <AiFillFilePdf className='inline-block mx-2 -my-2'/>
          {/* <AiOutlineFilePdf/> */}
        </button>
      </form>
    </>
  )
}

export default Form
