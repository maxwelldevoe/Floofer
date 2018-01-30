import FloofCategoryTile from '../../../app/javascript/components/FloofCategoryTile'

describe('floof category tile', () => {
  let wrapper,
  mockFloofData

  beforeEach(() => {
    mockFloofData = [{
      id: 1,
      name: 'Spot',
      job_title: 'Senior Web Developer',
      picture: 'http://mymagicdog.com/wp-content/uploads/2016/06/dog-typing-2.jpg',
      category_id: 1
    }]

    wrapper = mount(
      <FloofCategoryTile
        category="Business"
        floofData={ mockFloofData }
      />
    )
  })

  it('should have Floof Index Tiles', () => {
    expect(wrapper.find('FloofIndexTile')).toBePresent()
  })

  it('should have a header with the floof category', () => {
    expect(wrapper.find('header')).toHaveText('Business')
  })
})
