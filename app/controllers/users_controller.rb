# frozen_string_literal: true

class UsersController < ApplicationController
  def index
    users = User.all.as_json(only: %i[id name])
    render status: :ok, json: { users: users }
  end
end
