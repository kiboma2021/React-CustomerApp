import React, { useState } from 'react'
import CustomerList from './CustomerList';
import AddTask from './AddTask';

const Main = ({customers,setCustomers}) => {
    
    const [userInput,setUserInput]=useState({});
    
    function handleSubmit(event) {
        // event.preventDefault();
        // const set_id = Math.floor(Math.random()*10000)
        // const customer = {
        //     id: set_id,
        //     name:custName,
        //     age: custAge,
        //     employed: employStatus.current.value==='true'
        // }

        // setCustomers([...customers,customer])
        // handleReset()
    }

  return (
    <section className='main'>
        <AddTask handleSubmit={handleSubmit} userInput={userInput} setUserInput={setUserInput} />
        <CustomerList customers={customers} setCustomers={setCustomers} userInput={userInput} setUserInput={setUserInput}  />
    </section>
  )
}

export default Main
