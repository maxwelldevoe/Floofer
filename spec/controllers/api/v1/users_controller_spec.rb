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
