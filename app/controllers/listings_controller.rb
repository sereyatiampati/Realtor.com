class ListingsController < ApplicationController
  before_action :set_listing, only: %i[ show update destroy ]
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_entry
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  before_action :authorize
  skip_before_action :authorize, only: [:index]

  # GET /listings
  def index
    @listings = Listing.all

    render json: @listings, status: :ok
  end

  # GET /listings/1
  def show
    render json: @listing
  end

  # POST /listings
  def create
    user= User.find_by(id: session[:user_id])
    listing = user.listings.create!(listing_params)
    render json: listing, status: :created
  end

  def show_user_listings
    user= User.find_by(id: session[:user_id])
    listings = user.listings
    render json: listings
  end

  # PATCH/PUT /listings/1
  def update
    if @listing.update!(listing_params)
      render json: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listings/1
  def destroy
    @listing.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing
      @listing = Listing.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def listing_params
      params.permit(:address, :property_type, :area_in_sqm, :beds, :baths, :garages, :price, :image_url)
    end

    def invalid_entry(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def authorize
      return render json: { errors: ["Not authorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def record_not_found
      render json: {errors: ["Record Not Found"]}, status: :not_found
    end
end
