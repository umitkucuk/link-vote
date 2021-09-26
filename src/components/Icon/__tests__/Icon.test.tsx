import { render, screen } from 'utils/test-utils'
import Icon from '../Icon'

describe('icon tests', () => {
  it('should render icon correctly', () => {
    render(<Icon name="arrow-down" data-testid="arrow-icon" />)
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument()
  })

  it('should not render icon with incorrect icon name', () => {
    render(
      <Icon name="incorrect-icon" size={2.4} data-testid="incorrect-icon" />,
    )
    const icon = screen.queryByTestId('incorrect-icon')
    expect(icon).not.toBeInTheDocument()
  })
})
