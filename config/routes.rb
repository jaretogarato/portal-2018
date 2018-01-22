Rails.application.routes.draw do
mount_devise_token_auth_for 'User', at: 'api/auth'

  namespace :api do
    resources :users, only: [:update, :show] do
      resources :user_badges, except: [:update, :show]
    end
    resources :lectures
    resources :quizzes do
      resources :quiz_questions, except: [:show]
    end

    resources :course_contents, only: [:index, :create, :destroy]

    resources :courses do
      resources :sections
      resources :attendances, only: [:index, :create]
    end

    resources :sections do
      resources :sub_sections
      resources :groups
    end

    resources :sub_sections do
      resources :lectures
    end

    resources :ta_groups, only: :index

    resources :assignments
    resources :enrollments, except: [:index, :show]
    resources :notes, only: [:create, :index, :update]
    resources :badges

    put 'update_profile_pic', to: 'profiles#update_profile_pic'

    get 'courses/:id/permissions', to: 'courses#single_user_with_enrollment'
    get  'user_courses/:user_id', to: 'courses#user_courses'
    get  'avatar', to: 'avatar#index'
    post 'avatars', to: 'avatars#create'
    post '/invitation/send', to: 'invitations#invite'
    post '/invitation/accept', to: 'invitations#accept'
    post '/invitations/mass_invite', to: 'invitations#mass_invite'
    get  '/course_users/:id', to: 'users#course_users'
    get '/course/:id/users', to: 'courses#users_by_course_id'
    post '/courses/:id/generate_groups', to: 'ta_groups#generate_groups'
    get '/lectures', to: 'lectures#all_lectures'

    get '/notes/:user_id', to: 'notes#recipient_notes'
    # get '/group_lectures', to: 'sub_sections#group_lectures'

    post 'avatars', to: 'avatars#create'

    get '/courses/:course_id/announcements', to: 'announcements#index'
    post '/courses/:course_id/announcements', to: 'announcements#create'

  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'

end
