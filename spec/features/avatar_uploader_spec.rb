require "rails_helper"

feature "avatar" do
  scenario "user uploads a avatar" do
    visit root_path
    click_link "Sign Up"
    new_user = ()

    fill_in "First Name", with: "Tyrion"
    fill_in "Last Name", with: "Lanister"
    fill_in "Username", with: "Halfman"
    fill_in "Email", with: "dwarf@kingslanding.com"
    fill_in "Password", with: "boomstick!3vilisd3ad"
    fill_in "Password confirmation", with: "boomstick!3vilisd3ad"
    attach_file "Avatar", "#{Rails.root}/spec/support/images/blondie.jpg"

    click_button "Sign up"

    expect(page).to have_content('Welcome! You have signed up successfully.')
    expect(page).to have_css("img[src*='blondie.jpg']")
  end
end
