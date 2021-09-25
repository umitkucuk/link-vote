import styled from 'styled-components'

export type IconProps = {
  size?: number
}

export const IconWrapper = styled.div<IconProps>`
  display: inline-flex;
  font-size: ${({ size }) => (size ? `${size}rem` : 'inherit')};
`
