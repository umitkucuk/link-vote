import { render, screen, fireEvent } from 'utils/test-utils'
import TextField from '../TextField'

describe('TextField tests', () => {
  const onChange = jest.fn()

  it('should render correctly', () => {
    render(
      <TextField
        name="name"
        label="Name"
        onChange={onChange}
        data-testid="name-input"
      />,
    )

    const input = screen.getByTestId('name-input')
    expect(input).toBeInTheDocument()

    fireEvent.change(input, { target: { value: 'John Doe' } })
    expect(onChange).toHaveBeenCalled()
    expect(input).toHaveValue('John Doe')
  })
})
