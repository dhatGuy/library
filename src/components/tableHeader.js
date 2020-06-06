import React from 'react';

const Header = (props) => {
  return (
    <thead>
        <tr className="text-center">
          <th className="border-2">Title</th>
          <th className="border-2">Author</th>
          <th className="border-2 px-2">Pages</th>
          <th className="border-2 px-2">Read</th>
          <th className="border-2"></th>
        </tr>
    </thead>
  )
}

export default Header;