require "spec_helper"
require_relative "../lib/play"

describe "#add" do
  it "adds two numbers together" do
    expect( add(2,3) ).to eq(5)
  end

  it "adds two negative numbers together" do
    expect( add(-2, -4) ).to eq(-6)
  end
end

describe "#odds" do

  it "returns negative numbers from an array" do
    expect( odds( [1,2,3]) ).to eq( [1,3] )
  end
  it "doesn't ever return positive numbers" do
    expect( odds( [2,4,6]) ).to eq( [] )
  end
  it "can return an empty array when given an empty array" do
    expect( odds( [] )).to eq( [] )
  end

end

describe "#palindrome?" do

  it "returns true for palindrome" do
    expect( palindrome?("racecar") ).to be_true
  end

  it "returns false for a non palindrome" do
    expect( palindrome?("cheeseburger") ).to be_false
  end

  it "isn't a palindrome if only one character" do
    expect( palindrome?("a") ).to be_false
  end

  it "is a palindrome if some characters are uppercase" do
    expect( palindrome?("aBba") ).to be_true
  end

  it "is a palindrome if there are spaces at the end" do
    expect( palindrome?("racecar ") ).to be_true
  end
  
end

describe "rps" do
  let(:player_one) do
      { name: "Jeff", play: "scissors" }
  end
  let(:player_two) do
      { name: "Peter", play: "paper"}
  end

  context "player one has the winning hand" do
    it "wins the game!" do
      expect( rps(player_one, player_two) ).to eq("Jeff wins!")
    end
end

  context "player two has the winning hand" do
    before do player_two[:play] = "rock"
    end
    it "wins the game!" do
      expect( rps(player_one, player_two) ).to eq("Peter wins!")
    end 
  end
end
