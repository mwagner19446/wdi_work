var squeeze = function(string){
  valRepeat = string.match(/(.)\1{1,}/i)
  return string.replace(valRepeat[0], valRepeat[1])
}