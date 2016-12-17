get '/login' do
  erb :'/login', layout: false
end

post '/login' do
  @user = User.find_by(username: params[:username])
  if @user && @user.authenticate(params[:password])
    login(@user)
    redirect "/users/#{@user.id}"
  else
    @error = "Email and/or password are invalid!"
    erb :'/login'
  end
end

delete '/logout' do
    logout
    redirect "/"
end
