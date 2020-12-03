class Poet < ApplicationRecord
  belongs_to :user
  has_many :poems

  validates :first_name, presence: true
  
  validates :last_name, presence: true
  
  # validates :year_born, 
  #   inclusion: { in: 0000..Date.today.year }
  
  # validates :year_died, presence: false,
  #   inclusion: { in: 0000..Date.today.year }
end
