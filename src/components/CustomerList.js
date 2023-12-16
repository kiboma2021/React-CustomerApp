import { useState } from 'react'

const CustomerList = ({customers,setCustomers,handleDelte}) => {

  const [toggle, setToggle] = useState(true)

  function handleDelte(id) {
    setCustomers(customers.filter((customer)=>customer.id !==id)  )

  }


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
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {toggle && customers.map(customer =>
      <tr className={customer.employed?"employed":"unemployed"} >
        <td>{customer.id} </td>
        <td>{customer.name} </td>
        <td>{customer.age} </td>
        <td>{customer.employed? "Employed":"Unemployed"} </td>
        <td style={{display:'flex', justifyContent:'space-around'}}>
          <i className='fa fa-edit'></i>
          <i onClick={()=>handleDelte(customer.id)} className='fa fa-trash'></i>
        </td>
      </tr>



    )}
    </tbody>
    </table>
</div>





  )
}

export default CustomerList
