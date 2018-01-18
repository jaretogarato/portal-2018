class CourseAnnouncement < ApplicationRecord
  belongs_to :course
  belongs_to :announcement
end
