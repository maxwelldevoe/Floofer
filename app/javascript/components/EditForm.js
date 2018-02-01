import React from 'react'

const EditForm = (props) => {




  return(
    <div>
      <h2>Edit Form</h2>
      <form>

        {/* Refactor */}
        <label>Rating</label>
        <select name="rating">
          <option></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label>Description</label>

        <input
          type='text'
          name='description'
        />

        <input type="submit" value="Submit" />
      </form>
    </div>


  )
}

export default EditForm
