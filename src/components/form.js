import React from 'react';
import Input from "./input";

const Form = ({titleValue, authorValue, toggleShown, pagesValue, isShown, read, handleChange, submitForm, error}) => {
  return (
    <div className="container flex flex-col items-center ">
    <form className="" onSubmit={submitForm} style={{display: isShown ? 'block' : 'none' }}>
      <div className="cursor-pointer flex justify-end" onClick={toggleShown} >X
        <i class="fas fa-times" title="Close"></i>
      </div>
      <Input name="title" value={titleValue} handleChange={handleChange} type="text" placeholder="The Hobbit">
        <label htmlFor="title">Title</label>
      </Input>
      {error.length < 5 && <span>Cannot be empty</span>}
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
      <button
        className="text-sm bg-blue-500 hover:bg-blue-400 mt-2 text-white p-1 rounded-sm"
        style={{display: isShown ? 'none' : "block"}}
        onClick={toggleShown}
        >Add Book
      </button>
    </div>
  )
}

export default Form;