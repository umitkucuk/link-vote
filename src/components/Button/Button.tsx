import React from 'react'
import Icon, { IconName } from 'components/Icon'
import { HTMLButtonProps } from 'utils/props'
import { StyledButton } from './Button.style'

export interface ButtonProps extends Omit<HTMLButtonProps, 'size|type'> {
  variant?: 'default' | 'primary' | 'subtle' | 'danger'
  size?: 'small' | 'medium'
  icon?: IconName
  iconOnly?: boolean
  shape?: 'default' | 'circle'
  type?: 'button' | 'submit'
  margin?: string
  isDisabled?: boolean
  children?: React.ReactNode
}

const Button = ({
  variant = 'default',
  size = 'medium',
  shape = 'default',
  icon,
  type = 'button',
  isDisabled = false,
  children,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      shape={shape}
      type={type}
      disabled={isDisabled}
      {...rest}
    >
      {icon && <Icon name={icon} role="presentation" />}
      {children}
    </StyledButton>
  )
}

export default Button
