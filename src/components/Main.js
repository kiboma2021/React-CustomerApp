import React, { useState } from 'react'

const Main = () => {
    const customers = [
        {id: 1234, name: 'James Atoti', age: 26, employed: false},
        {id : 1245, name: 'Abraham Lincolin', age: 44, employed: true},
        {id: 6985, name: 'Jane Adongo', age:31, employed: true},
        {id: 6987, name: 'Fatma Mburu', age:19, employed: false},
    ]

    const [toggle, setToggle] = useState(true)

  return (
    <section className='main'>
        <div className='toggle-btn'>
        <button onClick={()=> setToggle(!toggle)}>{toggle?"Hide All":"Show All"}</button>
        </div>
        
        <table>
            <thead>
                <tr>
                    <th>Customer ID </th>
                    <th>Customer Name</th>
                    <th>Age</th>
                    <th>Employment Status</th>
                </tr>
            </thead>
            <tbody>
                {toggle && customers.map(customer =>
                <tr>
                    <td>{customer.id} </td>
                    <td>{customer.name} </td>
                    <td>{customer.age} </td>
                    <td>{customer.employed? "Employed":"Unemployed"} </td>
                </tr>
            )}
            </tbody>
        </table>

    </section>
  )
}

export default Main
