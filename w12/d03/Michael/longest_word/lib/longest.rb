def longest_word(string)
  array = string.split(" ")
  @word_length = []

  array.each do |word|
    @word_length << word.length
  end 

end 


##Etan's Version
# def longest_word(string)
#   split_sentence = sentence.scan(/\w+/)

# end 