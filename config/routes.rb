Rails.application.routes.draw do
  root 'users#index'
  devise_for :users

  get '/floofs', to: 'homes#index'
  get '/floofs/:id', to: 'homes#index'
  get '/floofs/new', to: 'homes#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
