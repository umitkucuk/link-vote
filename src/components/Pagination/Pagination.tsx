import { useState, useEffect, memo } from 'react'
import Button from 'components/Button'
import { PaginationWrapper } from './Pagination.style'

const firstPage = 1

export interface PaginationProps {
  activePage: number
  totalItems: number
  itemsPerPage: number
  onChange: (page: number) => void
}

const Pagination = ({
  activePage,
  totalItems,
  itemsPerPage,
  onChange,
}: PaginationProps) => {
  const [page, setPage] = useState(activePage)
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const getButtonVariant = (item: number) =>
    item === page ? 'primary' : 'default'

  const handleChange = (newPage: number) => {
    setPage(newPage)
    onChange(newPage)
  }

  const goPrev = () => {
    handleChange(page - 1)
  }

  const goNext = () => {
    handleChange(page + 1)
  }

  useEffect(() => {
    setPage(activePage)
  }, [activePage])

  if (totalPages > 1) {
    return (
      <PaginationWrapper data-testid="pagination">
        <Button
          icon="chevron-left"
          margin="0.6rem"
          isDisabled={page === firstPage}
          iconOnly
          onClick={goPrev}
          aria-label="Go previous page"
          data-testid="pagination-prev"
        />
        <>
          {[...Array(totalPages)].map((_, index) => {
            const item = index + 1
            return (
              <Button
                variant={getButtonVariant(item)}
                key={item}
                margin="0.6rem"
                iconOnly
                onClick={() => handleChange(item)}
                data-testid="pagination-item"
              >
                {item}
              </Button>
            )
          })}
        </>
        <Button
          icon="chevron-right"
          margin="0.6rem"
          isDisabled={page === totalPages}
          iconOnly
          onClick={goNext}
          aria-label="Go next page"
          data-testid="pagination-next"
        />
      </PaginationWrapper>
    )
  }

  return null
}

export default memo(Pagination)
