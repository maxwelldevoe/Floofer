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


reviews = [
  {description: "This Floof is great!", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
  {description: "This Floof is not great!", rating: 1, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
  {description: "This Floof sucks", rating: 1, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
  {description: "This Floof is amazing!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
  {description: "This Floof is greater!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},

]



floofers.each do |floof|
  Floof.create(floof)
end

categories.each do |category|
  Category.create(category)
end

floofers.each do |floof|
  Floof.create(floof)
end



# example review seed


{description: "Terrible worker. Never showed up to work on time and kept complaining that his own Floof ate his homework. I'll never hire this Floof again.", rating: 1, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "Such a positive attitude and this Floof was the goodest boy I've ever had employed for my company. He always brought treats in for the whole office and stayed late.", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "No one likes a Floof that tries to eat all of the other Floofs' food in the office kitchen. He has no concept of boundaries and we had an ongoing treat theft problem rampant in the building. ", rating: 2, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "If I could hire 10 of these Floofs I would. She was fantastic and was great at crunching the numbers. You won't get a better Floof.", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "I don't think this Floof ever worked a day in her life. She was so spoiled and just wanted to lounge around on the coaches all day with the other Floofs feeding her grapes. Such a rotten employee.", rating: 3, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "Solid worker and never missed a day while he was my employee. Always up for a game of fetch and I never had to worry about him eating everyone's packed lunch. A+", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "Not bad. Chased the office cats too much so we had to part ways.", rating: 3, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "We do not tolerate Floofs trying to eat the smaller Floofs in the office. This Floof was fired after week 1. If I could give 0 stars, I would.", rating: 1, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "What a great performer! We hired this Floof to attend a kid's birthday party and he was such a hit with the kids.", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},


{description: "Is it normal for Floofs to sleep all day?", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "This Floof is greater!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "This Floof is greater!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "This Floof is greater!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "This Floof is greater!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
{description: "This Floof is greater!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
