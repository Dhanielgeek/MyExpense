import React from 'react'
import Header from '../Header/Header'
import Table from '../Table/Table'

const ExpenseHome = () => {
  return (
    <div className='w-full bg-gray-200 h-full flex justify-between items-center flex-col'>
    <Header/>
    <br/>
    <br/>
    <Table/>
    </div>
  )
}

export default ExpenseHome