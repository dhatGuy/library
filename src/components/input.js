import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  /* padding: 10px; */
`

const Input = ({type, value, placeholder, name, id, checked, children, handleChange}) => {
  return (
    <div>
      {children}
      <StyledInput
      type={type}
      value={value || ""}
      placeholder={placeholder}
      name={name}
      onChange={handleChange}
      id={name}
      checked={checked}
      />
    </div>
  )
}

export default Input;