import {
  useReducer,
  useContext,
  useEffect,
  createContext,
  Dispatch,
} from 'react'
import { LinkItemType } from 'components/LinkItem'
import { sortLinks, getDataFromStorage, setDataToStorage } from 'utils'

type InitialStateType = {
  links: LinkItemType[]
  sortType: string
  page: number
}

export interface AuthContextProps {
  state: InitialStateType
  dispatch: Dispatch<any>
}

const initialState = {
  links: [],
  sortType: '',
  page: 1,
}

export const GlobalContext = createContext<AuthContextProps>({
  state: initialState,
  dispatch: () => null,
})

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LINK': {
      const updatedLinks = [action.payload, ...state.links]
      const sortedLinks = sortLinks(updatedLinks, state.sortType)
      return {
        ...state,
        links: sortedLinks,
      }
    }

    case 'REMOVE_LINK': {
      const linkId = action.payload
      const linkIndex = state.links.findIndex(
        (link: LinkItemType) => link.id === linkId,
      )
      const updatedLinks = [...state.links]
      updatedLinks.splice(linkIndex, 1)
      // setDataToStorage('links', updatedLinks)
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
      const sortedLinks = sortLinks(updatedLinks, state.sortType)
      return {
        ...state,
        links: sortedLinks,
      }
    }
    case 'SORT_LINKS': {
      const sortType = action.payload
      const sortedLinks = sortLinks(state.links, sortType)

      return {
        ...state,
        links: sortedLinks,
        sortType,
      }
    }
    case 'LOAD_LINKS':
      return {
        ...state,
        links: action.payload,
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

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    console.log('GlobalContext rendered')
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

  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider')
  }

  return context
}
