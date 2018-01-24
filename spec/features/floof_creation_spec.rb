
require 'rails_helper'

feature 'Migration Index' do


  scenario 'I want to successfully create a Floof' do

    dog = Floof.create(name: "Mr. Peanut Butter", job_title: "Actor", current_employer: "Game Show Host", category: "Entertainment", species: "Dog")

    expect(dog.name).to eq("Mr. Peanut Butter")
    expect(dog.job_title).to eq("Actor")
    expect(dog.current_employer).to eq("Game Show Host")
    expect(dog.category).to eq("Entertainment")
    expect(dog.species).to eq("Dog")
  end

  scenario 'I want to successfully create a Floof and make sure the current employer is optional' do

    dog = Floof.create(name: "Mr. Peanut Butter", job_title: "Actor", category: "Entertainment", species: "Dog")

    expect(dog.name).to eq("Mr. Peanut Butter")
    expect(dog.job_title).to eq("Actor")
    expect(dog.category).to eq("Entertainment")
    expect(dog.species).to eq("Dog")
    expect(dog.current_employer).not_to be_present
  end


end
