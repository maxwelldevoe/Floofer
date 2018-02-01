class Api::V1::FloofsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:create]

  def index
    floof = Floof.all
    render json: floof
  end





  def show
    render json: Floof.find(params[:id])
  end

  def create
    floof = Floof.new(floof_params)
    if floof.save
      render json: floof
    else
      render json:{ error: floof.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private
    def floof_params
      params.require(:floof).permit(:name, :photo, :job_title, :current_employer, :category_id, :species)
    end

end
