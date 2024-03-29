get '/login' do
  if request.xhr?
    erb :'/login', layout: false
  else
    erb :'/login'
  end
end

post '/login' do
  @user = User.find_by(username: params[:username])
  if request.xhr?
    if @user && @user.authenticate(params[:password])
      login(@user)

      erb :"/users/show", layout: false
    else
      @error = "Username and/or password are invalid!"
      erb :"/login", layout: false
    end
  else
    login(@user)
    redirect "/users/#{@user.id}"
  end

end

delete '/logout' do
    logout
    redirect '/'
end
