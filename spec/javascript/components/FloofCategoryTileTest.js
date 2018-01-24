import FloofCategoryTile from '../../../app/javascript/components/FloofCategoryTile'

describe('floof category tile', () => {
  let wrapper,
  mockFloofData

  beforeEach(() => {
    mockFloofData = [{
      id: 1,
      category: 'Business',
      name: 'Spot',
      job_title: 'Senior Web Developer',
      picture: 'http://mymagicdog.com/wp-content/uploads/2016/06/dog-typing-2.jpg'
    }]

    wrapper = mount(
      <FloofCategoryTile
        floofData={mockFloofData}
      />
    )
  })

  it('should have Floof Tiles', () => {
    expect(wrapper.find('FloofTile')).toBePresent()
  })

  it('should have a header with the floof category', () => {
    expect(wrapper.find('header')).toHaveText('Business')
  })
})
