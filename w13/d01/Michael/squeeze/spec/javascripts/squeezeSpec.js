describe("squeeze", function(){
  it("removes the same string with consecutive duplicate letters removed", function(){
    expect(squeeze("shmeeeeeee!")).toBe("shme!");
  }); 

  it("does NOT remove nonconsecutive duplicate letters", function(){
    expect(squeeze("banana")).toBe("banana");
  }); 

});  