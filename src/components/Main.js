import React, { useState, useRef } from 'react'
import CustomerList from './CustomerList';

const Main = () => {
    const [customers, setCustomers] = useState ([
        {id: 1234, name: 'James Atoti', age: 26, employed: false},
        {id : 1245, name: 'Abraham Lincolin', age: 44, employed: true},
        {id: 6985, name: 'Jane Adongo', age:31, employed: true},
        {id: 6987, name: 'Fatma Mburu', age:19, employed: false},
    ]);

    const [toggle, setToggle] = useState(true)
    const [custName, setCustName] = useState("")
    const [custAge, setCustAge] = useState("")
   // const [employment, setEmployment] = useState(false)

   const employStatus = useRef(false)

    function handleDelte(id) {
        console.log('deleted', id)
        setCustomers(customers.filter(customer => customer.id != id))
    }

    function handleReset(){
        setCustAge("")
        setCustName("")
        employStatus.current.value = false;
    }

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
        <div className='toggle-btn'>
            <button onClick={()=> setToggle(!toggle)}>{toggle?"Hide All":"Show All"}</button>
        </div>
        
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
        <table>
            <thead>
                <tr>
                    <th>Customer ID </th>
                    <th>Customer Name</th>
                    <th>Age</th>
                    <th>Employment Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {toggle && customers.map(customer =>
                <CustomerList customer={customer} handleDelte={handleDelte} key={customer.id} />

            )}
            </tbody>
        </table>

    </section>
  )
}

export default Main
