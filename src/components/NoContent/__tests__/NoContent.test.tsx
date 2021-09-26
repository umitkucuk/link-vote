import { render, screen, fireEvent } from 'utils/test-utils'
import NoContent from '../NoContent'

describe('NoContent tests', () => {
  it('should render correctly', () => {
    render(<NoContent />)
    const noContentButton = screen.getByTestId('no-content-button')
    fireEvent.click(noContentButton)
    expect(noContentButton).toBeInTheDocument()
  })
})
