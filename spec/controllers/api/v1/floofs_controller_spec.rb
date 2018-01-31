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

  describe "POST#create" do
    it "creates a new floof" do
      floof_to_be = {floof: {name: "Captain", job_title: "Drill Sergent", current_employer: "US Army", species: "Doberman", category_id: first_category.id}}
      prev_count = first_category.floofs.count
      post(:create, params: floof_to_be)
      expect(first_category.floofs.count).to eq(prev_count + 1)
    end

    it "should return the newly created floof" do
      floof_to_be = {floof: {name: "Captain", job_title: "Drill Sergent", species: "Doberman", category_id: first_category.id}}
      post(:create, params: floof_to_be)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["floof"]["name"]).to eq(floof_to_be[:floof][:name])
      expect(returned_json["floof"]["job_title"]).to eq(floof_to_be[:floof][:job_title])
      expect(returned_json["floof"]["current_employer"]).to eq(floof_to_be[:floof][:current_employer])
      expect(returned_json["floof"]["species"]).to eq(floof_to_be[:floof][:species])
    end

    it "should return status 422 and errors if floof not created" do
      floof_to_be = {floof: {name: "Captain"}}
      post(:create, params: floof_to_be)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 422
      expect(response.content_type).to eq("application/json")

      expect(returned_json["error"][0]).to eq("Category must exist")
      expect(returned_json["error"][1]).to eq("Job title can't be blank")
      expect(returned_json["error"][2]).to eq("Species can't be blank")
    end
  end

end
