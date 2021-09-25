import React, { useState, memo } from 'react'
import { StyledSelect } from './Select.style'

const Select = ({ value: initialValue, children, onChange, ...rest }) => {
  const [value, setValue] = useState(initialValue || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setValue(value)
    onChange(value)
  }

  return (
    <StyledSelect value={value} onChange={handleOnChange} {...rest}>
      {children}
    </StyledSelect>
  )
}

export default memo(Select)
