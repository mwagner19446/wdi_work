///OPEN QUESTION:  How to get the modulo? 


var encode = function(string) {
  encodeRails = [[],[],[]]
  stringArray= string.split("")
  for(i=0; i<stringArray.length; i++){
    encodeRails[i%encodeRails.length].push(stringArray[i])
  }
  merged = []
  merged = merged.concat.apply(merged, encodeRails)
  return merged.join("")
}



// return 'WECRLTEERDSOEEFEAOCAIVDEN'
// Option 1:  Use Underscore to flatten


//Option 2: Did not work Up the Rail.  This solution rotates the rails
// var encode = function(string) {
//   encodeRails = [[],[],[]]
//   stringArray= string.split("")
//   for(i=0; i<stringArray.length; i++){
//     encodeRails[i%3].push(stringArray[i])
//   }
//   merged = []
//   merged = merged.concat.apply(merged, encodeRails)
//   return merged.join("")
// }

//Option 3:  Kirsten's Solution:  Works
// var encode = function(string) {
//   var encodedString = "";
//   var loop = function(initial, add){
//     for(var i = initial; i < string.length; i=i+add) {
//       encodedString += string[i]
//     }
//   }
  
//   loop(0,4);
//   loop(1,2);
//   loop(2,4);
//   return encodedString
// }
