import {
  useReducer,
  useContext,
  useEffect,
  createContext,
  Dispatch,
} from 'react'
import { LinkItemType } from 'components/LinkItem'
import { getDataFromStorage, setDataToStorage } from 'utils'

type InitialStateType = {
  links: LinkItemType[]
  sortType: string
  page: number
}

export interface GlobalContextProps {
  state: InitialStateType
  dispatch: Dispatch<any>
}

const initialState = {
  links: [],
  sortType: 'DATE_DESC',
  page: 1,
}

export const GlobalContext = createContext<GlobalContextProps>({
  state: initialState,
  dispatch: () => null,
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LINK': {
      const updatedLinks = [...state.links, action.payload]
      setDataToStorage('links', updatedLinks)
      return {
        ...state,
        links: updatedLinks,
      }
    }
    case 'REMOVE_LINK': {
      const linkId = action.payload
      const linkIndex = state.links.findIndex(
        (link: LinkItemType) => link.id === linkId,
      )
      const updatedLinks = [...state.links]
      updatedLinks.splice(linkIndex, 1)
      setDataToStorage('links', updatedLinks)
      return {
        ...state,
        links: updatedLinks,
      }
    }
    case 'VOTE_LINK': {
      const { linkId, linkPoint } = action.payload
      const linkIndex = state.links.findIndex(
        (link: LinkItemType) => link.id === linkId,
      )
      const updatedLinks = [...state.links]
      updatedLinks[linkIndex] = {
        ...updatedLinks[linkIndex],
        points: updatedLinks[linkIndex].points + linkPoint,
        updated: new Date().getTime(),
      }
      setDataToStorage('links', updatedLinks)
      return {
        ...state,
        links: updatedLinks,
      }
    }
    case 'LOAD_LINKS':
      return {
        ...state,
        links: action.payload,
      }
    case 'CHANGE_SORT':
      return {
        ...state,
        sortType: action.payload,
      }
    case 'CHANGE_PAGE':
      return {
        ...state,
        page: action.payload,
      }
    default:
      throw new Error()
  }
}

export const GlobalProvider = ({ children, initialValue = {} }) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    ...initialValue,
  })

  // get stored data from localstorage if it is exist
  useEffect(() => {
    const storedLinks = getDataFromStorage('links')
    if (storedLinks) {
      dispatch({ type: 'LOAD_LINKS', payload: storedLinks })
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext)

  return context
}
