class CreateFloofs < ActiveRecord::Migration[5.1]
  def change
    create_table :floofs do |t|
      t.string :name, null: false
      t.string :job_title, null: false
      t.string :current_employer
      t.string :category, null: false
      t.string :species, null: false

      t.timestamps
    end
  end
end
