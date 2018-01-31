import ReviewFormTile from '../../../app/javascript/components/ReviewFormTile'

describe('Review form tile', () => {
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
      shallow(<ReviewFormTile
        label="Rating"
        reviewData={ mockReviewData }
      />)
    )
  })

  it('should have a label within <label>', () => {
    expect(wrapper.state().description).toEqual("Changed my life. Peed the carpet. Ate my food.")
  })

  // it('should have a rating with <label>', () => {
  //   expect(wrapper.find('label').at(1)).toHaveText("Description")
  // })
  //
  // it('should have a submit button', () => {
  //   expect(wrapper.find('input').at(1)).toHaveText("Submit")
  // })

})
