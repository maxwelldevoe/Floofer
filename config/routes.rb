Rails.application.routes.draw do
  root 'floofs#index'
  devise_for :users

  get '/floofs', to: 'floofs#index'
  get '/floofs/:id', to: 'floofs#index'
  get '/floofs/new', to: 'floofs#index'


    namespace :api do
      namespace :v1 do
        resources :floofs, only: [:index, :show]
      end
    end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
