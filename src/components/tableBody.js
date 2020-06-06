import React from 'react';

const TableBody = ({title, author, pages, read, toggleRead, removeRow, id}) => {
  return (
    <tr className="border-2 text-center">
      <td className="w-3/5 border-2">{title}</td>
      <td className="w-2/5 border-2">{author}</td>
      <td className="w-1/5 border-2">{pages}</td>
      <td className="w-1/5 border-2 cursor-pointer"
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
