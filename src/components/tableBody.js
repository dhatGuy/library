import React from 'react';

const TableBody = ({title, author, pages, read, toggleRead, removeRow, id}) => {
  return (
    <tr className="border-b-2 text-center">
      <td className="">{title}</td>
      <td className="">{author}</td>
      <td className="">{pages}</td>
      <td className="cursor-pointer"
          onClick={()=>toggleRead()}>
            {read}
      </td>
      <td className="text-sm px-2">
        <button className="bg-blue-500 hover:bg-red-500 text-white p-1 rounded-sm" id={id} onClick={()=>removeRow()}>Delete</button>
      </td>
    </tr>
  )
}

export default TableBody;
