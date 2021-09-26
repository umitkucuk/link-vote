import { LinkItemType } from 'components/LinkItem'

/**
 * It sorts the link items by the given sort type.
 * @param {Array} links - The local storage item key.
 * @param {string} sortType - The sort type.
 * @returns {Array}
 */
export const sortLinks = (
  links: LinkItemType[],
  sortType?: string,
): LinkItemType[] => {
  switch (sortType) {
    case 'DATE_DESC': {
      const sortedArray = links.sort(
        (linkOne, linkTwo) => linkTwo.created - linkOne.created,
      )
      return sortedArray
    }
    case 'POINTS_ASC': {
      const sortedArray = links.sort(
        (linkOne, linkTwo) =>
          linkOne.points - linkTwo.points || linkTwo.updated - linkOne.updated,
      )
      return sortedArray
    }
    case 'POINTS_DESC': {
      const sortedArray = links.sort(
        (linkOne, linkTwo) =>
          linkTwo.points - linkOne.points || linkTwo.updated - linkOne.updated,
      )
      return sortedArray
    }
    default:
      return links
  }
}

/**
 * It slices the links array by the page number.
 * @param {Array} links - The link items.
 * @param {number} page - The active page.
 * @param {number} itemsPerPage - Items per page.
 * @returns {Array}
 */
export const getLinksByPage = (
  links: LinkItemType[],
  page: number,
  itemsPerPage: number,
): LinkItemType[] | [] => {
  try {
    const startIndex = (page - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const pagedLinks = links.slice(startIndex, endIndex)
    return pagedLinks
  } catch (e) {
    console.error(`method=getLinksByPage error=${e}`)
    return []
  }
}

/**
 * It gets desired data from the local storage.
 * @param {string} name - The local storage item key.
 * @returns {Object}
 */
export const getDataFromStorage = (name: string) => {
  try {
    const storedData = localStorage.getItem(name)
    if (storedData) {
      const data = JSON.parse(storedData)
      return data
    }

    return null
  } catch (e) {
    console.error(`method=getDataFromStorage error=${e}`)
  }
}

/**
 * It sets the given data into the local storage.
 * @param {string} name - The local storage item key.
 * @param {any} data - The data to be stored.
 */
export const setDataToStorage = (name: string, data: any) => {
  try {
    if (data && typeof data === 'object') {
      const storedData = JSON.stringify(data)
      localStorage.setItem(name, storedData)
      return
    }

    localStorage.setItem(name, data)
  } catch (e) {
    console.error(`method=setDataToStorage error=${e}`)
  }
}
