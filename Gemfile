source 'https://rubygems.org'
ruby '2.5.0'

gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'omniauth', '~> 1.6.1'
gem 'devise', '~> 4.3.0'
gem 'devise_token_auth', '~> 0.1.42'
gem 'devise_invitable', '~>1.7.2'
gem 'cloudinary', "~> 1.8.1"
gem 'delayed_job_active_record', '~> 4.1.2'
gem 'jbuilder', '~> 2.7.0'

group :development, :test do
  # Call 'binding.pry' anywhere in the code to stop execution and get a debugger console
  gem 'pry', '~> 0.11.1'
  gem 'dotenv-rails', '2.2.1'
  gem 'faker', github: 'stympy/faker'
  gem 'rspec-rails'
end

group :test do
  gem 'database_cleaner'
  gem 'shoulda-matchers'
  gem 'simplecov'
  gem 'factory_bot_rails'
end

group :development do
  gem "letter_opener", '~> 1.4.1'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring', '~> 2.0.2'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
