import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { light } from 'theme'

const AllTheProviders = ({ children }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>
}

const customRender = (ui: JSX.Element, options?: any) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

export * from '@testing-library/react'

export { customRender as render }
