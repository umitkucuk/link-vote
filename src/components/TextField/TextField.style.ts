import styled from 'styled-components'

export const Label = styled.label`
  display: block;
  margin-bottom: 0.8rem;
`

export const StyledInput = styled.input`
  width: 100%;
  line-height: 2rem;
  font-size: 1.6rem;
  padding: 0.8rem 1.6rem;
  border: 2px solid ${(props) => props.theme.color.gray200};
  border-radius: 8px;
  margin-bottom: 1.6rem;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  outline: 0;
  transition: all 200ms ease 0s;

  &:hover {
    border-color: ${(props) => props.theme.color.primary500};
  }

  &:focus {
    border-color: ${(props) => props.theme.color.primary600};
  }
`
