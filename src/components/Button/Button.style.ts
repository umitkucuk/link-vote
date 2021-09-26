import styled, { css } from 'styled-components'

type ButtonProps = {
  variant: string
  size: string
  shape: string
  iconOnly?: boolean
  margin?: string
}

const BUTTON_SHAPE = {
  default: css`
    border-radius: 0.8rem;
  `,
  circle: css`
    border-radius: 50%;
  `,
}

const FONT_SIZE = {
  small: '1.4rem',
  medium: '1.6rem',
}

const WIDTH_HEIGHT = {
  small: '2.8rem',
  medium: '3.2rem',
}

const BUTTON_SIZE = {
  small: css`
    font-size: ${FONT_SIZE.small};
    height: ${WIDTH_HEIGHT.small};
    min-width: 8rem;
    padding: 0 1.2rem;
  `,
  medium: css`
    font-size: ${FONT_SIZE.medium};
    height: ${WIDTH_HEIGHT.medium};
    min-width: 10.8rem;
    padding: 0 1.6rem;
  `,
}

const getButtonAppearance = (props: ButtonProps) => {
  const { variant } = props

  switch (variant) {
    case 'default':
      return css`
        color: ${({ theme }) => theme.color.gray600};
        background-color: ${({ theme }) => theme.color.gray200};

        &:hover {
          background-color: ${({ theme }) => theme.color.gray300};
        }
      `
    case 'primary':
      return css`
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.primary600};

        &:hover {
          background-color: ${({ theme }) => theme.color.primary500};
        }
      `
    case 'subtle':
      return css`
        color: ${({ theme }) => theme.color.primary600};
        background-color: transparent;

        &:hover {
          background-color: ${({ theme }) => theme.color.primary100};
        }
      `

    case 'danger':
      return css`
        color: ${({ theme }) => theme.color.red600};
        background-color: ${({ theme }) => theme.color.red100};

        &:hover {
          background-color: ${({ theme }) => theme.color.red200};
        }
      `
  }
}

const getButtonSize = (props: ButtonProps) => {
  const { size, iconOnly } = props

  if (iconOnly) {
    return css`
      font-size: ${FONT_SIZE[size]};
      min-width: ${WIDTH_HEIGHT[size]};
      height: ${WIDTH_HEIGHT[size]};
    `
  }

  return BUTTON_SIZE[size]
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  font-weight: 500;
  margin: ${({ margin }) => margin && `${margin}`};
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  transition: all 200ms ease 0s;

  ${(props) => getButtonSize(props)};
  ${(props) => getButtonAppearance(props)};

  ${({ shape }) => BUTTON_SHAPE[shape]};

  &:focus {
    box-shadow: rgba(66, 153, 225, 0.6) 0px 0px 0px 3px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
