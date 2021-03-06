

def odds(numbers)
  return numbers.select do |num|
    num.odd?
  end
end

def palin(word)
  uniform = word.downcase.strip
  return uniform == uniform.reverse && uniform.size > 1
end

def rps(player_one, player_two)
  beats = {
    "scissors" => "rock",
    "paper" => "scissors",
    "rock" => "paper"
  }

  if beats[player_one[:play]] == player_two[:play]
    return "#{player_two[:name]} wins!"
  else
    return "#{player_one[:name]} wins!"
  end

end