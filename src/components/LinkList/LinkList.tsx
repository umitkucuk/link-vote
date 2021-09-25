import { useEffect } from 'react'
import LinkItem from 'components/LinkItem'
import { getLinksByPage } from 'utils'
import { LINKS_PER_PAGE } from 'enums'
import { LinkListWrapper, LinkListItems, LinkListItem } from './LinkList.style'

const LinkList = ({ links, page, onVote, onRemove, onPageChange }) => {
  const pagedLinks = getLinksByPage(links, page, LINKS_PER_PAGE)

  useEffect(() => {
    if (pagedLinks.length === 0) {
      onPageChange(page - 1)
    }
  }, [pagedLinks])

  if (pagedLinks.length > 0) {
    return (
      <LinkListWrapper>
        <LinkListItems>
          {pagedLinks.map((link) => {
            return (
              <LinkListItem key={link.id}>
                <LinkItem link={link} onVote={onVote} onRemove={onRemove} />
              </LinkListItem>
            )
          })}
        </LinkListItems>
      </LinkListWrapper>
    )
  }

  return (
    <div>
      <p>Link yok...</p>
    </div>
  )
}

export default LinkList
