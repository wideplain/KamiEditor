Rails.application.routes.draw do
  devise_for :controllers
  devise_for :users
  mount Ckeditor::Engine => '/ckeditor'
  root 'posts#index'
  resources :posts
end
