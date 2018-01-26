class Floof < ApplicationRecord
  belongs_to :category

  validates :name, presence: true
  validates :job_title, presence: true
  validates :species, presence: true
end
