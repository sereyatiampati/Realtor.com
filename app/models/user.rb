class User < ApplicationRecord
    has_secure_password
    validates :email, presence:true, uniqueness:true
    validates :username, presence:true, uniqueness:true, length: { minimum: 3 }
    validates :password, presence: true, length: { minimum: 3 }
end
