import React from 'react';
import Input from "./input";

const Form = ({titleValue, authorValue, toggleShown, pagesValue, isShown, read, handleChange, submitForm, error}) => {
  return (
    <>
    <form className="sm:w-1/2 w-full border-2 flex-col m-2 p-2 rounded-sm" onSubmit={submitForm} style={{display: isShown ? 'flex' : 'none' }}>
      <div className="cursor-pointer self-end" onClick={toggleShown} >
        X
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
      <fieldset className="bg-white m-2 rounded-lg">
        <p className="mx-2">Have you read the book before?</p>
        <Input name="read" checked={read == "yes"} value="yes" handleChange={handleChange} type="radio">
          <label htmlFor="yes">Yes</label>
        </Input>
        <Input name="read" checked={read == "no"} value="no" handleChange={handleChange} type="radio">
          <label htmlFor="no">No</label>
        </Input>
      </fieldset>
      <button
        type="submit"
        className="self-center text-sm bg-blue-500 hover:bg-blue-400 mt-2 text-white p-1 rounded-sm"
        >Submit
      </button>
    </form>
    <button
        className="text-sm bg-blue-500 hover:bg-blue-400 mt-2 text-white p-1 rounded-sm"
        style={{display: isShown ? 'none' : "block"}}
        onClick={toggleShown}
        >Add Book
      </button>
    </>
  )
}

export default Form;