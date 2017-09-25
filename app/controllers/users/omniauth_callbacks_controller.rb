class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  http_basic_authenticate_with name: ENV['BASIC_AUTH_USERNAME'], password: ENV['BASIC_AUTH_PASSWORD'] if Rails.env.production?
end
