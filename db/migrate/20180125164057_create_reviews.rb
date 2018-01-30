class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false
      t.belongs_to :floof, null: false
      t.text :description, null: false
      t.integer :rating, null: false
      t.integer :upvotes, null: false, default: 0
      t.integer :downvotes, null: false, default: 0

      t.timestamps
    end
  end
end
