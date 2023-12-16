import React, { useState, useRef } from 'react'
import CustomerList from './CustomerList';

const Main = ({customers,setCustomers}) => {
    
    function handleSubmit(event) {
        event.preventDefault();
        const set_id = Math.floor(Math.random()*10000)
        const customer = {
            id: set_id,
            name:custName,
            age: custAge,
            employed: employStatus.current.value==='true'
        }

        setCustomers([...customers,customer])
        handleReset()
    }

  return (
    <section className='main'>

        
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=> setCustName(e.target.value)} type="text" placeholder='Customer Name' value={custName} />
            <input onChange={(e)=> setCustAge(e.target.value)} type="text" placeholder='Age' value={custAge} />
            <select ref={employStatus}>
                <option value="true">Employed</option>
                <option value="false">Unemployed</option>
            </select>
            <div>
                <span className='reset-btn' onClick={handleReset}>Reset</span>
            </div>
            <button type='submit' className='submit-btn'> Submit</button>
        </form>
        <div className='user-input'>
            <h3>Name: <span className='user-output'>{custName}</span> </h3>
            <h3>Age <span className='user-output'>{custAge} </span></h3>
        </div>


    </section>
  )
}

export default Main
