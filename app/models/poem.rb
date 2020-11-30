class Poem < ApplicationRecord
  belongs_to :user
  belongs_to :poet

  validates :title, presence: true 
  validates :content, presence: true
end
