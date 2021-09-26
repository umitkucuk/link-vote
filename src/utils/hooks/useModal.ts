import { useState } from 'react'

const useModal = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialState)

  const show = () => setIsOpen(true)
  const hide = () => setIsOpen(false)

  return {
    isOpen,
    show,
    hide,
  }
}

export default useModal
