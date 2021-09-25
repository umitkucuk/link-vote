import React from 'react'
import { StyledText } from './Text.style'

export interface TextProps {
  elementType?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  children: React.ReactNode
}

const Text = ({
  elementType = 'span',
  children,
  ...rest
}: TextProps): JSX.Element => {
  return (
    <StyledText as={elementType} {...rest}>
      {children}
    </StyledText>
  )
}

export default Text
