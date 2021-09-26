import { render, screen, fireEvent } from 'utils/test-utils'
import Pagination from '../Pagination'

describe('Pagination tests', () => {
  const onChange = jest.fn()

  it('should not render pagination if there is no more than one page', () => {
    render(
      <Pagination
        activePage={1}
        totalItems={2}
        itemsPerPage={5}
        onChange={onChange}
      />,
    )

    const pagination = screen.queryByTestId('pagination')
    expect(pagination).not.toBeInTheDocument()
  })

  it('should prev/next buttons work correctly', () => {
    render(
      <Pagination
        activePage={2}
        totalItems={50}
        itemsPerPage={5}
        onChange={onChange}
      />,
    )

    const prevButton = screen.getByTestId('pagination-prev')
    const nextButton = screen.getByTestId('pagination-next')

    expect(prevButton).not.toHaveAttribute('disabled')
    expect(nextButton).not.toHaveAttribute('disabled')

    fireEvent.click(nextButton)
    expect(onChange).toHaveBeenCalledTimes(1)

    fireEvent.click(prevButton)
    expect(onChange).toHaveBeenCalledTimes(2)
  })

  it('should page buttons work correctly', () => {
    render(
      <Pagination
        activePage={2}
        totalItems={50}
        itemsPerPage={5}
        onChange={onChange}
      />,
    )

    const firstPage = screen.getAllByTestId('pagination-item')[0]
    fireEvent.click(firstPage)
    expect(onChange).toHaveBeenCalledTimes(1)
  })
})
