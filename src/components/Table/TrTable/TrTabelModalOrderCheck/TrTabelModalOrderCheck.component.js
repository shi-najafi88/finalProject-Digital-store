import React from 'react'

export const TrTabelModalOrderCheck = ({item}) => {
  return (
    <>
    {
        item.map(i=>(     
       <tr>
       <td className='tableCheckOrder-tdOne'>{i.name}</td>
       <td className='tableCheckOrder-tdOne'>{i.price}</td>
       <td className='tableCheckOrder-tdOne'>{i.count}</td> 
       </tr>
        ))
    }
    </>
  )
}
