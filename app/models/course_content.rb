class CourseContent < ApplicationRecord
  belongs_to :sub_section
  belongs_to :assignment, optional: true
  belongs_to :lecture, optional: true
  belongs_to :quiz, optional: true
  belongs_to :miscellaneou, optional: true

  validates_presence_of :sub_section_id
  #TODO Make these work
  # validates_presence_of :assignment_id, :unless => :lecture_id? || :quiz_id?
  # validates_presence_of :lecture_id, :unless => :quiz_id? || :assignment_id?
  # validates_presence_of :quiz_id, :unless => :assignment_id? || :lecture_id?
end
