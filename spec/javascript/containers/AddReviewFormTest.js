import AddReviewForm from '../../../app/javascript/containers/AddReviewForm'
import TextField from '../../../app/javascript/components/TextField'
import RatingField from '../../../app/javascript/components/RatingField'

const mockedTextEvent = { target: { name: 'description', value: 'Nice Parrot!' } }

describe('AddReviewForm', () => {
  let handleAddNewReview,
    handleInput,
    wrapper

  beforeEach(() => {
    spyOn(AddReviewForm.prototype, 'handleChange').and.callThrough();
    spyOn(AddReviewForm.prototype, 'handleSubmit').and.callThrough();
    spyOn(AddReviewForm.prototype, 'handleClearForm').and.callThrough();

    handleAddNewReview = jasmine.createSpy('handleAddNewReview spy');
    wrapper = mount(
      <AddReviewForm
        addNewReview={handleAddNewReview}
      />
    )
  })

  it('should have the specified initial state', () => {
    expect(wrapper.state()).toEqual({
      description: '',
      rating: '',
      ratings: [1, 2, 3, 4, 5],
      errors: {}
    });
  });

  it('should render an h2 component with the text "Add A Review"', () => {
    expect(wrapper.find('h2').text()).toEqual('Add A Review');
  });

  it('should render a form', () => {
    expect(wrapper.find('form')).toBePresent()
  })

  it('should have a TextField component for description', () => {
    expect(wrapper.find('TextField')).toBePresent()
  })

  it('should have a RatingField component for answer', () => {
    expect(wrapper.find('RatingField')).toBePresent()
  })

  it('should have a Clear Form button', () => {
    expect(wrapper.find('button#clear').text()).toEqual('Clear')
  })

  it('should have a Submit Form button', () => {
    expect(wrapper.find('button#submit').text()).toEqual('Submit')
  })

  describe('handleChange(event)', () => {
    it('should be invoked when a new value is passed into the description field', () => {
      wrapper.find('input').simulate('change');
      expect(AddReviewForm.prototype.handleChange).toHaveBeenCalled();
    });

    it('should change the relevant state to the input value', () => {
      wrapper.find('TextField').props().handleChange(mockedTextEvent);
      expect(wrapper.state()).toEqual({
        description: 'Nice Parrot!',
        rating: '',
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      });
    });
  });

  describe('handleClearForm(event)', () => {
    it('should be invoked when the clear button is clicked', () => {
      wrapper.find('button#clear').simulate('click');
      expect(AddReviewForm.prototype.handleClearForm).toHaveBeenCalled();
    });

    it('should reset state', () => {
      wrapper.setState({
        description: 'Nice Parrot!',
        rating: 5,
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      })

      wrapper.find('button#clear').simulate('click');
      expect(wrapper.state()).toEqual({
        description: '',
        rating: '',
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      });
    });
  });

  describe('handleSubmit(event)', () => {
    it('should be invoked when the form is submitted with correct values', () => {
      wrapper.setState({
        description: 'Nice Parrot!',
        rating: 5,
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      })

      wrapper.find('button#submit').simulate('click');
      expect(handleAddNewReview).toHaveBeenCalled()
    });

    it('should reset state after passing the form load up to the ReviewsContainer', () => {
      wrapper.setState({
        description: 'Nice Parrot!',
        rating: 5,
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      })

      wrapper.find('button#submit').simulate('click');
      expect(wrapper.state()).toEqual({
        description: '',
        rating: '',
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      });
    });

    it('should not submit if description is blank', () => {
      wrapper.setState({
        description: '',
        rating: 5,
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      })

      wrapper.find('button#submit').simulate('click');
      expect(wrapper.find('li').text()).toEqual('You must provide a valid description')
    });

    it('should not submit if rating is blank', () => {
      wrapper.setState({
        description: 'Nice Parrot!',
        rating: '',
        ratings: [1, 2, 3, 4, 5],
        errors: {}
      })

      wrapper.find('button#submit').simulate('click');
      expect(wrapper.find('li').text()).toEqual('You must provide a valid rating')
    });
  });
})
