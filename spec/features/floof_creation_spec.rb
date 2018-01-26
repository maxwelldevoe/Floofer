
require 'rails_helper'

feature 'Migration Index' do


  scenario 'I want to successfully create a Floof' do

    category1 = Category.create(name: "Entertainment")
    dog1 = Floof.create(name: "Mr. Peanut Butter", job_title: "Actor", current_employer: "Game Show Host", species: "Dog", category: category1)

    expect(dog1.name).to eq("Mr. Peanut Butter")
    expect(dog1.job_title).to eq("Actor")
    expect(dog1.current_employer).to eq("Game Show Host")
    expect(dog1.category).to eq(category1)
    expect(dog1.species).to eq("Dog")
  end

  scenario 'I want to successfully create a Floof and make sure the current employer is optional' do

    category1 = Category.create(name: "Entertainment")
    dog1 = Floof.create(name: "Mr. Peanut Butter", job_title: "Actor", species: "Dog", category: category1)

    expect(dog1.name).to eq("Mr. Peanut Butter")
    expect(dog1.job_title).to eq("Actor")
    expect(dog1.category).to eq(category1)
    expect(dog1.species).to eq("Dog")
    expect(dog1.current_employer).not_to be_present
  end


end
