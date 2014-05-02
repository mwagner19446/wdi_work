describe("doubleSort", function(){
  it("sorts all the words alphabetically", function(){
    x = doubleSort(["sugar", "butter", "egg"] )
    expect(x).to eq(["butter", "egg", "sugar"])
  }); 

  it("sorts all the numbers numerically", function(){
    x = doubleSort(["12", "10", "3", "4", "1"])
    expect(x).to eq(["1", "3", "4", "10", "12"])
  });  
    
  it("maintains the number/word patter of the original array", function(){
    x = doubleSort(["2", "4", "banana", "1", "vanilla", "flour"])
    expect(x).to eq(["1", "2", "banana", "4", "flour", "vanilla"])
  }); 

}); 

