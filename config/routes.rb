Rails.application.routes.draw do
mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users, only: [:update, :show]
    resources :quizzes
    resources :courses do
      resources :sections
      resources :attendances, only: [:index, :create]
    end

    resources :sections do
      resources :sub_sections
      resources :groups
      resources :create_assignments
    end

    resources :sub_sections do
      resources :lectures
    end

    resources :assignments

    resources :enrollments, except: [:index, :show]

    get  'user_courses/:user_id', to: 'courses#user_courses'
    get  'avatar', to: 'avatar#index'
    post 'avatars', to: 'avatars#create'
    post '/invitation/send', to: 'invitations#invite'
    post '/invitation/accept', to: 'invitations#accept'
    get  '/course_users', to: 'users#course_users'
    get '/course/:id/users', to: 'courses#users_by_course_id'
    get '/lectures', to: 'lectures#all_lectures'
    # get '/group_lectures', to: 'sub_sections#group_lectures'

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'

end
