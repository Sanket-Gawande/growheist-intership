import React, { useEffect, useState } from 'react'

const AdressInfo = () => {
  const [countries, setCountries] = useState([])
  const token = import.meta.env.VITE_AUTH_TOKEN

  useEffect(async () => {
    const c = await fetch('https://www.universal-tutorial.com/api/countries/', {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    })
    const countries = await c.json()
    setCountries(countries)
    console.log({ countries })
  }, [])
  return (
    <fieldset className="border border-slate-500 rounded-md  my-4 p-8">
      <legend className="text-gray-200 py-2  text-md px-6 bg-slate-500 rounded-md mx-4">
        Education details
      </legend>
      {/* info section */}
      <div className="flex  flex-col md:flex-row flex-wrap justify-center">
        <span className="m-4">
          <h4>Country</h4>
          <select
            name="country"
            id=""
            className="w-[255px] border outline-none  py-1 px-4 rounded-md border-slate-400 my-2"
          >
            <option value="null"> Select country</option>
            {countries.map((c) => {
              return <option value={c}>{C}</option>
            })}
          </select>
        </span>
        <span className="m-4">
          <h4>State</h4>
          <select
            name="state"
            id=""
            className="w-[255px] border outline-none  py-1 px-4 rounded-md border-slate-400 my-2"
          >
            <option value="null"> Select state</option>
            {countries.map((c) => {
              return <option value={c}>{C}</option>
            })}
          </select>
        </span>
        <span className="m-4">
          <h4>City</h4>
          <select
            name="city"
            id=""
            className="w-[255px] border outline-none  py-1 px-4 rounded-md border-slate-400 my-2"
          >
            <option value="null"> Select city</option>
            {countries.map((c) => {
              return <option value={c}>{C}</option>
            })}
          </select>
        </span>
        <span className="m-4">
          <h4>PIN Code</h4>
          <input
            type="text"
            name="pincode"
            required
            id=""
            className="border  w-[255px] outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>

        <span className="m-4">
          <h4>Email</h4>
          <input type="email" name="email" id=""  className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2" />
        </span>
      </div>
    </fieldset>
  )
}

export default AdressInfo
