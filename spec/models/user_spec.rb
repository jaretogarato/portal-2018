require 'rails_helper'

RSpec.describe User do
  it { should have_many(:enrollments) }
  it { should have_many(:courses).through(:enrollments) }
end
