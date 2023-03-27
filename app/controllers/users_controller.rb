class UsersController < ApplicationController
  before_action :set_user, only: %i[ show update destroy ]
rescue_from ActiveRecord::RecordInvalid, with: :invalid_entry
rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  # # GET /users
  # def index
  #   @users = User.all

  #   render json: @users
  # end

  # GET /users/1
  def show
    render json: @user
  end

  # POST /users
  def create
    # debugger
      @user = User.create!(user_params)
      render json: @user, status: :created
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
      params.permit(:username, :email, :password)
    end

    def invalid_entry(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def record_not_found
      render json: {error: "User not found!"}
    end
end
