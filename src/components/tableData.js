import React from 'react';

const TableData = ({title, author, pages, read, removeRow, id}) => {
  return (
    <tr>
      <td>{title}</td>
      <td>{author}</td>
      <td>{pages}</td>
      <td>{read}</td>
      <td>
        <button id={id} onClick={()=>removeRow()}>Delete</button>
      </td>
    </tr>
  )
}

export default TableData;
