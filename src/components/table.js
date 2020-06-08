import React from 'react';
import TableBody from "./tableBody";
import TableHeader from "./tableHeader"

const Table = ({data, removeRow, toggleRead}) => {
  return (
    <table className="md:w-1/2 w-full">
      <TableHeader />
      <tbody className="bookList">
        {data.length == 0 || data == undefined ? (
          <tr>
            <td colSpan="4" className="py-4 text-center">
              Empty library? <br/>Click the button below to add
            </td>
          </tr>
        ) : (
          data.map((row, index)=>{
            return (
              <TableBody
                key={index}
                id={index}
                title={row.title}
                author={row.author}
                pages={row.pages}
                read={row.read}
                removeRow={()=>removeRow(index)}
                toggleRead={()=>toggleRead(index)}
              />
              )
          })
        ) }
      </tbody>
    </table>
  )
}

export default Table;