import { useCallback, memo } from 'react'
import Layout from 'components/Layout'
import LinkListHeader from 'components/LinkListHeader'
import LinkList from 'components/LinkList'
import { LinkItemType } from 'components/LinkItem'
import Pagination from 'components/Pagination'
import { sortLinks, checkPageIsValid } from 'utils'
import { useGlobal, useToaster } from 'utils/context'

type SortType = 'DATE_DESC' | 'POINTS_ASC' | 'POINTS_DESC'

const Index = () => {
  const { state, dispatch } = useGlobal()
  const { addToast } = useToaster()

  const onVote = (id: number, point: number) => {
    dispatch({ type: 'VOTE_LINK', payload: { linkId: id, linkPoint: point } })
  }

  const onRemove = (link: LinkItemType) => {
    addToast(
      <span>
        <strong>{link.name}</strong> removed.
      </span>,
    )
    dispatch({ type: 'REMOVE_LINK', payload: link.id })
  }

  const onSort = useCallback(
    (sortType: SortType) =>
      dispatch({ type: 'CHANGE_SORT', payload: sortType }),
    [],
  )

  const onPageChange = (page: number) => {
    if (checkPageIsValid(page, state.page)) {
      dispatch({ type: 'CHANGE_PAGE', payload: page })
    }
  }

  const handleSortLinks = useCallback(
    () => sortLinks(state.links, state.sortType),
    [state.links, state.sortType],
  )

  return (
    <Layout>
      <LinkListHeader sortType={state.sortType} onSort={onSort} />
      <LinkList
        links={handleSortLinks()}
        page={state.page}
        onVote={onVote}
        onRemove={onRemove}
        onPageChange={onPageChange}
      />
      <Pagination
        activePage={state.page}
        totalItems={state.links.length}
        itemsPerPage={5}
        onChange={onPageChange}
      />
    </Layout>
  )
}

export default memo(Index)
