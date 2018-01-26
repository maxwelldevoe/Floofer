class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :associated_floofs

  def associated_floofs
    object.floofs
  end
end
