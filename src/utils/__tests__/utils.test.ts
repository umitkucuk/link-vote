import {
  sortLinks,
  getDataFromStorage,
  setDataToStorage,
  getLinksByPage,
  checkPageIsValid,
} from '../utils'
import { TEST_LINKS } from 'mocks/LINKS'

describe('sortLinks function tests', () => {
  it('should return the same link array when no sorting type provided', () => {
    expect(sortLinks(TEST_LINKS.input)).toStrictEqual(TEST_LINKS.input)
  })

  it('should return TEST_LINKS links by date desc', () => {
    expect(sortLinks(TEST_LINKS.input, 'DATE_DESC')).toStrictEqual(
      TEST_LINKS.expected1,
    )
  })

  it('should return sorted links by points asc', () => {
    expect(sortLinks(TEST_LINKS.input, 'POINTS_ASC')).toStrictEqual(
      TEST_LINKS.expected2,
    )
  })

  it('should return sorted links by points desc', () => {
    expect(sortLinks(TEST_LINKS.input, 'POINTS_DESC')).toStrictEqual(
      TEST_LINKS.expected3,
    )
  })
})

describe('localstorage operation tests', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    })
  })

  it('should get item into localStorage correctly', () => {
    getDataFromStorage('links')
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1)
  })

  it('should set item into localStorage correctly', () => {
    setDataToStorage('links', TEST_LINKS)
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
  })
})

describe('getLinksByPage function tests', () => {
  const links = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const itemsPerPage = 5

  it('should get items by page correctly', () => {
    let currentPage = 1

    const firstPage = getLinksByPage(links, currentPage, itemsPerPage)
    expect(firstPage).toStrictEqual([1, 2, 3, 4, 5])

    currentPage = 2
    const secondPage = getLinksByPage(links, currentPage, itemsPerPage)
    expect(secondPage).toStrictEqual([6, 7, 8, 9, 10])

    currentPage = 3
    const thirdPage = getLinksByPage(links, currentPage, itemsPerPage)
    expect(thirdPage).toStrictEqual([11])
  })
})

describe('checkPageIsValid helper function tests', () => {
  it('should return correct value', () => {
    expect(checkPageIsValid(0, 2)).toBe(false)
    expect(checkPageIsValid(1, 1)).toBe(false)
    expect(checkPageIsValid(2, 1)).toBe(true)
  })
})
