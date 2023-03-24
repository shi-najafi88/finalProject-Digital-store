import React from 'react'

export const TrTabelModalOrderCheck = ({item}) => {

  return (
    <>
    {
        item.map(i=>(     
       <tr className='tr-modalOrderCheck'>
       <td className='tableCheckOrder-tdOne'>{i.name}</td>
       <td className='tableCheckOrder-tdOne'>{(+i.price).toLocaleString("fa")}</td>
       <td className='tableCheckOrder-tdOne'>{(+i.count).toLocaleString("fa")}</td> 
       </tr>
        ))
    }
    </>
  )
}
