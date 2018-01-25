import FloofShowTile from '../../../app/javascript/components/FloofShowTile'

describe('floof show tile', () => {
  let wrapper,
  mockFloofData

  beforeEach(() => {
    mockFloofData = {
      id: 2,
      name: "Jane",
      job_title: "Attourney",
      current_employer: "Proctor & Gamble",
      category: "Law",
      species: "Iguana",
      picture: 'http://mymagicdog.com/wp-content/uploads/2016/06/dog-typing-2.jpg'
    }
    wrapper = mount(
      <FloofShowTile
        floofData={ mockFloofData }
      />
    )
  })

  it('should have a name within a <h2>', () => {
    expect(wrapper.find('h2')).toHaveText('Jane')
  })

  it('should have an image within a <img>', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://mymagicdog.com/wp-content/uploads/2016/06/dog-typing-2.jpg',
      alt: 'Floof Photo'
    })
  })

  it('should have a job title within a <p>', () => {
    expect(wrapper.find('p').at(0)).toHaveText('Job: Attourney')
  })

  it('should have a current employer within a <p>', () => {
    expect(wrapper.find('p').at(1)).toHaveText('Current Employer: Proctor & Gamble')
  })

  it('should have a species within a <p>', () => {
    expect(wrapper.find('p').at(2)).toHaveText('Species: Iguana')
  })
})
