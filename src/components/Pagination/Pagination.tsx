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
    if (page !== newPage) {
      setPage(newPage)
      onChange(newPage)
    }
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
      <PaginationWrapper>
        <Button
          icon="chevron-left"
          size="small"
          margin="0.6rem"
          isDisabled={page === firstPage}
          onClick={goPrev}
        />
        <>
          {[...Array(totalPages)].map((_, index) => {
            const item = index + 1
            return (
              <Button
                variant={getButtonVariant(item)}
                size="small"
                key={item}
                margin="0.6rem"
                onClick={() => handleChange(item)}
              >
                {item}
              </Button>
            )
          })}
        </>
        <Button
          icon="chevron-right"
          size="small"
          margin="0.6rem"
          isDisabled={page === totalPages}
          onClick={goNext}
        />
      </PaginationWrapper>
    )
  }

  return null
}

export default memo(Pagination)
