import { sortLinks, getLinksByPage, setDataToStorage } from '../utils'
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

  it('should set item into localStorage correctly', () => {
    setDataToStorage('links', TEST_LINKS)
    expect(window.localStorage.setItem).toHaveBeenCalledTimes(1)
  })
})
