import styled from 'styled-components'

export const StyledSelect = styled.select`
  color: ${(props) => props.theme.color.gray800};
  background-color: ${(props) => props.theme.color.white};
  border: 2px solid ${(props) => props.theme.color.gray200};
  border-radius: 0.8rem;
  padding: 0.8rem;
  transition: all 200ms ease 0s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  outline: 0;

  &:hover {
    border-color: ${(props) => props.theme.color.primary500};
  }

  &:focus {
    border-color: ${(props) => props.theme.color.primary600};
  }
`
