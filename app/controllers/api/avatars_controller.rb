class Api::AvatarsController < Api::ApiController

  def create
    auth = {
      cloud_name: ENV['CLOUD_NAME'],
      api_key: ENV['API_KEY'],
      api_secret: ENV['API_SECRET']
    }

    uploaded_avatar_name = params.keys.first
    uploaded_file = params[uploaded_avatar_name]

    begin
      cloud_avatar = Cloudinary::Uploader.upload(uploaded_file, auth)
      avatar = Avatar.create(url: cloud_avatar['url'], user_id: current_user.id)
      render json: avatar
    rescue => e
      render json: { errors: e }, status: :bad_request
    end
  end

end
