# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# task1 = Task.create(task: 'Do Laundry')
# task2 = Task.create(task: 'Make Dinner Reservations')


i=0
10000.times{
  Task.create(task: 'Task '+i.to_s)
  i+=1
}