class FloofSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_title, :current_employer, :species, :category

  def category
    object.category.name
  end
end
