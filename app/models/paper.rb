class Paper < ActiveRecord::Base
   validates :content, :email, presence: true
end
