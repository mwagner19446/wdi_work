require 'spec_helper'


describe Word do |variable|
  it { should validate_presence_of(:word) }
  it { should validate_uniqueness_of(:word) }

end 