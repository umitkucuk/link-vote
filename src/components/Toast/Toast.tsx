import { useEffect, memo } from 'react'
import { ToastWrapper, ToastsContainer } from './Toast.style'

export interface ToastProps {
  id?: string
  content: React.ReactNode
  type?: 'success'
  autoDismiss?: boolean
  duration?: number
  remove: () => void
}

export const ToasterRoot = ({ children }) => (
  <ToastsContainer>{children}</ToastsContainer>
)

const Toast = ({
  content,
  type = 'success',
  autoDismiss,
  duration = 2000,
  remove,
  ...rest
}: ToastProps) => {
  useEffect(() => {
    if (autoDismiss) {
      const timeout = setTimeout(remove, duration)

      return () => clearTimeout(timeout)
    }
  }, [autoDismiss])

  return (
    <ToastWrapper type={type} onClick={remove} {...rest}>
      {content}
    </ToastWrapper>
  )
}

export default memo(Toast)
