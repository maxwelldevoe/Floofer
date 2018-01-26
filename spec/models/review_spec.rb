require 'rails_helper'

RSpec.describe Review, type: :model do

  it { should belong_to(:user) }
  it { should belong_to(:floof) }

  it { should have_valid(:description).when("This is a good Pet!") }
  it { should_not have_valid(:description).when(nil, "") }
  it { should_not have_valid(:description).when("Q"*5001) }

  it { should have_valid(:rating).when(5,4,3,2,1) }
  it { should_not have_valid(:rating).when(nil, "") }
  it { should_not have_valid(:rating).when(6,0) }

  it { should have_valid(:upvotes).when(0,1) }
  it { should_not have_valid(:upvotes).when(-1) }
  it { should_not have_valid(:upvotes).when(nil, "") }

  it { should have_valid(:downvotes).when(0,1) }
  it { should_not have_valid(:downvotes).when(-1) }
  it { should_not have_valid(:downvotes).when(nil, "") }

end
