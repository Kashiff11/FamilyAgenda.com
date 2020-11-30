# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_11_30_205621) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "poems", force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.bigint "user_id", null: false
    t.bigint "poet_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["poet_id"], name: "index_poems_on_poet_id"
    t.index ["user_id"], name: "index_poems_on_user_id"
  end

  create_table "poets", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.integer "year_born"
    t.integer "year_died"
    t.string "birthplace"
    t.text "short_bio"
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_poets_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "date_of_birth"
    t.string "email"
    t.string "phone_number"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "poems", "poets"
  add_foreign_key "poems", "users"
  add_foreign_key "poets", "users"
end
