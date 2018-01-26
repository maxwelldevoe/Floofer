import ReviewTile from '../../../app/javascript/components/ReviewTile'

describe('Review show tile', () => {
  let wrapper,
  mockReviewData

  beforeEach(() => {
    mockReviewData = {
      id: 1,
      user_id: 1,
      description: "Changed my life. Peed the carpet. Ate my food.",
      rating: 2,
      upvotes: 7,
      downvotes: 11
    }

    wrapper = mount(
      <ReviewTile
      description={mockReviewData.description}
      key={mockReviewData.id}
      id={mockReviewData.id}
      rating={mockReviewData.rating}
      user={mockReviewData.user_id}
      />
    )
  })

  it('should have a description within <p>', () => {
    expect(wrapper.find('p').at(0)).toHaveText("Changed my life. Peed the carpet. Ate my food.")
  })

  it('should have a rating with <p>', () => {
    expect(wrapper.find('p').at(1)).toHaveText("2")
  })

  it('should have a user id with <p>', () => {
    expect(wrapper.find('p').at(2)).toHaveText("1")
  })

})
