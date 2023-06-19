
# PROJECT NAME
SPA-Delay

## Description

_Duration: 3 Week Sprint_

The Signal Processing App - Delay (SPA - Delay) is a website targeted for desktop that allows a user to adjust the settings of a delay line and hear one of several audio files processed by the delay line. In the name of immediacy, the user is taken to the main interface where the delay settings can be manipulated. If the user likes the current setting of the delay line, they can choose to save a preset, give it a name and description. The user will be asked to login or register if they are not logged in when attempting to save a preset. This preset is saved to the logged in user’s profile. The nav bar will have a tab where the user can select one of their presets, which takes the user back to the main page with those settings selected. A user can edit the name anddescription of any of their presets. 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](https://mysterious-forest-94897.herokuapp.com/#/main)

## Screen Shots
<img width="1485" alt="Screenshot 2023-06-07 at 5 51 23 PM" src="https://github.com/brendanhigginbottom/SPA-Delay/assets/111456731/b0da0bb2-4ae9-4911-aa34-84d909faf440">

<img width="757" alt="Screenshot 2023-06-07 at 5 51 56 PM" src="https://github.com/brendanhigginbottom/SPA-Delay/assets/111456731/f1c6a8a3-0ffd-417e-824a-6a26cdcc044c">

### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named `your database name`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. I recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Create a .env file with SERVER_SESSION_SECRET=[a long random string]. This is for the PassPort library. 
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you!

## Usage

1. Select a sound file
2. Hit play.
3. Play around with the settings. SPA-Delay was designed for user experimentation.
4. If you want to save the current settings, hit "Save Preset" and login or register.
5. To use your preset, select "Select Preset" and you will be returned to the delay interface
   with those values populated.
6. NOTE: As of 6/7/23, navigating away from the delay interface and back will cause the delay   
   to not function. Refresh the page on "My Presets" before selecting your preset.

## Built With

List technologies and frameworks here

React
Redux and Sagas
Express
PG 
MUI
WebAudio API
RNBO by Cycling '74

## License

[Cycling '74 License for Max-Generated Code for Export](https://support.cycling74.com/hc/en-us/articles/10730031661587-Cycling-74-License-for-Max-Generated-Code-for-Export)

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to the Tanzanite cohort, my family, and my partner. None of this could have happened without you. 

## Support
If you have suggestions or issues, please email me at [brendan.higginbottom@gmail.com]
