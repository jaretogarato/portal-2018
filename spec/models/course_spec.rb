require 'rails_helper'

RSpec.describe Course, type: :model do
  
  describe 'attributes' do
    it { should respond_to(:course_type) }  
    it { should respond_to(:term) }  
    it { should respond_to(:year) }  
  end
  
  describe 'validations' do 
    context 'presence of validations' do          
      it { should validate_presence_of(:course_type) }
      it { should validate_presence_of(:term) }
      it { should validate_presence_of(:year) }
    end

    context 'numericality_of' do
      it { should validate_numericality_of(:year) }
    end

  describe 'associations' do
      it { should have_many(:enrollments) }
      it { should have_many(:users).through(:enrollments) }
      it { should have_many(:sections) }
    end
  end
end
