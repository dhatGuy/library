import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 5px;
`

const Input = ({type, value, placeholder, name, checked, children, handleChange}) => {
  return (
    <div
      className={type== "radio" ? "flex m-2 items-center justify-start" : "mb-4 flex flex-col items-start justify"}
      >
      {children}
      <StyledInput
      className={type !== "radio" && "submit" ? "rounded-sm w-full" : null}
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
