import React from 'react';

const Header = (props) => {
  return (
    <thead>
        <tr className="text-center border-b-2 border-t-2">
          <th>Title</th>
          <th>Author</th>
          <th className="px-2">Pages</th>
          <th className="px-2">Read</th>
          <th></th>
        </tr>
    </thead>
  )
}

export default Header;