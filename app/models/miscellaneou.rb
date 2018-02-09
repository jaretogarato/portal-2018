# *** rails automatically updated to 'Miscellaneou' due to plurality. I promise I know how to spell ***
class Miscellaneou < ApplicationRecord
  has_many :course_contents
  has_many :sub_sections, through: :course_contents

  validates_presence_of :title, :content
end
