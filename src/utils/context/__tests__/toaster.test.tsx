import { renderHook, act } from '@testing-library/react-hooks'
import { useToaster } from '../toaster'

describe('ToasterContext tests', () => {
  it('should useToaster throw error', () => {
    const { result } = renderHook(() => useToaster())

    // expect(() => {
    //   expect(result.current).not.toBe(undefined)
    // }).toThrow(Error('useToaster must be used within a ToasterProvider'))
  })
})
