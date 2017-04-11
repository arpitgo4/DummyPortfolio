
# Dummy Portfolio Page [![Build Status](https://travis-ci.org/arpitgo4/Tribute-Page.svg?branch=master)](https://travis-ci.org/arpitgo4/Tribute-Page)
Basic design challenge [Build a Portfolio Page](https://www.freecodecamp.com/challenges/build-a-personal-portfolio-webpage) from [freecodecamp.com](https://www.freecodecamp.com) for Front End Developer Certification.

Hosted on Heroku at [http://dummy-portfolio-freecodecamp.herokuapp.com/](http://dummy-portfolio-freecodecamp.herokuapp.com/).

**Note: First load will take around 60-90 seconds, as application is hosted on Heroku Developer's Dyno, which sleeps after 30 minutes of inactivity.**

<p align="center">
  <img src="https://lh5.googleusercontent.com/b_P3Icy4I76GjNTAtUST1jsOEwwewuLxgHF64xI3d3ioGkUMyN8ehYtyMT2h0WwQ7dNVrzBIk5Me0ts=w1366-h638-rw" alt="Design Preview Image"/>
</p>

## Project Structure 

```
	.
	├── src                     	#  Frontend source files
	|   ├── components          	#  React component's source
	|   ├── index.html          	#  Root HTML template
	|   ├── index.js            	#  Frontend source entry point
	|   └── style.css           	#  Global stylesheet
	├── .babelrc                	#  Babel configuration ( ES6, React, JSX )
	├── .eslintrc               	#  ESLint configuration
	├── devServer.js            	#  Hot loading server source ( development mode )                     
	├── dist                        #  Compiled files     
	├── .gitignore                  #  Ignored files from git commit
	├── server.js                   #  Express server configuration ( routes, middlewares, models )
	├── LICENSE                     #  License to use the project
	├── package.json                #  Frontend and backend dependencies
	├── README.md                   #  This file
	└── webpack.config.js           #  Webpack configuration for 'production' and 'development' 
 
```

## Quick Start
### Just to check everything is working
```
# Install the dependencies
npm install

# Build the client 
npm run build:production

# Start the project ( it will build the client, before starting the server )
npm start

# Open web browser at http://localhost:8080
```
