import TextField from '../../../app/javascript/components/TextField'

describe('new floof form field', () => {
  let handleInput,
  wrapper

  beforeEach(() => {
    handleInput = jasmine.createSpy('handleInput.spy')
    wrapper = mount(
      <TextField
        label='Name:'
        value='what state passes down'
        name='field'
        handleChange={ handleInput }
      />
    )
  })

  it('should have a label tag with a label of "Name"', () => {
    expect(wrapper.find('label').text()).toBe('Name:')
  })

  it('should have a text type input tag with the proper value', () => {
    expect(wrapper.find('input').props()).toEqual({
      type: 'text',
      value: 'what state passes down',
      name: 'field',
      onChange: jasmine.any(Function)
    })
  })

  it('should invoke the handleput function from props input is provided', () => {
    wrapper.find('input').simulate('change')
    expect(handleInput).toHaveBeenCalled()
  })
})
