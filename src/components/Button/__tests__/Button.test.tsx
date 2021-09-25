import { render, screen } from 'utils/test-utils'
import Button from '../Button'

describe('button tests', () => {
  it('should render default button', () => {
    render(<Button>Default</Button>)
    expect(screen.getByText('Default')).toBeInTheDocument()
  })

  it('should render primary variant', () => {
    render(
      <Button variant="primary" size="medium" margin="0 0 8px 0">
        Primary
      </Button>,
    )
    expect(screen.getByText('Primary')).toBeInTheDocument()
  })

  it('should render with subtle variant', () => {
    render(<Button variant="subtle">Subtle</Button>)
    expect(screen.getByText('Subtle')).toBeInTheDocument()
  })

  it('should render with icon', () => {
    render(<Button icon="arrow-up">With Icon</Button>)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })

  it('should render with icon only', () => {
    render(<Button icon="arrow-up" iconOnly />)
    expect(screen.getByRole('presentation')).toBeInTheDocument()
  })
})
