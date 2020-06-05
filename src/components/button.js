import React from 'react';

const Button = ({toggleShown, name}) => {
  return (
    <>
      <button onClick={toggleShown}>{name}</button>
    </>
  )
}

export default Button;