class Api::V1::ReviewsController < ApplicationController

  def index
    all_reviews = Review.all
    render json: all_reviews
  end


  def show
    render json: Review.find(params[:id])
  end

end
