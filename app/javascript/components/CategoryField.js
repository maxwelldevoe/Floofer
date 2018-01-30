import React from 'react'

const CategoryField = (props) => {
  return(
    <div>
      <label>{ props.label }</label>
      <select value={ props.value } onChange={ props.handleChange }>
        <option value=''></option>
        <option value='Business'>Business</option>
        <option value='Construction'>Construction</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Government'>Government</option>
        <option value='Healthcare'>Healthcare</option>
        <option value='Law'>Law</option>
        <option value='Technology'>Technology</option>
      </select>
    </div>
  )
}

export default CategoryField
