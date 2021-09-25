import { useState, memo } from 'react'
import { useNavigate } from 'react-router-dom'
import Select from 'components/Select'
import Button from 'components/Button'
import { LinkListHeaderWrapper } from './LinkListHeader.style'

const orderList = [
  { id: 1, value: 'POINTS_DESC', text: 'Most voted (9 → 1)' },
  { id: 2, value: 'POINTS_ASC', text: 'Less voted (1 → 9)' },
]

const LinkedListHeader = ({ sortType, onSort }) => {
  const navigate = useNavigate()

  return (
    <LinkListHeaderWrapper>
      <Select value={sortType} onChange={onSort}>
        <option value="" disabled>
          Order by
        </option>
        {orderList.map((item) => (
          <option value={item.value} key={item.id}>
            {item.text}
          </option>
        ))}
      </Select>
      <Button variant="primary" onClick={() => navigate('/add')}>
        Submit a link
      </Button>
    </LinkListHeaderWrapper>
  )
}

export default memo(LinkedListHeader)
