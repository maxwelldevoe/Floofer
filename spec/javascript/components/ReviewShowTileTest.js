import ReviewShowTile from '../../../app/javascript/components/ReviewShowTile'

describe('Review show tile', () => {
  let notCreatedByUserWrapper,
  createdByUserWrapper,
  mockReviewData,
  handleDeleteSpy

  beforeEach(() => {
    mockReviewData = {
      id: 1,
      user_id: 1,
      description: "Changed my life. Peed the carpet. Ate my food.",
      rating: 2,
      upvotes: 7,
      downvotes: 11
    }

    spyOn(ReviewShowTile.prototype, 'toggleEditForm')
    handleDeleteSpy = jasmine.createSpy('handleDelete spy');

    notCreatedByUserWrapper = mount(
      <ReviewShowTile
        description={mockReviewData.description}
        key={mockReviewData.id}
        id={mockReviewData.id}
        rating={mockReviewData.rating}
        user={mockReviewData.user_id}
        createdByUser={false}
        handleDelete={handleDeleteSpy}
      />
    )

    createdByUserWrapper = mount(
      <ReviewShowTile
        description={mockReviewData.description}
        key={mockReviewData.id}
        id={mockReviewData.id}
        rating={mockReviewData.rating}
        user={mockReviewData.user_id}
        createdByUser={true}
        handleDelete={handleDeleteSpy}
      />
    )
  })

  it('should have a rating with <p>', () => {
    expect(notCreatedByUserWrapper.find('p').at(0)).toHaveText("2 stars")
    expect(createdByUserWrapper.find('p').at(0)).toHaveText("2 stars")
  })

  it('should have a description within <p>', () => {
    expect(notCreatedByUserWrapper.find('p').at(1)).toHaveText("Changed my life. Peed the carpet. Ate my food.")
    expect(createdByUserWrapper.find('p').at(1)).toHaveText("Changed my life. Peed the carpet. Ate my food.")

  })

  it('should have a user id with <p>', () => {
    expect(notCreatedByUserWrapper.find('p').at(2)).toHaveText("user 1")
    expect(createdByUserWrapper.find('p').at(2)).toHaveText("user 1")
  })

  it('should have a delete button if createdByUser is true', () => {
    expect(createdByUserWrapper.find('button#delete')).toHaveText("Delete")
    expect(notCreatedByUserWrapper.find('button#delete')).toBeEmpty();
  })

  it('should render the delete button with the appropriate props', () => {
    expect(createdByUserWrapper.find('button#delete').props()).toEqual({
      id: 'delete',
      "data-id": 1,
      onClick: jasmine.any(Function),
      children: 'Delete'
    })
  })

  it('should give the user the ability to delete a review', () => {
    createdByUserWrapper.find('button#delete').simulate('click');
    expect(handleDeleteSpy).toHaveBeenCalled()
  })

  it('should have an edit button if createdByUser is true', () => {
    expect(createdByUserWrapper.find('button#edit')).toHaveText("Edit")
    expect(notCreatedByUserWrapper.find('button#edit')).toBeEmpty();
  })

  it('should toggle the edit state when the edit button is clicked', () => {
    createdByUserWrapper.find('button#edit').simulate('click');
    expect(ReviewShowTile.prototype.toggleEditForm).toHaveBeenCalled();
  })

})
