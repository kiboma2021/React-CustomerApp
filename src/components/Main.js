import React, { useState } from 'react'
import CustomerList from './CustomerList';

const Main = () => {
    const [customers, setCustomers] = useState ([
        {id: 1234, name: 'James Atoti', age: 26, employed: false},
        {id : 1245, name: 'Abraham Lincolin', age: 44, employed: true},
        {id: 6985, name: 'Jane Adongo', age:31, employed: true},
        {id: 6987, name: 'Fatma Mburu', age:19, employed: false},
    ]);

    const [toggle, setToggle] = useState(true)

    function handleDelte(id) {
        console.log('deleted', id)
        setCustomers(customers.filter(customer => customer.id != id))
    }

  return (
    <section className='main'>
        <div className='toggle-btn'>
            <button onClick={()=> setToggle(!toggle)}>{toggle?"Hide All":"Show All"}</button>
        </div>
        
        <form>
            <input type="text" placeholder='Customer Name' />
            <input type="text" placeholder='Age' />
            <select>
                <option value="true">Employed</option>
                <option value="false">Unemployed</option>
            </select>
            <div>
                <span className='reset-btn'>Reset</span>
            </div>
            <button type='submit' className='submit-btn'> Submit</button>
        </form>
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
