import { render, screen } from 'utils/test-utils'
import LinkList from '../LinkList'

describe('LinkList tests', () => {
  const onVote = jest.fn()
  const onRemove = jest.fn()
  const onPageChange = jest.fn()

  const links = [
    {
      id: '8Emah8ozzb',
      name: 'Google',
      url: 'https://www.google.com/',
      points: 10,
      created: 1632520011700,
      updated: 1632520011700,
    },
    {
      id: 'Wek213cz2W',
      name: 'Apple',
      url: 'https://www.apple.com/',
      points: 9,
      created: 1632520011700,
      updated: 1632520011700,
    },
  ]

  it('should render NoContent', () => {
    render(
      <LinkList
        links={[]}
        page={1}
        onVote={onVote}
        onRemove={onRemove}
        onPageChange={onPageChange}
      />,
    )
    expect(screen.getByTestId('no-content')).toBeInTheDocument()
  })

  it('should render link lists', () => {
    render(
      <LinkList
        links={links}
        page={1}
        onVote={onVote}
        onRemove={onRemove}
        onPageChange={onPageChange}
      />,
    )
    const listedLinks = screen.getAllByTestId('link-item')
    expect(listedLinks).toHaveLength(links.length)
  })
})
