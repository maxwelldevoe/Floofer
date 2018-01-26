require 'rails_helper'

RSpec.describe Floof, type: :model do

  it { should have_many :reviews }
  it { should have_many :users }

  it { should have_valid(:name).when('Mr. Peanut Butter') }
  it { should_not have_valid(:name).when(nil, '') }

  it { should have_valid(:job_title).when('Actor') }
  it { should_not have_valid(:job_title).when(nil, '') }

  it { should have_valid(:current_employer).when('Game Show Host') }

  it { should have_valid(:category).when('Entertainment') }
  it { should_not have_valid(:category).when(nil, '') }

  it { should have_valid(:species).when('Dog') }
  it { should_not have_valid(:species).when(nil, '') }

end
