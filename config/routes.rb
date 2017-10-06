Rails.application.routes.draw do
  namespace :api do
    get 'section/index'
  end

  mount_devise_token_auth_for 'User', at: 'api/auth'
  namespace :api do
    resources :courses do
      resources :sections
    end
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
