require "rails_helper"

RSpec.describe Api::V1::FloofsController, type: :controller do
  let!(:first_category) { Category.create(name: "Business") }
  let!(:first_floof) { Floof.create(name: "Bob", job_title: "Accountant", current_employer: "Enron", species: "Parrot", category: first_category) }

  describe "GET#show" do
    it "should return the specified floof" do

      get :show, params: { id: first_floof.id }
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1

      expect(returned_json["floof"]["name"]).to eq first_floof.name
      expect(returned_json["floof"]["job_title"]).to eq first_floof.job_title
      expect(returned_json["floof"]["current_employer"]).to eq first_floof.current_employer
      expect(returned_json["floof"]["species"]).to eq first_floof.species
    end
  end

end
