import React, { useState } from 'react'
import CustomerList from './CustomerList';
import AddTask from './AddTask';

const Main = ({customers,setCustomers}) => {
    
    const [userInput,setUserInput]=useState({});
    


  return (
    <section className='main'>
        <AddTask customers={customers} setCustomers={setCustomers} userInput={userInput} setUserInput={setUserInput} />
        <CustomerList customers={customers} setCustomers={setCustomers} userInput={userInput} setUserInput={setUserInput}  />
    </section>
  )
}

export default Main
