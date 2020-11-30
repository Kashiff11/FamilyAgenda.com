class User < ApplicationRecord
  has_secure_password

  validates :first_name, :last_name, presence: true
  validates :first_name, :last_name, { with: /\A[a-zA-Z]+\z/,
    message: "Only letters allowed for first/last name" }

  validates :date_of_birth, presence: true

  validates :phone_number, presence: true, uniqueness: true
  validates :phone_number => {:format => /\d{3}-\d{3}-\d{4}/,
    message: "Phone number should be in the following format: xxx-xxx-xxxx."}
  
  validates :email, presence: true, uniqueness: true
  validates :email, format: {with: URI::MailTo::EMAIL_REGEXP,
    message: "Please enter a valid email address."}

  validates :username, presence: true, uniqueness: true
  validates :username, length: { in: 6..15,
    message: "Username should be between 6 and 15 characters."}

  validates :password, length: { in: 6..15,
    message: "Password should be between 6 and 15 characters."}

  has_many :poems
  has_many :poets
end
