class Api::V1::FloofsController < ApplicationController
  def index
    all_floofs = Floof.all

    categories = all_floofs.map do |floof|
      floof["category"]
    end
    unique_categories = categories.uniq.sort

    sorted_floofs = unique_categories.map do |category|
      all_floofs.select { |floof| floof.category == category }
    end

    render json: sorted_floofs
  end
end
