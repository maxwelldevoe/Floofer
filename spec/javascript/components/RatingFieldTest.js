import RatingField from '../../../app/javascript/components/RatingField'


describe('Rating Field', () => {
  let handleInput,
  wrapper,
  mockRatingData

  beforeEach(() => {
    mockRatingData = [1, 2, 3, 4, 5]

    handleInput = jasmine.createSpy('handleInput.spy')
    wrapper = mount(
      <RatingField
        label="Rating"
        value={3}
        name="rating"
        handleChange={ handleInput }
        ratings={ mockRatingData }
      />
    )
  })

  it('should have a label tag with a label of "Rating"', () => {
    expect(wrapper.find('label').text()).toBe('Rating')
  })

  it('should have a select tag with value from props', () => {
    expect(wrapper.find('select')).toHaveProp('value', 3)
  })

  it('should have a select tag with name from props', () => {
    expect(wrapper.find('select')).toHaveProp('name', 'rating')
  })

  it('should have an empty option tag with the proper value', () => {
    expect(wrapper.find('option').at(0).props().value).toEqual('')
    expect(wrapper.find('option').at(0).text()).toEqual('')
  })

  it('should have a 1 rating option with the proper value', () => {
    expect(wrapper.find('option').at(1).props().value).toEqual(1)
    expect(wrapper.find('option').at(1).text()).toEqual('1')
  })

  it('should have a 2 rating option with the proper value', () => {
    expect(wrapper.find('option').at(2).props().value).toEqual(2)
    expect(wrapper.find('option').at(2).text()).toEqual('2')
  })

  it('should have a 3 rating option with the proper value', () => {
    expect(wrapper.find('option').at(3).props().value).toEqual(3)
    expect(wrapper.find('option').at(3).text()).toEqual('3')
  })

  it('should have a 4 rating option with the proper value', () => {
    expect(wrapper.find('option').at(4).props().value).toEqual(4)
    expect(wrapper.find('option').at(4).text()).toEqual('4')
  })

  it('should have a 5 rating option with the proper value', () => {
    expect(wrapper.find('option').at(5).props().value).toEqual(5)
    expect(wrapper.find('option').at(5).text()).toEqual('5')
  })

  it('should invoke the handleput function from props when input is provided', () => {
    wrapper.find('select').simulate('change')
    expect(handleInput).toHaveBeenCalled()
  })
})
