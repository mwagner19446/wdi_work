require 'sinatra'
require 'sinatra/reloader'

get '/toss' do
  ["Heads", "Tales"].sample
end

get '/dice_roll' do
  (1..6).to_a.sample.to_s
end

get '/magic8ball/:question' do

  responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
     "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
     "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
     "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
     "Don't count on it", "My reply is no", "My sources say no",
     "Outlook not so good", "Very doubtful"]

     "#{params[:question]}? #{responses.sample}"


end