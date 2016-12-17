User.destroy_all

20.times do
  user = User.create(username: Faker::Pokemon.name,
    email: Faker::Internet.email,
    password: "password")
end
