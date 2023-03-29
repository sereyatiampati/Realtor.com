class SessionsController < ApplicationController
  # POST /sessions
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {errors: ["Invalid Username or Password"]}, status: :unauthorized
    end
  end

  # DELETE /sessions/1
  def destroy
    if session.include? :user_id
      session.delete :user_id
      head :no_content
    else
      render json: {errors:["You are not logged in"]}, status: :unauthorized
    end

  end
end
