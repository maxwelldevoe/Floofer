require 'rails_helper'

RSpec.describe Category, type: :model do

  it { should have_many(:floofs) }

  it { should have_valid(:name).when('Business') }
  it { should_not have_valid(:name).when(nil, '') }
  it { should_not have_valid(:name).when('max') }

end
