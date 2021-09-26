import React, { memo } from 'react'
import Button from 'components/Button'
import Modal from 'components/Modal'
import { useModal } from 'utils/hooks'
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
  onRemove?: (link: LinkItemType) => void
}

const LinkItem = ({ link, onVote, onRemove }: LinkItemProps) => {
  const { id, name, url, points } = link
  const { isOpen, show, hide } = useModal()

  const handleOnVote = (e: React.SyntheticEvent, point: number) => {
    e.preventDefault()
    onVote && onVote(id, point)
  }

  const handleOnRemove = () => {
    onRemove && onRemove(link)
    hide()
  }

  const showRemoveModal = (e: React.SyntheticEvent) => {
    e.preventDefault()
    show()
  }

  return (
    <>
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
            onClick={showRemoveModal}
            data-testid="remove"
          />
        </LinkItemRemove>
      </LinkItemWrapper>
      <Modal
        isOpen={isOpen}
        header="Remove Link"
        onOK={handleOnRemove}
        onClose={hide}
      >
        <p>Do you want to remove:</p>
        <strong>{name}</strong>
      </Modal>
    </>
  )
}

export default memo(LinkItem)
