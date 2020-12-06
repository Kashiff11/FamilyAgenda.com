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
puts "#{Poet.count} poets created."

@poem = Poem.create!(title: 'The Road Not Taken', content: "Two roads diverged in a yellow wood,/\n/And sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence;\nTwo roads diverged in a wood, and -\nI took the one less travelled by,\nAnd that had made all the difference.", user: @admin, poet: @poet1)
@poem1 = Poem.create!(title: 'Where is the boat', content: 'Where is the boat? Where it was last week, down by the water.', user: @user1, poet: @poet1)
@poem2 = Poem.create!(title: 'Where is the cart', content: 'Where is the cart? Where it was last week, down by the water.', user: @admin, poet: @poet1)
puts "#{Poem.count} poems created."