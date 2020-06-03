import React from 'react';

const TableBody = ({title, author, pages, read, toggleRead, removeRow, id}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pages}</td>
      <td onClick={()=>toggleRead()}>{read}</td>
      <td>
        <button id={id} onClick={()=>removeRow()}>Delete</button>
      </td>
    </tr>
  )
}

export default TableBody;
