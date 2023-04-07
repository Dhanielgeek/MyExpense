import React, { useState } from 'react'
// import Expensdate from './Expensdate'
import InputFile from '../Input/InputFile'


const Table = () => {

// const Tabledata = [
//     {
//         id : 1,
//         Expense : "Dog food",
//         Amount : 300,
//         DateOF : new Date("2022-02-04"),
//         icon : 'hola'
//     },
//     {
//         id : 2,
//         Expense : "Dog food",
//         Amount : 300,
//         DateOF : new Date("2022-02-04"),
//         icon : 'hola'
//     },
//     {
//         id : 3,
//         Expense : "Dog food",
//         Amount : 300,
//         DateOF : new Date("2022-02-04"),
//         icon : 'hola'
//     },
//     {
//         id : 4,
//         Expense : "Dog food",
//         Amount : 300,
//         DateOF : new Date("2022-02-04"),
//         icon : 'hola'
//     }
// ]

const [myData , setData] = useState([])

const AddingExpense = (data)=>{
setData([data, ...myData])
}



  return (
    <div className='w-full h-2/4 bg-gray-200 flex justify-center items-center'>
       <div className='w-3/4 h-1/2 bg-red-500'>
        <InputFile AddingExpense= {AddingExpense}/>
        <table className='w-full h-auto bg-gray-300 '>
            <tr className='w-full bg-cyan-800 h-20'>
            <th className='text-white'>EXPENSE</th>
            <th className='text-white'>AMOUNT</th>
            <th className='text-white'>DATE</th>
            <th className='text-white'>DELETE</th>
            </tr>
            {
                myData.map(({Expense,Amount,DateOF,icon})=>(
                    <tr className='w-full h-12'>
                        <td className='border text-center text-2xl text-gray-500 font-medium'>{Expense}</td>
                        <td className='border text-center text-2xl text-gray-500 font-medium'>{Amount}</td>
                        <td className='border text-center text-2xl text-gray-500 font-medium'>{DateOF}</td>
                        <td className='border text-center text-2xl text-gray-500 font-medium'>{icon}</td>
                    </tr>
                ))
            }
        </table>
       </div>
    </div>
  )
}

export default Table