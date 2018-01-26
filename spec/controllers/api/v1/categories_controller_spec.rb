require "rails_helper"

RSpec.describe Api::V1::CategoriesController, type: :controller do
  let!(:first_category) { Category.create(name: "Business") }
  let!(:first_floof) { Floof.create(name: "Bob", job_title: "Accountant", current_employer: "Enron", species: "Parrot", category: first_category) }

  describe "GET#index" do
    it "should return a list of all the categories and their associated floofs" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1
      
      expect(returned_json["categories"][0]["id"]).to eq first_category.id
      expect(returned_json["categories"][0]["name"]).to eq first_category.name

      expect(returned_json["categories"][0]["floofs"][0]["name"]).to eq first_floof.name
      expect(returned_json["categories"][0]["floofs"][0]["job_title"]).to eq first_floof.job_title
      expect(returned_json["categories"][0]["floofs"][0]["current_employer"]).to eq first_floof.current_employer
      expect(returned_json["categories"][0]["floofs"][0]["species"]).to eq first_floof.species
    end
  end

end
