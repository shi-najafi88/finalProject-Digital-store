import React from 'react'
import { TrTable } from '../TrTable/TrTable.component'
import "./Table.scss"

export const Table = ({tableStatus,titleOne,titleTwo,titleThree,titleFour}) => {

  return (
  <>
    {tableStatus === 'tableOrder' ?
    <table className="table">
    <thead>
      <tr>
        <th>{titleOne}</th>
        <th>{titleTwo}</th>
        <th>{titleThree}</th>
        <th>{titleFour}</th>
      </tr>
    </thead>
    <tbody>
      <TrTable/>
      
      {/* {todoData.map((item) => (
        <TodoTr item={item} />
      ))} */}
    </tbody>
  </table>:''
  }
  </>
   
  )
}
