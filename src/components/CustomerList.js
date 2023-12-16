import { useState } from 'react'

const CustomerList = ({customers,customer,handleDelte}) => {

  const [toggle, setToggle] = useState(true)


  return (
  <div>
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
            <th>Delete</th>
        </tr>
    </thead>
    <tbody>
        {toggle && customers.map(customer =>
      <tr className={customer.employed?"employed":"unemployed"} >
        <td>{customer.id} </td>
        <td>{customer.name} </td>
        <td>{customer.age} </td>
        <td>{customer.employed? "Employed":"Unemployed"} </td>
        <td onClick={()=>handleDelte(customer.id)}><span className='delete'>Delete</span></td>
      </tr>



    )}
    </tbody>
    </table>
</div>





  )
}

export default CustomerList
