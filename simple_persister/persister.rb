require 'sinatra'
require 'json'
require 'yaml'
require 'fileutils'

post '/persist/*' do
  FileUtils.mkpath('db/' + params["splat"][0])
  payload = JSON.parse(request.body.string)
  payload.each { |key, value| File.open("db/#{params["splat"][0]}/#{key}.yml", "w") {|f| YAML.dump(value, f)} }
  'OK'
end

get '/persisted/*' do 
  YAML.load_file("db/#{params["splat"][0]}.yml").to_json
end
