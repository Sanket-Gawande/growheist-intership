import React, { useEffect, useState } from 'react'
import { Country, State } from 'country-state-city'
import { City } from 'country-state-city'
const AdressInfo = () => {
  const [countries, setCountries] = useState([])
  const [States, setStates] = useState([])
  const [city, setCity] = useState([])
  const [ccode, setccode] = useState(null)
  
  useEffect(async () => {
    const c = Country.getAllCountries()
    setCountries(c)
    
  }, [States])

  const getSatets = (code) => {
    const states = State.getStatesOfCountry(code)
    setStates(states)
    setccode(code)
  }
  function getCities(code) {
    const city = City.getCitiesOfState(ccode, code)
    setCity(city)
  }
  return (
    <fieldset className="border border-slate-500 rounded-sm  my-4 p-4 md:p-8">
      <legend className="text-gray-200 py-2  text-md px-6 bg-slate-500 rounded-md mx-4">
        Address info
      </legend>
      {/* info section */}
      <div className="flex  flex-col md:flex-row flex-wrap justify-center">
        <span className="m-4">
          <h4>Country</h4>
          <select
            name="country"
            id=""
            className="w-[255px] border outline-none  py-1 px-4 rounded-md border-slate-400 my-2"
            onInput={(e) => getSatets(e.target.value)}
          >
            <option value="null" selected> Select country</option>
            {countries.map((c) => {
              return (
                <option key={c.isoCode} value={c.isoCode}>
                  {c.name}
                </option>
              )
            })}
          </select>
        </span>
        <span className="m-4">
          <h4>State</h4>
          <select
            name="state"
            id=""
            className="w-[255px] border outline-none  py-1 px-4 rounded-md border-slate-400 my-2"
            onInput={(e) => getCities(e.target.value)}
          >
            <option value="null"> Select state</option>
            {States.map((s) => {
              return (
                <option key={s.isoCode} value={s.isoCode}>
                  {s.name}
                </option>
              )
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
            {city.map((s) => {
              return (
                <option key={s.isoCode} value={s.isoCode}>
                  {s.name}
                </option>
              )
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
          <input
            type="email"
            name="email"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
        <span className="m-4">
          <h4>Phone</h4>
          <input
            type="text"
            name="phone"
            id=""
            className="border outline-none py-1 px-4 rounded-md border-slate-400 my-2"
          />
        </span>
      </div>
    </fieldset>
  )
}

export default AdressInfo
