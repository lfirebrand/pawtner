# Pawtner
A web app to help you find your next adoptable pawtner in crime. Built with React and Parcel.

# Getting Started
Clone the repo: `git clone https://github.com/lfirebrand/pawtner.git`

Install project dependencies: `cd pawtner && npm install`

# Get Petfinder API keys

Go to [https://www.petfinder.com/developers/api-key] (Petfinder.com/developers/api-key) and sign up for a unique API key. Take note of your unique API key and Secret Key.

Note that this is a U.S.-based API so you MUST search using a U.S. city when using this app.

# Create and Update the .Env File
Make sure you're in the home directory `pawtner` and create a new .env file:
`touch .env`

Add your unique API Key and Secret:
`API_KEY=YOUR_UNIQUE_KEY
API_SECRET=YOUR_UNIQUE_SECRET`

Add .env to your .gitignore file.

# Update Your Search Location

Open Results.js and update the `componentDidMount` location to the desired U.S. city of your choice. 

# Start the Dev Server
`npm run dev`


