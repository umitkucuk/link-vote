import { memo } from 'react'
import Layout from 'components/Layout'
import LinkListHeader from 'components/LinkListHeader'
import LinkList from 'components/LinkList'
import Pagination from 'components/Pagination'
import { useGlobal } from 'utils/context'

type SortType = 'POINTS_ASC' | 'POINTS_DESC'

const Index = () => {
  const { state, dispatch } = useGlobal()

  const onVote = (id: number, point: number) => {
    if (!state.sortType) {
      dispatch({ type: 'SORT_LINKS', payload: 'POINTS_DESC' })
    }
    dispatch({ type: 'VOTE_LINK', payload: { linkId: id, linkPoint: point } })
  }

  const onRemove = (id: number) => {
    dispatch({ type: 'REMOVE_LINK', payload: id })
  }

  const onSort = (sortType: SortType) => {
    console.log(sortType)
    dispatch({ type: 'SORT_LINKS', payload: sortType })
  }

  const onPageChange = (page: number) => {
    if (page > 0) {
      dispatch({ type: 'CHANGE_PAGE', payload: page })
    }
  }

  return (
    <Layout>
      <LinkListHeader sortType={state.sortType} onSort={onSort} />
      <LinkList
        links={state.links}
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
