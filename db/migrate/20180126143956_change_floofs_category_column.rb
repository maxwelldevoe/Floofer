class ChangeFloofsCategoryColumn < ActiveRecord::Migration[5.1]
  def up
    change_table :floofs do |table|
      table.remove :category
      table.belongs_to :category, null: false
    end
  end

  def down
    change_table :floofs do |table|
      table.remove_belongs_to :category
      table.string :category, null: false
    end
  end
end
