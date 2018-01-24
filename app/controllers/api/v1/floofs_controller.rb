class Api::V1::FloofsController < ApplicationController
  def index
    render json: Floof.all
  end
end
