class User < ActiveRecord::Base
  # Include default devise modules.
  devise :invitable, :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable, :invitable
  include DeviseTokenAuth::Concerns::User

  has_many :courses, :through => :enrollments
  has_many :enrollments

  validates_presence_of :first_name, :last_name

  def full_name
    "#{self.first_name} #{self.last_name}"
  end 

end