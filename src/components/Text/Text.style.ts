import styled, { css } from 'styled-components'

type TextProps = {
  as?: string
}

const FONT = {
  h1: css`
    font-size: 4rem;
    line-height: 5.2rem;
  `,
  h2: css`
    font-size: 3.6rem;
    line-height: 4.4rem;
  `,
  h3: css`
    font-size: 3.2rem;
    line-height: 4rem;
  `,
  h4: css`
    font-size: 2.8rem;
    line-height: 3.6rem;
  `,
  h5: css`
    font-size: 2.4rem;
    line-height: 3.2rem;
  `,
  h6: css`
    font-size: 2rem;
    line-height: 2.8rem;
  `,
  p: css`
    font-size: 1.6rem;
  `,
}

export const StyledText = styled.span<TextProps>`
  margin: 0;
  color: ${(props) => props.theme.color.gray800};
  ${({ as }) => as && FONT[as]};
`
