puts "What's the temperature?"
temp = gets.chomp.to_i
puts "Does the A/C work? (Enter y/n)"
if (gets.chomp.downcase == "y")
	func = true
else func = false
end
puts "What's the temperature you want?"
target = gets.chomp.to_i

if (temp > target) && (func == true)
	puts "Turn on the A/C Please"
elsif (temp > target) && (func == false)
	puts "Fix the A/C now!  It's hot!"
elsif (temp < target) && (func == false)
	puts "Fix the A/C whenever you have the chance...  It's cool..."
else
	puts "do nothing"
end
#blank cases: same temp and when its cool with a working AC