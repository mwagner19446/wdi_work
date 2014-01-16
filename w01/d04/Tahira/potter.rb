#Read contents of file into 
f = File.new("potter.csv", "r")
  characters = Array.new
  f.each_line do |line|
    attributes = line.split(',')
    a = Hash.new
    a[:mentions] = attributes[0]
    a[:name] = attributes[1]
    a[:house] = attributes[2]
    characters.push(a)
  end
f.close

#Method that returns names of all the characters
def names(characters)
  names_list = characters.map {|h| h[:name]}
  return names_list
end

def multiple_mentions(characters)
  multiple_mentions_list = characters.select { |h| h[:mentions].to_i > 500} 
  return multiple_mentions_list
end

def houses(characters) {
  houses_list =
}

## Test that code is working
puts characters
puts characters.count
puts names(characters)
puts multiple_mentions(characters)



# # Book 8: Harry Potter and the Comma Separated Value

# Included is a csv file with a bunch of Harry Potter data. Each line contains the number of times a certain character was mentioned throughout the Harry Potter series, their name, and in some cases, the house they are associated with. Your job will be to slice and dice the data in a variety of ways using File I/O, Arrays & Hashes, Enumeration, and String Manipulation.

# ### To Do

# * Write a Ruby program to open the `potter.csv` file.
# * Figure out the data structure in which you want to store the information, and read in the data.

# Write methods for each of the following:

# 1. Return an array with just the names of all the characters
# * Return an array with all the characters with more than 500 mentions. Each entry in the array should contain all information about that character. (ie `{:mentions=>18956, :name=>"Harry Potter", :house=>"Gryffindor"}`)
# * Return an array with the names of all the houses. `["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"]`
# * Return an array with all the characters with one word names. Each entry in the array should contain all information about that character. (ie `{:mentions=>1797, :name=>"Voldemort", :house=>"Slytherin"}`)
# * Return the number of characters from Hufflepuff (Hint: It should be 3)
# * Return an array with all of the character names, but for the characters from Slytherin, reverse their names (ie "Draco Malfoy" becomes "yoflaM ocarD")
# * Return an array with the unique last names of all the characters from Gryffindor (ie, print Weasley only 1 one time)
# * Return an array with the names of all the Weasleys, but give each of them a middle name of "Badger"
# * Return an array with the first names of characters whose first names end in "y"

# ### Bonus

# * Return an array with all of the characters' names whose name contains "ll" somewhere
# * Return an array with all of the characters' names whose name contains multiple k's
# * Return an array with all of the characters whose first name begins with the same letter as their last name, sorted alphabetically (ie "Bathilda Bagshot". Note: "Nearly Headless Nick" counts here!)

# ### Tips:
# * Try to minimize your use of ".each". In most of these cases, there will be another enumerable method that will be a better tool for the job!
# * Ruby Docs for Array, String, and Enumerable are your friend!