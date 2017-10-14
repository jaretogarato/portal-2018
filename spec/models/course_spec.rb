require 'rails_helper'

RSpec.describe Course do
  it { should have_many(:enrollments) }
  it { should have_many(:users).through(:enrollments) }
  it { should have_many(:sections) }
end
