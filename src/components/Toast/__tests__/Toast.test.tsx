import { render, screen, fireEvent } from 'utils/test-utils'
import Toast, { ToasterRoot } from '../Toast'

describe('Toast tests', () => {
  const onRemove = jest.fn()

  it('should render correctly', () => {
    render(
      <Toast
        content="I am toast!"
        autoDismiss
        remove={onRemove}
        data-testid="toast"
      />,
    )

    expect(screen.getByText('I am toast!')).toBeInTheDocument()

    const toast = screen.getByTestId('toast')
    fireEvent.click(toast)
    expect(onRemove).toHaveBeenCalledTimes(1)
  })

  it('should render toast root wrapper correctly', () => {
    render(<ToasterRoot>Inside ToasterRoot</ToasterRoot>)

    expect(screen.getByText('Inside ToasterRoot')).toBeInTheDocument()
  })
})
