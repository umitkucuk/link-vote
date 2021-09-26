import { renderHook, act } from '@testing-library/react-hooks'
import useForm from '../useForm'
import useModal from '../useModal'

describe('useForm tests', () => {
  it('should work with no initial value', () => {
    const { result } = renderHook(() => useForm())
    expect(result.current.formData).toEqual({})
  })

  it('should set form values', () => {
    const initialdata = {
      name: '',
    }
    const { result } = renderHook(() => useForm(initialdata))

    act(() => {
      result.current.setValue('name', 'John')
    })

    expect(result.current.formData.name).toBe('John')

    act(() => {
      result.current.clear()
    })

    expect(result.current.formData.name).toBe('')
  })
})

describe('useModal tests', () => {
  it('should work with no initial value', () => {
    const { result } = renderHook(() => useModal())
    expect(result.current.isOpen).toEqual(false)
  })

  it('should set visibility correctly', () => {
    const { result } = renderHook(() => useModal())

    act(() => {
      result.current.show()
    })
    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.hide()
    })
    expect(result.current.isOpen).toBe(false)
  })
})
