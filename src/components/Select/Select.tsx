import React, { useState, useEffect, memo } from 'react'
import { HTMLSelectProps } from 'utils/props'
import { StyledSelect } from './Select.style'

export interface SelectProps {
  value: any
  children?: React.ReactNode
  onChange: (value: any) => void
}

const Select = ({
  value: initialValue,
  children,
  onChange,
  ...rest
}: SelectProps) => {
  const [value, setValue] = useState<any>(initialValue || '')

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target
    setValue(value)
    onChange(value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <StyledSelect value={value} onChange={handleOnChange} {...rest}>
      {children}
    </StyledSelect>
  )
}

export default memo(Select)
