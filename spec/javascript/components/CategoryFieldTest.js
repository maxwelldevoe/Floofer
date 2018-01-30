import CategoryField from '../../../app/javascript/components/CategoryField'

describe('', () => {
  let handleInput,
  wrapper

  beforeEach(() => {
    handleInput = jasmine.createSpy('handleInput.spy')
    wrapper = mount(
      <CategoryField
        label='Category'
        value='what state passes down'
        handleChange={ handleInput }
      />
    )
  })

  it('should have a label tag with a label of "Category"', () => {
    expect(wrapper.find('label').text()).toBe('Category')
  })

  it('should have an option tag with the proper value', () => {
    expect(wrapper.find('option').at(0).props().value).toEqual('')
    expect(wrapper.find('option').at(1).props().value).toEqual('Business')
    expect(wrapper.find('option').at(2).props().value).toEqual('Construction')
    expect(wrapper.find('option').at(3).props().value).toEqual('Entertainment')
    expect(wrapper.find('option').at(4).props().value).toEqual('Government')
    expect(wrapper.find('option').at(5).props().value).toEqual('Healthcare')
    expect(wrapper.find('option').at(6).props().value).toEqual('Law')
    expect(wrapper.find('option').at(7).props().value).toEqual('Technology')
  })

  it('should invoke the handleput function from props input is provided', () => {
    wrapper.find('select').simulate('change')
    expect(handleInput).toHaveBeenCalled()
  })
})

// {
//   value: 'what state passes down',
// }
