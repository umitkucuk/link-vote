import { render, screen } from 'utils/test-utils'
import Modal from '../Modal'

describe('Modal tests', () => {
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'portal-root')
  document.body.appendChild(modalRoot)

  it('should modal is open', () => {
    render(<Modal header="Hello World" isOpen />)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })
})
