# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
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
  {name: "Watson", job_title: "Sushi Chef", current_employer: "Kobe's", category_id: 6, species: "Cat", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/LAUNCHER-watson_zpspkmpgy7i.png"},
  {name: "Geoffrey", job_title: "CFO", current_employer: "Bank of America", category_id: 1, species: "Dog", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/LAUNCHER-geoffrey_zpsy8znwdfq.jpg"},
  {name: "Bill", job_title: "Banker", current_employer: "Smith & Sons", category_id: 1, species: "Cat", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/tiecat-2_zpsbanzw7si.png"},
  {name: "Princess", job_title: "Socialite", current_employer: "Hollywood", category_id: 6, species: "Dog", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/dog-sweater_zpscrgz26qz.jpg"},
  {name: "Spot", job_title: "Radiologist", current_employer: "Mass Gen", category_id: 2, species: "Dog", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/bowtie-bulldog_zpseijusezj.jpg"},
  {name: "Whiskey", job_title: "Demolition", category_id: 3, species: "Cat", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/cat-in-tie_zpscbu3jzlc.jpg"},
  {name: "Melpomene", job_title: "Digger", current_employer: "Boston Construction", category_id: 3, species: "Tarantula", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/LAUNCHER-melpomene_zpskgpj4qpb.jpg"},
  {name: "Ian", job_title: "Artist", current_employer: "Louvre", category_id: 6, species: "Bird", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/2C6A029800000578-0-image-a-34_1442480995620_zpsuusyv8os.jpg"},
  {name: "Travis", job_title: "Project Manager", current_employer: "Smith & Sons", category_id: 4, species: "Cat", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/183ea6e8fee892b456e97f4a8a494f61--pet-clothes-dog-toys_zpsnejb5hqs.jpg"},
  {name: "Fluffy", job_title: "Musician", current_employer: "Hollywood", category_id: 6, species: "Dog", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/60-spooky-and-cute-halloween-costumes-for-pets-designbump-cute-little-dog-costumes-l-bd2948d786427c40_zps77uwts0v.jpg"},
  {name: "Chester", job_title: "Brain Surgeon", current_employer: "Mass Gen", category_id: 2, species: "Iguana", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/JaneIguana_zpszksisyii.jpg"},
  {name: "Jeeves", job_title: "Teller", category_id: 1, species: "Cat", photo: "http://i1380.photobucket.com/albums/ah199/charlottesmith93/cat-business-man-in-suit-funny_zpsusogxmpc.jpg"}
]


reviews = [
   {description: "Terrible worker. Never showed up to work on time and kept complaining that his own Floof ate his homework. I'll never hire this Floof again.", rating: 1, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 3},
   {description: "Such a positive attitude and this Floof was the goodest boy I've ever had employed for my company. He always brought treats in for the whole office and stayed late.", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 2},
   {description: "No one likes a Floof that tries to eat all of the other Floofs' food in the office kitchen. He has no concept of boundaries and we had an ongoing treat theft problem rampant in the building. ", rating: 2, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
   {description: "If I could hire 10 of these Floofs I would. She was fantastic and was great at crunching the numbers. You won't get a better Floof.", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 4},
   {description: "I don't think this Floof ever worked a day in her life. She was so spoiled and just wanted to lounge around on the coaches all day with the other Floofs feeding her grapes. Such a rotten employee.", rating: 3, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 4},
   {description: "Solid worker and never missed a day while he was my employee. Always up for a game of fetch and I never had to worry about him eating everyone's packed lunch. A", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 6},
   {description: "Not bad. Chased the office cats too much so we had to part ways.", rating: 3, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 7},
   {description: "We do not tolerate Floofs trying to eat the smaller Floofs in the office. This Floof was fired after week 1. If I could give 0 stars, I would.", rating: 1, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 3},
   {description: "What a great performer! We hired this Floof to attend a kid's birthday party and he was such a hit with the kids.", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 10},
   {description: "Is it normal for Floofs to sleep all day?", rating: 2, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 5},
   {description: "I was very impressed with his work. He really knows how to code, especially with our dog bone incentive program.", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 2},
   {description: "I'm pretty sure this Floof has been embezzling treats from our treat bank. We've reported him to the police and are waiting to press charges. Do not hire!", rating: 1, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 12},
   {description: "I've employed this lawyer Floof for many years now. She is very trustworthy and can handle any case presented to her. She is especially skilled at hit and run incidents involving Floofs.", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 4},
   {description: "One of a kind. Would hire again.", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 1},
   {description: "This Floof spends way too much time on Reddit all day. He's always lurking on r/aww and never does any work. It's gonna be a down vote for me.", rating: 2, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 3},
   {description: "He just sits there and drools at people. He made the staff very uncomfortable.", rating: 2, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 3},
   {description: "Purrfect!", rating: 4, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 8},
   {description: "This Floof is doggone awesome and I wish I could make 10 more clones of him. Please come back!", rating: 5, upvotes: 5, downvotes: 2, user_id: 1, floof_id: 2}
 ]

categories.each do |category|
  Category.create(category)
end

floofers.each do |floof|
  Floof.create(floof)
end

reviews.each do |review|
  Review.create(review)
end
