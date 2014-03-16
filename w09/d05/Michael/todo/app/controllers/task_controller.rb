
class TaskController < ApplicationController
  def index   
  @tasks = Task.all 
  end

  def loadpage
    render json: Task.all
  end 

  def create
    @task = Task.create(task: params[:task])
    render json: @task

  end 

  def destroy
    @task = Task.find(params[:id])
    @task.delete
    render json: @task
  end 

  def update
    @task = Task.find(params[:id])
    @task.update(done: params[:done])
    render json: @task
  end


end