
require 'rails_helper'

feature 'NavBar' do


  scenario 'As a user I want to click Floofer and be directed to the Index' do
    user = FactoryBot.create(:user)

    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'
    expect(page).to have_content('Signed in successfully')

    click_link 'Floofer'
    expect(page).to have_current_path('/')
  end

end
