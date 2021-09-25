import { render, screen } from 'utils/test-utils'
import Icon from '../Icon'

describe('icon tests', () => {
  it('should render default button', () => {
    render(<Icon name="arrow-down" />)
    // expect(screen.getByText('Default')).toBeInTheDocument()
  })

  // it('should not render icon with incorrect icon name', () => {
  //   render(<Icon name="incorrect-icon" />)
  //   expect(screen.getByText('Default')).toBeInTheDocument()
  // })
})
