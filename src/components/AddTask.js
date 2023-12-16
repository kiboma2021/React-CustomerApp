import React from 'react'

const AddTask = ({customers,setCustomers,userInput,setUserInput}) => {

    function handleSubmit(e) {
        e.preventDefault();
        const set_id = Math.floor(Math.random()*10000)
        const new_customer = {
            id: set_id,
            name:e.target.customer_name.value,
            age: e.target.customer_age.value,
            employed: e.target.employee_status.value==='true'
        }
        setCustomers([...customers,new_customer])
        setUserInput("")
        console.log(new_customer)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Customer Name' name='customer_name' value={userInput.name} />
            <input type="number" placeholder='Age' name='customer_age' value={userInput.age} />
            <select name='employee_status' value={userInput.employed} >
                <option value="true">Employed</option>
                <option value="false">Unemployed</option>
            </select>
            <div>
                <span className='reset-btn'>Reset</span>
            </div>
            <button type='submit' className='submit-btn'> Submit</button>
        </form>
        <div className='user-input'>
            <h3>Name: <span className='user-output'> </span> </h3>
            <h3>Age <span className='user-output'> </span></h3>
        </div>      
    </div>
  )
}

export default AddTask
