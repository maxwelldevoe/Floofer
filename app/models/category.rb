class Category < ApplicationRecord
  CATEGORIES = [
    "Business",
    "Healthcare",
    "Construction",
    "Technology",
    "Law",
    "Entertainment",
    "Government"
  ]

  has_many :floofs

  validates :name, presence: true, inclusion: { in: CATEGORIES }
end
