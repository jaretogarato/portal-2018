class Course < ApplicationRecord
    has_many :enrollments
    has_many :sections
    has_many :users, :through => :enrollments
end
