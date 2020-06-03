import React from 'react';
import TableBody from "./tableBody";
import TableHeader from "./tableHeader"

const Table = ({data, removeRow, toggleRead}) => {
  return (
    <table>
      <TableHeader />
      <tbody>
        {data.length == 0 || data == undefined ? (
          <tr>
            <td colSpan="4">Library empty</td>
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