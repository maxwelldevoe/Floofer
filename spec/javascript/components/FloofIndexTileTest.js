import FloofIndexTile from '../../../app/javascript/components/FloofIndexTile'

describe('Floof Index Tile', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme();

    wrapper = mount(
      <FloofIndexTile
        id={1}
        name='Rover'
        job='Junior Web Developer'
        photo='http://mymagicdog.com/wp-content/uploads/2016/06/dog-typing-2.jpg'
      />
    )
  })

  it('should have a name within a <p>', () => {
    expect(wrapper.find('p').at(0)).toIncludeText('Rover')
  })

  it('should have a job within same <p>', () => {
    expect(wrapper.find('p').at(1)).toIncludeText('Junior Web Developer')
  })

  it('should have an image within a <img>', () => {
    expect(wrapper.find('img').props()).toEqual({
      src: 'http://mymagicdog.com/wp-content/uploads/2016/06/dog-typing-2.jpg',
      alt: 'Floof Photo'
    })
  })

  it('should have a span with the className floof_tile', () => {
    expect(wrapper.find('span')).toHaveProp('className', 'floof_tile')
  })

  it('should have a link that links to the show page', () => {
    expect(wrapper.find('Link')).toHaveProp('to', '/floofs/1')
  })
})
