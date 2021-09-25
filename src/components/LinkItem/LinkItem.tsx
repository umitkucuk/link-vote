import React, { memo } from 'react'
import Button from 'components/Button'
import {
  LinkItemWrapper,
  LinkItemPointsWrapper,
  LinItemPointsText,
  LinkItemContent,
  LinkItemTitle,
  LinkItemDescription,
  LinkItemVote,
  LinkItemRemove,
} from './LinkItem.style'

export type LinkItemType = {
  id: string
  name: string
  url: string
  points: number
  created: number
  updated: number
}

export interface LinkItemProps {
  link: LinkItemType
  onVote?: (id: string, point: number) => void
  onRemove?: (id: string) => void
}

const LinkItem = ({ link, onVote, onRemove }: LinkItemProps) => {
  const { id, name, url, points } = link

  const handleOnVote = (e: React.SyntheticEvent, point: number) => {
    e.preventDefault()
    onVote && onVote(id, point)
  }

  const handleOnRemove = (e: React.SyntheticEvent) => {
    e.preventDefault()
    onRemove && onRemove(id)
  }

  return (
    <LinkItemWrapper href={url} target="_blank" data-testid="link-item">
      <LinkItemPointsWrapper>
        <LinItemPointsText>{points}</LinItemPointsText>
        <p>POINTS</p>
      </LinkItemPointsWrapper>
      <LinkItemContent>
        <LinkItemTitle>{name}</LinkItemTitle>
        <LinkItemDescription>({url})</LinkItemDescription>
        <LinkItemVote>
          <Button
            variant="subtle"
            size="small"
            icon="arrow-up"
            margin="0 0.8rem 0 0"
            onClick={(e) => handleOnVote(e, 1)}
            data-testid="up-vote"
          >
            Up vote
          </Button>
          <Button
            variant="subtle"
            size="small"
            icon="arrow-down"
            onClick={(e) => handleOnVote(e, -1)}
            data-testid="down-vote"
          >
            Down vote
          </Button>
        </LinkItemVote>
      </LinkItemContent>
      <LinkItemRemove>
        <Button
          variant="danger"
          shape="circle"
          icon="trash"
          iconOnly
          onClick={handleOnRemove}
          data-testid="remove"
        />
      </LinkItemRemove>
    </LinkItemWrapper>
  )
}

export default memo(LinkItem)
