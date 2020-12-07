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
@user1 = User.create!(first_name: 'Hira', last_name: 'Khan', date_of_birth: '01/27/1985', email: 'hira.k@yahoo.com', phone_number: '111-111-1111', username: 'hirakhan', password: '123456')
puts "#{User.count} users created."

@poet1 = Poet.create!(first_name: 'Robert', last_name: 'Frost', year_born: 1874, year_died: 1963, birthplace: 'San Francisco', short_bio: 'An American poet that was much admired for his portrayal of the natural beauty of New England. Much of his poetry was regarding everyday people in everyday situations. HE spent small amounts of time at Dartmouth (1yr) and Harvard (2yrs). He was first published in London after selling his farm and using the money to move there.', user: @admin)
@poet2 = Poet.create!(first_name: 'John', last_name: 'Keats', year_born: 1795, year_died: 1821, birthplace: 'Moorgate, London', short_bio: 'Although he lived a short life, Keats greatly contributed to the art of English poetry. He was indeed a great English romantic lyric poet.', user: @user1)
puts "#{Poet.count} poets created."

@poem1 = Poem.create!(title: 'Nothing Gold Can Stay', content: "Nature's first green is gold, Her hardest hue to hold. Her early leaf's a flower; But only so an hour. Then leaf subsides to leaf. So eden sank to grief, So dawn goes down to day. Nothing gold can stay.", user: @admin, poet: @poet1)
@poem2 = Poem.create!(title: 'Dust of Snow', content: 'The way a crow Shook down on me The dust of snow From a hemlock tree Has given my heart A change of mood And saved some part Of a day I had rued..', user: @user1, poet: @poet1)
@poem3 = Poem.create!(title: 'Where is the cart', content: 'A thing of beauty is a joy for ever: Its loveliness increases; it will never Pass into nothingness; but still will keep A bower quiet for us, and a sleep Full of sweet dreams, and health, and quiet breathing..', user: @admin, poet: @poet2)
puts "#{Poem.count} poems created."