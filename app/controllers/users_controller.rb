class UsersController < ApplicationController
  # before_action :set_user, only: %i[ show update destroy ]
rescue_from ActiveRecord::RecordInvalid, with: :invalid_entry
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # Persist a logged in user
  def show
    user = User.find_by(id: session[:user_id]) 
    if user
        render json: user
    else
        render json: { error: "Not authorized" }, status: :unauthorized
    end
  end

   # Create a user account on Signup
  def create
      user = User.create!(user_params)
       if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
  end

  # PATCH/PUT /users/1
  # def update
  #    @user.update!(user_params)
  #     render json: @user
  # end

  # # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :email, :password, :password_confirmation)
    end

    def invalid_entry(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found
      render json: {error: "User not found!"}
    end
end
