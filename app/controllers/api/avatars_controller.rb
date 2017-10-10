class Api::AvatarsController < ApplicationController
    def index
      render json: Avatar.all
    end
  
    def create
      auth = {
        cloud_name: ENV['CLOUDINARY_CLOUD_NAME'],
        api_key: ENV['CLOUDINARY_API_KEY'],
        api_secret: ENV['CLOUDINARY_API_SECRET']
      }

      uploaded_avatar_url= params.keys.first
      uploaded_file = params[uploaded_avatar_url]
  
      begin
        cloud_avatar = Cloudinary::Uploader.upload(uploaded_file, auth)
        avatar = Avatar.create(url: cloud_avatar['url'])
        render json: avatar
      rescue => e
        render json: { errors: e }, status: :bad_request
      end
    end
  end
  