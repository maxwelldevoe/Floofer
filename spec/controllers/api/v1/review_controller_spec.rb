require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_user) {User.create!(first_name: "Jon", last_name: "Snow", user_name: "LordSnow", email: "LordSnow@yahoo.com", password: "password")}
  let!(:first_category) { Category.create!(name: "Business") }
  let!(:first_floof) { Floof.create!(name: "Bob", job_title: "Accountant", current_employer: "Enron", species: "Parrot", category: first_category) }
  let!(:first_review) { Review.create!( description: "This parrot can balance my checkbook, do my taxes and entertain friends and family. Captain Squwak made me a better husband.", rating: 5, upvotes:100, downvotes:1, floof: first_floof, user: first_user)}

  describe "GET#index" do
    it "should return all reviews associated with a give floof" do
      get :index, params: { floof_id: first_floof.id }

      returned_json = JSON.parse(response.body)

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 1

      expect(returned_json[0]["description"]).to eq first_review.description
      expect(returned_json[0]["rating"]).to eq first_review.rating
      expect(returned_json[0]["upvotes"]).to eq first_review.upvotes
      expect(returned_json[0]["downvotes"]).to eq first_review.downvotes
    end
  end

end
