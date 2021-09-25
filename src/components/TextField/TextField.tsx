import { memo } from 'react'
import { HTMLInputProps } from 'utils/props'
import { Label, StyledInput } from './TextField.style'

export interface TextFieldProps extends HTMLInputProps {
  name: string
  label?: string
  onChange?: (e) => void
}

const TextField = ({
  name,
  label,
  onChange,
  ...rest
}: TextFieldProps): JSX.Element => {
  return (
    <>
      {label && <Label htmlFor={name}>{label}</Label>}
      <StyledInput type="text" name={name} onChange={onChange} {...rest} />
    </>
  )
}

export default memo(TextField)
