Setup:
rake db:create db:migrate db:seed

Normal User:
email: 'test@test.com'
password: 'password'

Admin User:
email: 'admin@admin.com'
password: 'password'

Be sure you update .env with appropriate api keys (use template from .env.example)
