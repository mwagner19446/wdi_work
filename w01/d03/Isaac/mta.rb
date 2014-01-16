n = ['ts', '34th', '28th-n', '23rd-n', 'us', '8th']
l = ['8th', '6th', 'us', '3rd', '1st']
s = ['gc', '33rd', '28th-s', '23rd-s', 'us', 'astor']
mta = {}
mta[:n] = n
mta[:l] = l
mta[:s] = s

result = 0

puts "What line are you getting on? Choose N, L, or S"
initial_line = gets.chomp.downcase

if initial_line == "n"
  puts "N line Choose your stop:"
  n.each_with_index { |stop, idx| puts idx.to_s + " " +  stop }
  stop = gets.chomp.to_i
elsif initial_line == "l"
  l.each_with_index { |stop, idx| puts idx.to_s + " " +  stop }
  stop = gets.chomp.to_i
end


puts "What line are you getting off on"
final_line = gets.chomp.downcase

if final_line == "n"
  puts "N line Choose your stop:"
  n.each_with_index { |stop, idx| puts idx.to_s + " " +  stop }
  final_stop = gets.chomp.to_i
elsif final_line == "l"
  puts "L line Choose your stop:"
  l.each_with_index { |stop, idx| puts idx.to_s + " " +  stop }
  final_stop = gets.chomp.to_i
end

if initial_line == "n" && final_line == "n"
  result = final_stop - stop 
  puts "Get off in #{result.abs} stops"
elsif  initial_line == "l" && final_line == "l"
  result = final_stop - stop 
  puts "Get off in #{result.abs} stops"
elsif initial_line == "n" && final_line == "l"
  result = 4 - stop
  result = result.abs
  result2 = 2 - final_stop
  result2 = result2.abs
  final_result = result + result2
  puts final_result
elsif initial_line == "l" && final_line == "n"
  result = 2 - stop
  result = result.abs
  result2 = 4 - final_stop
  result2 = result2.abs
  final_result = result + result2
  puts final_result
end