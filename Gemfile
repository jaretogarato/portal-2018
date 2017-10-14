source 'https://rubygems.org'
ruby '2.3.1'

gem 'rails', '~> 5.1.4'
gem 'pg', '~> 0.18'
gem 'puma', '~> 3.7'
gem 'omniauth'
gem 'devise'
gem 'devise_token_auth'
gem 'devise_invitable'
gem 'cloudinary'

group :development, :test do
  # Call 'binding.pry' anywhere in the code to stop execution and get a debugger console
  gem 'pry'
  gem 'dotenv-rails'
  gem 'faker'
  gem 'rspec-rails'
  gem 'shoulda-matchers'
  gem 'database_cleaner'
  # put /coverage into your git ignore
  gem 'simplecov'
end

group :development do
  gem "letter_opener"
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]