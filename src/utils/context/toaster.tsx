// @ts-nocheck
import React, {
  useState,
  useContext,
  useMemo,
  createContext,
  useCallback,
} from 'react'
import { createPortal } from 'react-dom'
import { nanoid } from 'nanoid'
import Toast, { ToastType, ToasterRoot } from 'components/Toast'

const defaultOptions = {
  type: 'success',
  duration: 2000,
  autoDismiss: true,
}

export interface ToasterContextProps {
  addToast: (content: React.ReactNode, options?: any) => void
}

export const ToasterContext = createContext<ToasterContextProps>({
  addToast: () => {},
})

export const ToasterProvider = ({ children }) => {
  const [toasts, setToasts] = useState<ToastType[]>([])

  const addToast = useCallback((content, options = defaultOptions) => {
    const id = nanoid(10)

    const toast = {
      id,
      content,
      remove: () => {
        setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
      },
      ...options,
    }

    setToasts((prevToasts) => [...prevToasts, toast])
  }, [])

  const value = useMemo(
    () => ({
      addToast,
    }),
    [addToast],
  )

  return (
    <ToasterContext.Provider value={value}>
      {children}
      {toasts.length > 0 &&
        createPortal(
          <ToasterRoot>
            {toasts.map((toast) => (
              <Toast key={toast.id} {...toast} />
            ))}
          </ToasterRoot>,
          document?.getElementById('toaster-root'),
        )}
    </ToasterContext.Provider>
  )
}

export const useToaster = () => {
  const context = useContext(ToasterContext)

  return context
}
