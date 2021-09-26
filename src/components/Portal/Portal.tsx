import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  children: React.ReactNode
}

const Portal = ({ children }: PortalProps): any => {
  const mount = document?.getElementById('portal-root')
  const el = document?.createElement('div')

  useEffect((): any => {
    mount?.appendChild(el)

    return () => mount?.removeChild(el)
  }, [mount, el])

  return createPortal(children, el)
}

export default Portal
