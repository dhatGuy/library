import React from 'react';
import TableData from "./tableData";

const Table = ({data, removeRow}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Read</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index)=>{
          return (
          <TableData
            key={index}
            id={index}
            title={row.title}
            author={row.author}
            pages={row.pages}
            read={row.read}
            removeRow={()=>removeRow(index)}
          />
          )
        })}
      </tbody>
    </table>
  )
}

export default Table;