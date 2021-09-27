import { render, screen, fireEvent } from 'utils/test-utils'
import Select from '../Select'

describe('Select tests', () => {
  const onChange = jest.fn()

  it('should render correctly', () => {
    render(
      <Select value="POINTS_DESC" onChange={onChange} data-testid="select">
        <option value="POINTS_DESC">POINTS_DESC</option>
        <option value="POINTS_ASC">POINTS_ASC</option>
      </Select>,
    )

    const select = screen.getByTestId('select')
    fireEvent.change(select, { target: { value: 'POINTS_ASC' } })
    expect(onChange).toHaveBeenCalled()
    expect(select).toHaveValue('POINTS_ASC')
  })

  it('should set initial value correctly', () => {
    render(
      <Select value="" onChange={onChange} data-testid="select">
        <option value="">option</option>
      </Select>,
    )

    const select = screen.queryByTestId('select')
    expect(select).toHaveValue('')
  })
})
