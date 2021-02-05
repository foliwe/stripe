{
    "name": "awesomeapp",
    "description": "My Strip Rails app, running on Dokku!",
    "keywords": [
      "dokku",
      "rails"
    ],
    "scripts": {
      "dokku": {
        "postdeploy": "bundle exec rails db:migrate"
      }
    }
  }