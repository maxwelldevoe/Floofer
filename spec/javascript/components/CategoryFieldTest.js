import CategoryField from '../../../app/javascript/components/CategoryField'

describe('Category Field', () => {
  let handleInput,
  wrapper,
  mockCategoryData

  beforeEach(() => {
    mockCategoryData = [{
      id: 1,
      name: 'Business'
    },
    {
      id: 2,
      name: 'Healthcare'
    },
    {
      id: 3,
      name: 'Construction'
    },
    {
      id: 4,
      name: 'Technology'
    },
    {
      id: 5,
      name: 'Law'
    },
    {
      id: 6,
      name: 'Entertainment'
    },
    {
      id: 7,
      name: 'Government'
    }
  ]

    handleInput = jasmine.createSpy('handleInput.spy')
    wrapper = mount(
      <CategoryField
        label='Category'
        value='what state passes down'
        name='field'
        handleChange={ handleInput }
        categories={ mockCategoryData }
      />
    )
  })

  it('should have a label tag with a label of "Category"', () => {
    expect(wrapper.find('label').text()).toBe('Category')
  })

  it('should have a select tag with value from props', () => {
    expect(wrapper.find('select')).toHaveProp('value', 'what state passes down')
  })

  it('should have a select tag with name from props', () => {
    expect(wrapper.find('select')).toHaveProp('name', 'field')
  })

  it('should have an empty option tag with the proper value', () => {
    expect(wrapper.find('option').at(0).props().value).toEqual('')
    expect(wrapper.find('option').at(0).text()).toEqual('')
  })

  it('should have a Business option tag with the proper value', () => {
    expect(wrapper.find('option').at(1).props().value).toEqual(1)
    expect(wrapper.find('option').at(1).text()).toEqual('Business')
  })

  it('should have a Healthcare option tag with the proper value', () => {
    expect(wrapper.find('option').at(2).props().value).toEqual(2)
    expect(wrapper.find('option').at(2).text()).toEqual('Healthcare')
  })

  it('should have a Construction option tag with the proper value', () => {
    expect(wrapper.find('option').at(3).props().value).toEqual(3)
    expect(wrapper.find('option').at(3).text()).toEqual('Construction')
  })

  it('should have a Technology option tag with the proper value', () => {
    expect(wrapper.find('option').at(4).props().value).toEqual(4)
    expect(wrapper.find('option').at(4).text()).toEqual('Technology')
  })

  it('should have a Law option tag with the proper value', () => {
    expect(wrapper.find('option').at(5).props().value).toEqual(5)
    expect(wrapper.find('option').at(5).text()).toEqual('Law')
  })

  it('should have an Entertainment option tag with the proper value', () => {
    expect(wrapper.find('option').at(6).props().value).toEqual(6)
    expect(wrapper.find('option').at(6).text()).toEqual('Entertainment')
  })

  it('should have a Government option tag with the proper value', () => {
    expect(wrapper.find('option').at(7).props().value).toEqual(7)
    expect(wrapper.find('option').at(7).text()).toEqual('Government')
  })

  it('should invoke the handleput function from props input is provided', () => {
    wrapper.find('select').simulate('change')
    expect(handleInput).toHaveBeenCalled()
  })
})
