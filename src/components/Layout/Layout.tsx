import { memo } from 'react'
import { Main } from './Layout.style'

const Layout = ({ children }) => {
  return <Main>{children}</Main>
}

export default memo(Layout)
