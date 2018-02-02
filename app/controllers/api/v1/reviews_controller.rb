class Api::V1::ReviewsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    floof = Floof.find(params[:floof_id])
    reviews = floof.reviews
    render json: reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end

  def create
    review = Review.new(review_params)
    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    review = Review.find(params[:id])
    review.update_attributes(review_params)
    if review.save
      render json: review
    else
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
    render json: review
  end

  private

    def review_params
      params.require(:review).permit(:description, :rating, :floof_id, :user_id)
    end

end
