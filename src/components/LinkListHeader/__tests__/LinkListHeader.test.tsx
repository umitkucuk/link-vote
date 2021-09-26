import { render, screen, fireEvent } from 'utils/test-utils'
import LinkListHeader from '../LinkListHeader'

describe('LinkListHeader tests', () => {
  const onSort = jest.fn()

  it('should render correctly', () => {
    render(<LinkListHeader sortType="POINTS_DESC" onSort={onSort} />)
    const orderSelect = screen.getByTestId('order-select')
    const submitLink = screen.getByTestId('submit-link')

    expect(orderSelect).toBeInTheDocument()
    expect(submitLink).toBeInTheDocument()
    fireEvent.click(submitLink)
  })
})
