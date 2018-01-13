class User < ActiveRecord::Base
  # Include default devise modules.
  devise :invitable, :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable, :invitable
  include DeviseTokenAuth::Concerns::User

  has_one :avatar
  has_many :enrollments
  has_many :attendances
  has_many :courses, :through=>:enrollments, :source=>"course"
  has_one :avatar
  has_many :badges, through: :user_badges
  has_many :user_badges


  has_many :notes, class_name: "Note", foreign_key: "recipient_id"
  has_many :sent_notes, class_name: "Note", foreign_key: "sender_id"


  validates_presence_of :first_name, :last_name

  def full_name
    "#{self.first_name} #{self.last_name}"
  end

  def token_validation_response
    self.as_json(include: :enrollments)
  end

end
