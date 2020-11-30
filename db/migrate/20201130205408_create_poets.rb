class CreatePoets < ActiveRecord::Migration[6.0]
  def change
    create_table :poets do |t|
      t.string :first_name
      t.string :last_name
      t.integer :year_born
      t.integer :year_died
      t.string :birthplace
      t.text :short_bio
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
