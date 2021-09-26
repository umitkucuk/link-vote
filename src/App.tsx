import { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, light } from 'theme'
import { GlobalProvider, ToasterProvider } from 'utils/context'

const Index = lazy(() => import('pages/Index'))
const Add = lazy(() => import('pages/Add'))

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalProvider>
        <ToasterProvider>
          <Router>
            <>
              <GlobalStyle />
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/add" element={<Add />} />
                </Routes>
              </Suspense>
            </>
          </Router>
        </ToasterProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}

export default App
