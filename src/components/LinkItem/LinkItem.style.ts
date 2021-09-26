import styled from 'styled-components'

export const LinkItemPointsWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 0.8rem;
  margin-right: 1.6rem;
  background-color: ${({ theme }) => theme.color.primary100};

  & > p {
    color: ${(props) => props.theme.color.primary600};
    font-size: 1.2rem;
    font-weight: 500;
    margin: 0;
  }
`

export const LinItemPointsText = styled.span`
  color: ${(props) => props.theme.color.primary600};
  font-weight: 600;
  margin-bottom: 4px;
`

export const LinkItemContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

export const LinkItemTitle = styled.h3`
  color: ${(props) => props.theme.color.gray800};
  margin-bottom: 0.4rem;
`

export const LinkItemDescription = styled.p`
  color: ${(props) => props.theme.color.gray500};
  font-size: 1.4rem;
  margin: 0 0 0.8rem 0;
`

export const LinkItemVote = styled.div`
  display: flex;
`

export const LinkItemRemove = styled.div`
  display: flex;
  position: absolute;
  top: 20%;
  right: 0;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.color.red600};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  @media ${(props) => props.theme.breakpoint.laptop} {
    opacity: 0;
    visibility: hidden;
    top: -1.6rem;
    right: -1.6rem;
  }
`

export const LinkItemWrapper = styled.a`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0.8rem;
  background-color: ${(props) => props.theme.color.white};
  border: 2px solid transparent;
  border-radius: 0.8rem;
  box-sizing: border-box;
  transition: all 0.1s ease;
  outline: 0;
  user-select: none;

  &:hover,
  &:focus {
    border-color: ${(props) => props.theme.color.primary600};

    ${LinkItemRemove} {
      opacity: 1;
      visibility: visible;
    }
  }
`
