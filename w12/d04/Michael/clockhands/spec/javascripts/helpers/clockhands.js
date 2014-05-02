var timeAngle = function(time){
  var hour = parseInt(time.replace(/:../,"") )
  var minute = parseInt(time.replace(/:../,"") )

  var hourPosition = function(hour, minute){
     var handPosition
     
     if(hour===12){
      handPosition = 0
     }
     else {handPosition = hour * 30} 

    if(minute == 0){
      handPosition + 0
    }
    else {handPosition = handPosition + ( minute +.5)}

    return handPosition
    }; 

  var minutePosition = function(minute){
    if(minute===0){
      return 0
    }
    else return minute *6
  }

  return minutePosition - hourPosition

}; 