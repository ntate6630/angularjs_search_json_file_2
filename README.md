# Using AngularJS to read a JSON file and search data connected with the keyword in the view.

## Overview

### What is this app for?

- This app will read from a JSON file the recipe name, ingredients and cooking instructions into a table. 
- The table is sorted alphabetically and can be searched by recipe name.

## Features

### Existing Features
- Created a JSON file with "dish", "ingredients" and "method" entries
- Added a service to read the JSON file.
- View data objects in the console for testing
- Create a web page that displays a table
- Added a search box
- Added Angular "Search, filter, and byOrder - alphabetical sorting of recipes" 

### Features Left to Implement
- Display data in ng-view
- Style with CSS
- Use this projects code in the Stream 1 project


### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)