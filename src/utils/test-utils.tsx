import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { light } from 'theme'
import { GlobalProvider, ToasterProvider } from 'utils/context'
import { MOCK_LINKS } from 'mocks/LINKS'

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalProvider
        initialValue={{
          links: MOCK_LINKS,
        }}
      >
        <ToasterProvider>
          <Router>{children}</Router>
        </ToasterProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}

const customRender = (ui: JSX.Element, options?: any) => {
  return render(ui, { wrapper: AllTheProviders, ...options })
}

const pureRender = (ui: JSX.Element, options?: any) => {
  return render(ui, { ...options })
}

export * from '@testing-library/react'

export { customRender as render, pureRender }
