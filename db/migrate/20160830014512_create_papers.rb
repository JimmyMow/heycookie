class CreatePapers < ActiveRecord::Migration
  def change
    create_table :papers do |t|
      t.text :content
      t.string :email

      t.timestamps null: false
    end
  end
end
