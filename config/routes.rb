Rails.application.routes.draw do
  resources :listings
  #SignUp
post '/signup', to: 'users#create'
  #Signin
post '/login', to: 'sessions#create'
  #Keep user logged in
get '/me', to: 'users#show'
  #Logout
delete '/logout', to: 'sessions#destroy'

get '/my-listings', to: 'listings#show_user_listings'
end
