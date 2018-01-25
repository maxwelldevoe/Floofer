require 'rails_helper'


feature 'user registers', %Q{
  As a visitor
  I want to register
  So that I can create an account
} do

  # Acceptance Criteria:
  # * I must specify a valid email address,
  #   password, and password confirmation
  # * If I don't specify the required information, I am presented with
  #   an error message

  scenario 'provide valid registration information' do
    visit new_user_registration_path

    fill_in 'First Name', with: 'John'
    fill_in 'Last Name', with: 'Snow'
    fill_in 'Username', with: 'johnsnow'
    fill_in 'Email', with: 'john@example.com'
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'

    click_button 'Sign up'

    expect(page).to have_content('Welcome! You have signed up successfully.')
    expect(page).to have_content('Sign Out')

  end

  scenario 'provide invalid registration information' do
    visit new_user_registration_path

    click_button 'Sign up'
    expect(page).to have_content("can't be blank")
    expect(page).to_not have_content('Sign Out')
  end

  xscenario "user uploads a profile photo" do
      visit root_path
      click_link "Sign Up"

      fill_in "Email", with: "ash@s-mart.com"
      fill_in "Password", with: "boomstick!3vilisd3ad"
      fill_in "Password confirmation", with: "boomstick!3vilisd3ad"
      attach_file :profile_photo, "#{Rails.root}/spec/support/images/photo.png"
      click_button "Sign up"

      expect(page).to have_content("Welcome! Thanks for joining!")
      expect(page).to have_css("img[src*='photo.png']")
  end

end
