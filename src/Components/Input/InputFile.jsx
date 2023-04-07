import React from 'react'
import InputCon from './InputCon'

const InputFile = (props) => {


const handleXpense = (data)=>{

let myExpense = {
 ...data
}
console.log(myExpense)
props.AddingExpense(myExpense)

}


  return (
    <div className='flex justify-center items-center w-full h-auto'>
        <InputCon handleXpense= {handleXpense}/>
    </div>
  )
}

export default InputFile