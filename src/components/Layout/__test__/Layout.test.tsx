import { render, screen } from 'utils/test-utils'
import Layout from '../Layout'

describe('layout tests', () => {
  it('should render layout', () => {
    render(<Layout>Layout</Layout>)
    expect(screen.getByText('Layout')).toBeInTheDocument()
  })
})
