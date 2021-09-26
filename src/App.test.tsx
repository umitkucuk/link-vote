import { pureRender, screen } from 'utils/test-utils'
import App from './App'

describe('App tests', () => {
  it('renders correctly', () => {
    pureRender(<App />)
  })
})
