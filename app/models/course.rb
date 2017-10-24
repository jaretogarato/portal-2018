class Course < ApplicationRecord
    has_many :enrollments
    has_many :users, through: :enrollments
    has_many :sections
    has_many :attendances

    validates_presence_of :course_type, :term, :year
    validates_numericality_of :year, :only_integer => true
end