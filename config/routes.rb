Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'floofs#index'
  devise_for :users

  get '/floofs', to: 'floofs#index'
  get '/floofs/:id', to: 'floofs#index'
  get '/floofs/new', to: 'floofs#index'


    namespace :api do
      namespace :v1 do
        resources :categories, only: [:index]
        resources :floofs, only: [:index, :show, :new, :create] do
          resources :reviews, only: [:index, :show]
        end
      end
    end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
