class MoviesController < ApplicationController

  def index
  end 

  def create
    @movie = Movie.new(movie_params)
    binding.pry
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
    binding.pry
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


