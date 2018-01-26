class Floof < ApplicationRecord
  validates :name, presence: true
  validates :job_title, presence: true
  validates :category, presence: true
  validates :species, presence: true

  has_many :reviews
  has_many :users, through: :reviews

end
