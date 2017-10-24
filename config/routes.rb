Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :courses do
      resources :sections
      resources :attendances, only: [:create]
    end

    resources :sections do
      resources :groups
    end

    resources :groups do
      resources :lectures
    end

    get  'user_courses/:user_id', to: 'courses#user_courses'
    get  'avatar', to: 'avatar#index'
    post 'avatars', to: 'avatars#create'
    post '/invitation/send', to: 'invitations#invite'
    post '/invitation/accept', to: 'invitations#accept'
    get  '/course_users', to: 'users#course_users'
    # get '/group_lectures', to: 'groups#group_lectures'
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
