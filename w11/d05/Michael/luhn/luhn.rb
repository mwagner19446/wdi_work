require 'pry'
# step 1:  Turn digits into 16 place array
# step 2:  Double everyother Digit
# step 3:  Separate out the digits
# step 4:  Add all the digits
# step 5:  Divide by 10 to determine remainder

binding.pry
def Luhn(credit_card)
  @cc_array = CreateArray(credit_card)
  @cc_double = DoubleEveryOther(@cc_array)
  @cc_digit_sum = SumAllDigits(@cc_double)

  if @cc_digit_sum % 10 == 0
    return true
  else return false
  end

end 

def CreateArray(credit_card)
  return cc_array = credit_card.split("")
end 

def DoubleEveryOther(cc_array)
  cc_array.each do |number_index|
    number_index = number_index*2
  end 
end 

def SumAllDigits(cc_double)
  allJoin = cc_double.join("")
  allDigits = allJoin.split("")
  allDigits.each do |digit|
    digit.to_i * 2
  end 

end 
