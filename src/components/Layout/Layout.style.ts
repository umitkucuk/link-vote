import styled from 'styled-components'

export const Main = styled.main`
  margin: 0 auto;
  width: 100%;
  max-width: 60rem;
  padding: 1.6rem;
  box-sizing: border-box;

  @media ${(props) => props.theme.breakpoint.tablet} {
    padding: 8rem 1.6rem;
  }
`
