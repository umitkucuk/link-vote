import { memo } from 'react'
import * as SVGIcon from 'assets/icons'
import { IconWrapper } from './Icon.style'

export type IconName =
  | 'arrow-down'
  | 'arrow-up'
  | 'chevron-left'
  | 'chevron-right'
  | 'close'
  | 'trash'

export interface IconProps {
  name: IconName | string
  size?: number
  role?: string
}

const renderSVG = (name: string, props) => {
  switch (name) {
    case 'arrow-down':
      return <SVGIcon.ArrowDown {...props} />
    case 'arrow-up':
      return <SVGIcon.ArrowUp {...props} />
    case 'chevron-left':
      return <SVGIcon.ChevronLeft {...props} />
    case 'chevron-right':
      return <SVGIcon.ChevronRight {...props} />
    case 'close':
      return <SVGIcon.Close {...props} />
    case 'trash':
      return <SVGIcon.Trash {...props} />
    default:
      return null
  }
}

const Icon = ({ name, size, ...rest }: IconProps): JSX.Element => {
  return <IconWrapper size={size}>{renderSVG(name, rest)}</IconWrapper>
}

export default memo(Icon)
