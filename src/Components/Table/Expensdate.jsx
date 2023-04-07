import React from 'react'

const Expensdate = (props) => {
  return (
    <div className='w-full flex justify-evenly item-center'>
        <div className=''>
            {props.DateOF.toLocaleString("en-US",{month: "long"})}
        </div>
        <div>
        {props.DateOF.toLocaleString("en-US",{day: "2-digit"})}
        </div>
        <div>
            {props.DateOF.getFullYear()}
        </div>
    </div>
  )
}

export default Expensdate