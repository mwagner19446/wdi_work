class MoviesController < ApplicationController

  def index
    @movies = Movie.all
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @movies }
    end

  end 

  def create
    @movie = Movie.new(movie_params)
    @movie.poster = moviePoster(@movie.title)


    if @movie.save
      render json:@movie
    else
      render status: 400, nothing: true
    end 
  end 

  def moviePoster(title)
    split_title = title.gsub(" ","%20")
    poster = JSON(HTTParty.get("http://www.omdbapi.com/?t=#{split_title}") )
    return poster = poster["Poster"]
  end


  def update
    @movie = Movie.find(params[:id])

    if @movie.update(movie_params)
      render status: 200, nothing:true
    else
      render status: 400, nothing:true
    end 

  end 

  def destroy
    @movie = Movie.find(params[:id])

    if @movie.destroy
      render json: {}
    else
      render status: 400, nothing: true
    end 

  end

     

  private

  def movie_params
    params.require(:movie).permit(:title, :post, :seen)
  end 

end 


