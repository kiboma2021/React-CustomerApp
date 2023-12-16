import React from 'react'

const AddTask = ({handleSubmit}) => {


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Customer Name' />
            <input type="text" placeholder='Age' />
            <select >
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
