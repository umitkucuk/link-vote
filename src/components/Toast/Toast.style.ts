import styled, { css } from 'styled-components'

type ToastProps = {
  type: string
}

const TOAST_VARIANT = {
  success: css`
    background-color: ${(props) => props.theme.color.green500};
  `,
}

export const ToastsContainer = styled.div`
  position: fixed;
  top: 3.2rem;
  left: 0;
  right: 0;
  margin: 0 1.6rem;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoint.tablet} {
    margin: 0 auto;
    max-width: 40rem;
  }
`

export const ToastWrapper = styled.div<ToastProps>`
  padding: 1.6rem;
  color: white;
  border-radius: 0.8rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 0.8rem;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  ${({ type }) => TOAST_VARIANT[type]};

  &:hover {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.15);
  }
`
