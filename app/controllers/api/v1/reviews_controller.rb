class Api::V1::ReviewsController < ApplicationController

  def index
    all_reviews = Review.all
    render json: all_reviews
  end

  def show
    review = Review.find(params[:id])
    render json: review
  end

end
