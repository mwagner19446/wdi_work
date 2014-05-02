describe("timeAngle", function(){
  it("returns the angle between an Hour Hand and a Minute hand", function() {
    expect(timeAngle("9:00") ).toEqual(45); 
  }); 

  it("returns the angle for times on the hour", function() {
    expect(timeAngle("12:00") ).toEqual(0); 
  }); 

}); 