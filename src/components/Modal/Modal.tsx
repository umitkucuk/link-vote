import React, { memo } from 'react'
import Portal from 'components/Portal'
import Button from 'components/Button'
import {
  ModalWrapper,
  ModalInner,
  ModalHeader,
  ModalClose,
  ModalAction,
} from './Modal.style'

export interface ModalProps {
  isOpen?: boolean
  onOK?: () => void
  onClose?: () => void
  header?: string
  children?: React.ReactNode
}

const ModalContent = ({ header, onOK, onClose, children }: ModalProps) => {
  return (
    <ModalWrapper>
      <ModalInner>
        {header && <ModalHeader>{header}</ModalHeader>}
        {onClose && (
          <ModalClose>
            <Button icon="close" onClick={onClose} iconOnly />
          </ModalClose>
        )}
        {children}
        <ModalAction>
          {onOK && (
            <Button
              variant="primary"
              onClick={onOK}
              margin="0 0.8rem"
              data-testid="modal-confirm"
            >
              OK
            </Button>
          )}
          <Button
            variant="subtle"
            onClick={onClose}
            margin="0 0.8rem"
            data-testid="modal-cancel"
          >
            CANCEL
          </Button>
        </ModalAction>
      </ModalInner>
    </ModalWrapper>
  )
}

const Modal = ({ isOpen = false, ...rest }: ModalProps) => {
  if (isOpen)
    return (
      <Portal>
        <ModalContent {...rest} />
      </Portal>
    )

  return null
}

export default memo(Modal)
