import React from 'react'

const CategoryField = (props) => {
  let optionElements = props.categories.map((category) => {
    return(
      <option key={ category.id } value={ category.id }>{ category.name }</option>
    )
  })

  return(
    <div>
      <label>{ props.label }</label>
      <select value={ props.value } onChange={ props.handleChange }>
        <option value=''></option>
        { optionElements }
      </select>
    </div>
  )
}

export default CategoryField
