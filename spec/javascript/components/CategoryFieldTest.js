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
      name: 'Constructions'
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
        handleChange={ handleInput }
        categories={ mockCategoryData }
      />
    )
  })

  it('should have a label tag with a label of "Category"', () => {
    expect(wrapper.find('label').text()).toBe('Category')
  })

  it('should have an option tag with the proper value', () => {
    expect(wrapper.find('option').at(0).props().value).toEqual('')
    expect(wrapper.find('option').at(1).props().value).toEqual(1)
    expect(wrapper.find('option').at(2).props().value).toEqual(2)
    expect(wrapper.find('option').at(3).props().value).toEqual(3)
    expect(wrapper.find('option').at(4).props().value).toEqual(4)
    expect(wrapper.find('option').at(5).props().value).toEqual(5)
    expect(wrapper.find('option').at(6).props().value).toEqual(6)
    expect(wrapper.find('option').at(7).props().value).toEqual(7)
  })

  it('should invoke the handleput function from props input is provided', () => {
    wrapper.find('select').simulate('change')
    expect(handleInput).toHaveBeenCalled()
  })
})
