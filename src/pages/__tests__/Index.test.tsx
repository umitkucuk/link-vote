import { render, screen, fireEvent } from 'utils/test-utils'
import Index from '../Index'

describe('Index page tests', () => {
  const portalRoot = document.createElement('div')
  portalRoot.setAttribute('id', 'portal-root')
  document.body.appendChild(portalRoot)

  const toasterRoot = document.createElement('div')
  toasterRoot.setAttribute('id', 'toaster-root')
  document.body.appendChild(toasterRoot)

  beforeEach(() => {
    render(<Index />)
  })

  it('renders page correctly', () => {
    expect(screen.getByTestId('submit-link')).toBeInTheDocument()
  })

  it('should vote and sort links', () => {
    const firstItemUpVote = screen.getAllByTestId('up-vote')[0]
    const firstItemDownVote = screen.getAllByTestId('down-vote')[0]
    const orderSelect = screen.getByTestId('order-select')
    const paginationNext = screen.getByTestId('pagination-next')

    fireEvent.click(firstItemUpVote)
    fireEvent.click(firstItemDownVote)
    fireEvent.change(orderSelect, { target: { value: 'POINTS_DESC' } })
    fireEvent.click(paginationNext)
  })

  it('should remove a link', async () => {
    const firstItemRemove = screen.getAllByTestId('remove')[0]
    fireEvent.click(firstItemRemove)

    const modalConfirm = await screen.findByTestId('modal-confirm')
    fireEvent.click(modalConfirm)
  })
})
