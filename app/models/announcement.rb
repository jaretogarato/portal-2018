class Announcement < ApplicationRecord
  has_many :course_announcements
  has_many :courses, through: :course_announcements
end
