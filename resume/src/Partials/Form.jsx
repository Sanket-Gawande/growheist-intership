import React from 'react'
import AdressInfo from './AdressInfo'
import PersonalInfo from './PersonalInfo'
import EducationInfo from "./EducationInfo"


const Form = () => {
  return (
    <>
      <form className="my-16 py-12 w-[90%] max-w-[1000px] mx-auto rounded-md">
       <PersonalInfo/>
       <AdressInfo/>
       <EducationInfo/>
      </form>
    </>
  )
}

export default Form
