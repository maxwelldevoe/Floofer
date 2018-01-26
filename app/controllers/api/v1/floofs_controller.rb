class Api::V1::FloofsController < ApplicationController
  def show
    render json: Floof.find(params[:id])
  end
end
