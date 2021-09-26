import { useEffect } from 'react'
import LinkItem, { LinkItemType } from 'components/LinkItem'
import NoContent from 'components/NoContent'
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
          {pagedLinks.map((link: LinkItemType) => {
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

  return <NoContent />
}

export default LinkList
