require "rails_helper"

RSpec.describe Api::V1::UsersController, type: :controller do

  describe "GET#Index" do
    it "should return the current user" do
      user1 = FactoryBot.create(:user)
      sign_in(user1)

      get :index
      returned_json = JSON.parse(response.body)

      expect(returned_json["current_user"]["id"]).to eq user1.id
      expect(returned_json["current_user"]["email"]).to eq user1.email
      expect(returned_json["current_user"]["user_name"]).to eq user1.user_name
      expect(returned_json["current_user"]["first_name"]).to eq user1.first_name
      expect(returned_json["current_user"]["last_name"]).to eq user1.last_name
    end

    it "should return nil if there is no current user" do
      get :index
      returned_json = JSON.parse(response.body)

      expect(returned_json["current_user"]).to eq nil
    end
  end
end



# it "should return a list of all the categories and their associated floofs" do
#   get :index
#   returned_json = JSON.parse(response.body)
#   expect(response.status).to eq 200
#   expect(response.content_type).to eq("application/json")
#
#   expect(returned_json.length).to eq 1
#
#   expect(returned_json["categories"][0]["id"]).to eq first_category.id
#   expect(returned_json["categories"][0]["name"]).to eq first_category.name
#
#   expect(returned_json["categories"][0]["floofs"][0]["name"]).to eq first_floof.name
#   expect(returned_json["categories"][0]["floofs"][0]["job_title"]).to eq first_floof.job_title
#   expect(returned_json["categories"][0]["floofs"][0]["current_employer"]).to eq first_floof.current_employer
#   expect(returned_json["categories"][0]["floofs"][0]["species"]).to eq first_floof.species
# end
