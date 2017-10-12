Rails.application.routes.draw do
  
  mount_devise_token_auth_for 'User', at: 'api/auth'
  
  namespace :api do
    resources :courses do
      resources :sections
    end
    resources :sections do
      resources :groups
    end
    get 'avatar', to: 'avatar#index'
    post 'avatars', to: 'avatars#create'
    post '/invitation/send', to: 'invitations#invite'
    post '/invitation/accept', to: 'invitations#accept'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end