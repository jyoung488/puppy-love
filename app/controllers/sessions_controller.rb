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

      "#{@user.id}"
    else
      @error = "Email and/or password are invalid!"
      erb :'/login', layout: false
    end
  else
    login(@user)
    redirect "/"
  end

end

delete '/logout' do
    logout
    redirect '/'
end
