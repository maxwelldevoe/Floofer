# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


floofers = [
  {name: "Bob", job_title: "Accountant", current_employer: "Enron", category: "Business", species: "Parrot"},
  {name: "Jane", job_title: "Attorney", current_employer: "Proctor & Gamble", category: "Law", species: "Iguana"},
  {name: "Bill", job_title: "Carpenter", current_employer: "Smith & Sons", category: "Woodwork", species: "Ant"},
  {name: "Princess", job_title: "Socialite", current_employer: "Hollywood", category: "Entertainment", species: "Cat"},
  {name: "Spot", job_title: "Radiologist", current_employer: "Mass Gen", category: "Health", species: "Dog"},
  {name: "Whiskey", job_title: "Demolition", category: "Construction", species: "Rhino"}
]

users = [
  {user_name: "HandsomeDevil", first_name:"Adam", last_name:"Quinn", email:"GoodTimes@gmail.com", password:"password"},
  {user_name: "ShineyAngel", first_name:"Scarlet", last_name:"Johanson", email:"dreams@yahoo.com", password:"password"},
  {user_name: "BoredPanda", first_name:"Pablo", last_name:"Sandoval", email:"fattie@aol.com", password:"password"}
]

floofers.each do |floof|
  Floof.create!(floof)
end

users.each do |user|
  User.create!(user)
end

reviews = [
  {user: User.find(1), floof: Floof.find(1), description:"Good pet!", rating:5, upvotes:5, downvotes:1}
]

reviews.each do |review|
  Review.create!(review)
end
