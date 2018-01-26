class FloofSerializer < ActiveModel::Serializer
  attributes :id, :name, :job_title, :current_employer, :species
end
