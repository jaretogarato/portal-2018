require 'rails_helper'

RSpec.describe Group do
  it { should belong_to(:section) }
end

