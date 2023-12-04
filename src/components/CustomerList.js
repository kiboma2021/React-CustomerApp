import React from 'react'

const CustomerList = ({customer,handleDelte}) => {
  return (
    <tr className={customer.employed?"employed":"unemployed"} >
        <td>{customer.id} </td>
        <td>{customer.name} </td>
        <td>{customer.age} </td>
        <td>{customer.employed? "Employed":"Unemployed"} </td>
        <td onClick={()=>handleDelte(customer.id)}><span className='delete'>Delete</span></td>
    </tr>
  )
}

export default CustomerList
