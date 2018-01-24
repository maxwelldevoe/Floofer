require "rails_helper"

RSpec.describe Api::V1::FloofsController, type: :controller do
  let!(:first_floof) { Floof.create(name: "Bob", job_title: "Accountant", current_employer: "Enron", category: "Business", species: "Parrot") }




  describe "GET#index" do
    it "should return a list of all the floofs" do

      get :index
      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1
      expect(returned_json[0]["name"]).to eq "Bob"
      expect(returned_json[0]["job_title"]).to eq "Accountant"

    end
  end


end
