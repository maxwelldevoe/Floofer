# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


floofers = [
  {name: "Bob", job_title: "Accountant", current_employer: "Enron", category: "Business", species: "Parrot"},
  {name: "Jane", job_title: "Attourney", current_employer: "Proctor & Gamble", category: "Law", species: "Iguana"},
  {name: "Bill", job_title: "Carpenter", current_employer: "Smith & Sons", category: "Woodwork", species: "Ant"},
  {name: "Princess", job_title: "Socialite", current_employer: "Hollywood", category: "Entertainment", species: "Cat"},
  {name: "Spot", job_title: "Radiologist", current_employer: "Mass Gen", category: "Health", species: "Dog"},
  {name: "Whiskey", job_title: "Demolition", category: "Construction", species: "Rhino"}
]



floofers.each do |pet|
  Floof.create!(pet)
end
