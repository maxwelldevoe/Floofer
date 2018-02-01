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

  describe "POST#create" do
    it "should create a new review" do
      review_to_be = {review: { description: "It mimics me!", rating: 5, user_id: first_user.id, floof_id: first_floof.id }}
      prev_count = first_floof.reviews.count
      post(:create, params: review_to_be)
      expect(first_floof.reviews.count).to eq(prev_count + 1)
    end

    it "should return the newly created review" do
      review_to_be = {review: { description: "It mimics me!", rating: 5, user_id: first_user.id, floof_id: first_floof.id }}
      post(:create, params: review_to_be)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json["description"]).to eq(review_to_be[:review][:description])
      expect(returned_json["rating"]).to eq(review_to_be[:review][:rating])
      expect(returned_json["user_id"]).to eq(review_to_be[:review][:user_id])
      expect(returned_json["floof_id"]).to eq(review_to_be[:review][:floof_id])
    end

    it "should return status 422 and errors if review not created" do
      review_to_be = {review: { description: "It mimics me!" }}
      post(:create, params: review_to_be)

      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 422
      expect(response.content_type).to eq("application/json")

      expect(returned_json["error"][0]).to eq("Rating can't be blank")
    end
  end

end
