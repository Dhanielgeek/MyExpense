import React, { useState } from 'react'

const Input = (props) => {

const [DateOF, setdateOF] = useState('')
const [Expense, setExpense] = useState('')
const [Amount, setAmount] = useState('')

const onhandledate = (e)=>{
  setdateOF(e.target.value)
  console.log(DateOF)
}
const onhandlexpense = (e)=>{
  setExpense(e.target.value)
  console.log(Expense)
}
const onhandleAmount = (e)=>{
  setAmount(e.target.value)
  console.log(Amount)
}

const onhandleSubmit = ((e)=>{

  e.preventDefault()
  let userInput = {
  
    DateOF : DateOF,
    Expense : Expense,
    Amount : Amount
  }
  props.handleXpense(userInput)
  console.log(userInput)
  setdateOF('')
  setExpense('')
  setAmount('')

})




  return (
    <div className=' bg-gray-100 w-full h-auto'>
      <div className='w-full h-16 bg-cyan-900 flex justify-center items-center rounded-sm'>
        <h2 className='text-white text-2xl'>MODIFY EXPENSE</h2>
      </div>
      <div className='w-full h-14 flex justify-around items-center flex-col'>
        <h3 className='text-xl font-semibold'>EXPENSE TOTAL :</h3>
        <p className='text-xl text-gray-500'>₦ 0.00</p>
      </div>
      <div className='w-full h-80 border '>
        <form onSubmit={onhandleSubmit}>
          <div className='w-full h-20  flex items-center'>
            <label className='text-gray-600 text-xl'>&nbsp;&nbsp;Current Date : </label>
            <input type='date' min='2018-01-01' max="2026-01-01" className='m-3' onChange={onhandledate}/>
          </div>
          <div className='w-full h-20  flex items-center'>
            <label className='text-gray-600 text-xl'>&nbsp;&nbsp;Expense Name : </label>
            <input type='text' className='w-3/4 m-2' onChange={onhandlexpense}/>
          </div>
          <div className='w-full h-20  flex items-center'>
            <label className='text-gray-600 text-xl'>&nbsp;&nbsp;Expense Amount : </label>
            <input type='number' min='0.1' step="0.1" className='w-3/4 m-2' onChange={onhandleAmount}/>
          </div>
          <div className='w-full h-20  flex justify-end items-center p-6'>
            <button className='w-36 h-12 bg-green-300 m-5 rounded-md font-medium hover:bg-green-500' type='submit'>ADD EXPENSE</button>
            <button className='w-36 h-12 bg-cyan-600 rounded-md text-white font-medium'>CLEAR EXPENSE</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Input