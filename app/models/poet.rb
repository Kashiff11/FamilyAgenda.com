class Poet < ApplicationRecord
  belongs_to :user
  has_many :poems

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :year_born, 
    inclusion: { in: 0000..Date.today.year },
    format: {with: /(19|20)\d{2}/i,
      message: "Birth year should be a 4 digit number"}
  validates :year_born, 
    inclusion: { in: 0000..Date.today.year },
    format: {with: /(19|20)\d{2}/i,
      message: "Birth year should be a 4 digit number"}
end
