# United Brotherhood of Carpenter's Website
The official website of the United Brotherhood of Carpenter's Local 197.

![Build Status](https://codebuild.us-east-1.amazonaws.com/badges?uuid=eyJlbmNyeXB0ZWREYXRhIjoiay8yQjNzaTEveDVERlhsSEJxbk1TVzBoWDlWcmJJbTZmMHRkWk1DYk0xZCt5WnZpT2tBN09YdmpxUUdIbUNzNlJtOWtHZ0JPTVpYMzZDblc5WU1LY0wwPSIsIml2UGFyYW1ldGVyU3BlYyI6ImFEWXYxekRiNFdvN283NEciLCJtYXRlcmlhbFNldFNlcmlhbCI6MX0%3D&branch=master)

## Run Dev

1. `npm install` installs all the dependencies needed to build the site.
2. `npm run start:dev` builds your static assets and places them on the `dist/` folder.
3. Head to the URL on your command line to see the website, make changes for real-time updates.

## components
<!-- react-components-docs -->
[index.js](src/components/Button/index.js)
### 

#### Props


[index.js](src/components/Footer/index.js)
### 

#### Props


[index.js](src/components/Header/index.js)
### 

#### Props


[index.js](src/components/Hero/index.js)
### 

#### Props


[index.js](src/components/Input/index.js)
### Class representing an input field
@extends Component

#### Props

##### title

- **required:** false
- **type:** string 

The title of the input field.

##### titleEs

- **required:** false
- **type:** string 

The title of the input field in spanish.

##### placeholder

- **required:** false
- **type:** string 

Text to display in the input field when there is no text

##### name

- **required:** false
- **type:** string 

The name of the input field

##### type

- **required:** false
- **type:** custom 

The type of the input field (text, email, password, etc.)

##### content

- **required:** true
- **type:** string 

Text to display in the input field as text.

##### controlFunc

- **required:** true
- **type:** func 

Function to update the *content* prop variable.
@param e event on change, get the text by with `e.target.value`

##### onEnter

- **required:** false
- **type:** func 

Function to run when the Enter key is pressed in the input field.

##### className

- **required:** false
- **type:** string 

Class name to add a class to the component for extra styling.


[index.js](src/components/Panel/index.js)
### 

#### Props


[index.js](src/components/SignIn/index.js)
### 

#### Props


[index.js](src/components/SignUp/index.js)
### 

#### Props


[index.js](src/components/Snippet/index.js)
### 

#### Props


[index.js](src/components/Text/index.js)
### 

#### Props
<!-- react-components-docs:end -->
