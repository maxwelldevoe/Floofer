class AddPhotosToFloofs < ActiveRecord::Migration[5.1]
  def change
    add_column :floofs, :photo, :string
  end
end
