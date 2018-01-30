import FormField from '../../../app/javascript/components/FormField'

describe('new floof form field', () => {
  let handleInput,
  wrapper

  beforeEach(() => {
    handleInput = jasmine.createSpy('handleInput.spy')
    wrapper = mount(
      <FormField
        label='Name:'
        value='what state passes down'
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
      onChange: jasmine.any(Function)
    })
  })

  it('should invoke the handleput function from props input is provided', () => {
    wrapper.find('input').simulate('change')
    expect(handleInput).toHaveBeenCalled()
  })
})
