# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Poem.destroy_all
Poet.destroy_all
User.destroy_all

@admin = User.create!(first_name: 'Kashiff', last_name: 'Khan', date_of_birth: '04/11/1979', email: 'kashiff.k@yahoo.com', phone_number: '555-555-5555', username: 'Admin1set', password: '123456')

puts "#{User.count} users created."

@poet = Poet.create!(first_name: 'Kashiff', last_name: 'Khan', year_born: 1979, birthplace: 'Brooklyn', short_bio: 'Kashiff became a poet when someone asked him where his car was parked.', user: @admin)
@poet1 = Poet.create!(first_name: 'Robert', last_name: 'Frost', year_born: 1874, year_died: 1963, birthplace: 'San Francisco', short_bio: 'An American poet that was much admired for his portrayal of the natural beauty of New England', user: @admin)
puts "#{Poet.count} poets created."

@poem = Poem.create!(title: 'Where is the car', content: 'Where is the car? Where it was last week, down by the water.', user: @admin, poet: @poet)
@poem1 = Poem.create!(title: 'Where is the boat', content: 'Where is the boat? Where it was last week, down by the water.', user: @admin, poet: @poet1)

puts "#{Poem.count} poems created."