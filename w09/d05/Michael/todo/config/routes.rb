Todo::Application.routes.draw do

  root "task#index"

  resources :task, only: [:destroy, :update] do 
    collection do
      post "create"
    end 
  end 

end
