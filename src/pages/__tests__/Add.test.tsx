import { render, screen, fireEvent } from 'utils/test-utils'
import Add from '../Add'

describe('Add page tests', () => {
  const toasterRoot = document.createElement('div')
  toasterRoot.setAttribute('id', 'toaster-root')
  document.body.appendChild(toasterRoot)

  it('renders page correctly', () => {
    render(<Add />)
    expect(screen.getByText('Add New Link')).toBeInTheDocument()
  })

  it('add page form elements work correctly', () => {
    render(<Add />)

    const nameInput = screen.getByTestId('name-input')
    fireEvent.change(nameInput, { target: { value: 'Uber' } })
    const urlInput = screen.getByTestId('url-input')
    fireEvent.change(urlInput, { target: { value: 'https://uber.com' } })
    const addButton = screen.getByTestId('add-button')
    fireEvent.click(addButton)

    expect(nameInput).toHaveValue('')
    expect(urlInput).toHaveValue('')

    const returnButton = screen.getByTestId('return-button')
    fireEvent.click(returnButton)
  })
})
