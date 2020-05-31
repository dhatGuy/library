import React from 'react';
import Input from "./input";

const Form = ({titleValue, authorValue, pagesValue, read, handleChange, submitForm}) => {
  return (
    <form onSubmit={submitForm}>
      <Input name="title" value={titleValue} handleChange={handleChange} type="text" placeholder="The Hobbit">
        <label htmlFor="title">Title</label>
      </Input>
      <Input name="author" value={authorValue} handleChange={handleChange} type="text" placeholder="J.R.R. Tolkien">
        <label htmlFor="author">Author</label>
      </Input>
      <Input name="pages" value={pagesValue} handleChange={handleChange} type="number" placeholder="295">
        <label htmlFor="pages">Pages</label>
      </Input>
      <legend>
        <Input name="read" checked={read == "yes"} value="yes" handleChange={handleChange} type="radio">
          <label htmlFor="yes">Yes</label>
        </Input>
        <Input name="read" checked={read == "no"} value="no" handleChange={handleChange} type="radio">
          <label htmlFor="no">No</label>
        </Input>
      </legend>
      <Input type="submit" value="Submit"/>
    </form>
  )
}

export default Form;