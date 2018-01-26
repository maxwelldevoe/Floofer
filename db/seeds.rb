# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

categories = [
  {name: "Business"},
  {name: "Healthcare"},
  {name: "Construction"},
  {name: "Technology"},
  {name: "Law"},
  {name: "Entertainment"},
  {name: "Government"}
]

floofers = [
  {name: "Bob", job_title: "Accountant", current_employer: "Enron", category_id: 1, species: "Parrot"},
  {name: "Jane", job_title: "Attorney", current_employer: "Proctor & Gamble", category_id: 5, species: "Iguana"},
  {name: "Bill", job_title: "Carpenter", current_employer: "Smith & Sons", category_id: 3, species: "Ant"},
  {name: "Princess", job_title: "Socialite", current_employer: "Hollywood", category_id: 6, species: "Cat"},
  {name: "Spot", job_title: "Radiologist", current_employer: "Mass Gen", category_id: 2, species: "Dog"},
  {name: "Whiskey", job_title: "Demolition", category_id: 3, species: "Rhino"}
]

categories.each do |category|
  Category.create(category)
end

reviews.each do |review|
  Review.create!(review)
end
