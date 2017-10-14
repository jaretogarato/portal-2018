require 'rails_helper'

RSpec.describe Section do
  it { should have_many(:groups) }
  it { should belong_to(:course) }
end

