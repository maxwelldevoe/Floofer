Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users

  get '/floofs', to: 'homes#index'
  get '/floofs/:id', to: 'homes#index'
  get '/floofs/new', to: 'homes#index'


    namespace :api do
      namespace :v1 do
        resources :floofs, only: [:index]
      end
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
