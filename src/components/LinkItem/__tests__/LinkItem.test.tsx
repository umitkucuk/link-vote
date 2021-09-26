import { render, screen, fireEvent } from 'utils/test-utils'
import LinkItem from '../LinkItem'

describe('LinkItem tests', () => {
  const onVote = jest.fn()
  const onRemove = jest.fn()

  const link = {
    id: '8Emah8ozzb',
    name: 'Google',
    url: 'https://www.google.com/',
    points: 10,
    created: 1632520011700,
    updated: 1632520011700,
  }

  it('should render correctly', () => {
    render(<LinkItem link={link} onVote={onVote} onRemove={onRemove} />)
    expect(screen.getByText(link.name)).toBeInTheDocument()

    const upVoteButton = screen.getByTestId('up-vote')
    const downVoteButton = screen.getByTestId('down-vote')
    const removeButton = screen.getByTestId('remove')
    fireEvent.click(upVoteButton)
    fireEvent.click(downVoteButton)
    fireEvent.click(removeButton)

    expect(onVote).toHaveBeenCalled()
  })
})
