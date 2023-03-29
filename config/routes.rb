Rails.application.routes.draw do
  #SignUp
post '/signup', to: 'users#create'
  #Signin
post '/login', to: 'sessions#create'
  #Keep user logged in
get '/me', to: 'users#show'
  #Logout
delete '/logout', to: 'sessions#destroy'
end
