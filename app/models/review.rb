class Review < ApplicationRecord
  validates :description, presence: true,
    length: { maximum: 5000 }
  validates :rating, presence: true,
    numericality: true,
    inclusion: { in: 1..5 }
  validates :upvotes, numericality: { greater_than_or_equal_to: 0 }
  validates :downvotes, numericality: { greater_than_or_equal_to: 0 }

  belongs_to :floof
  belongs_to :user
end
