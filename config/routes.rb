# frozen_string_literal: true

Rails.application.routes.draw do

  root "home#index"
  get "*path", to: "home#index", via: :all
  resources :tasks, only: %i[index create], param: :slug
  resources :users, only: :index
end
