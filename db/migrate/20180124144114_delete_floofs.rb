class DeleteFloofs < ActiveRecord::Migration[5.1]
  def change
    drop_table :floofs
  end
end
