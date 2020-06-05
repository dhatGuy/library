import React from 'react';

const TableBody = ({title, author, pages, read, toggleRead, removeRow, id}) => {
  return (
    <tr className="border-b-2">
      <td className="">{title}</td>
      <td>{author}</td>
      <td>{pages}</td>
      <td className="cursor-pointer" onClick={()=>toggleRead()}>{read}</td>
      <td>
        <button id={id} onClick={()=>removeRow()}>Delete</button>
      </td>
    </tr>
  )
}

export default TableBody;
