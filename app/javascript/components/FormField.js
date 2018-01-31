import React from 'react'

const FormField = (props) => {
  return(
    <label>{ props.label }
      <input
        type='text'
        value={ props.value }
        name={ props.name }
        onChange={ props.handleChange }
      />
    </label>
  )
}

export default FormField
