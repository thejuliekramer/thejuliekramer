require 'sinatra'

IMAGES = [
{title: "Zak the Baker", url: "https://scontent-b-mia.xx.fbcdn.net/hphotos-frc3/t1.0-9/10308293_10152461364488809_3706630449424395291_n.jpg"},
{title: "First Day of Class", url: "http://wyncode.co/wp-content/uploads/2014/05/wyncode_first_cohort_may2014__44.jpg"},
{title: "Wyncode", url: "http://wyncode.co/wp-content/uploads/2014/05/wyncode___first_cohort85.jpg"},
]

	get "/" do
		 send_file File.expand_path('thejuliekramer.txt', settings.public_folder)
	end

	get "/thejuliekramer" do

	send_file File.expand_path('thejuliekramer.txt', settings.public_folder)

	end

	get "/images" do

	@images = IMAGES 
	erb :images
	end

	get "/images/:index" do |index|
	@image = IMAGES [index]
	end

	