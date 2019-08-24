# Project: Would Your Rather...?
# Noreen Wu 
# Udacity React: August 2019

# Overview

This React Redux app implements the game Would You Rather...?

The game consists of a set of questions in the form Would your rather do Option One or Option Two. 
Each user responds to these questions and the polling responses are collected and displayed. 
Each user may create their own polls as well. A leaderboard shows which users have created and 
answered the most number of questions.


## Installation

This project is being submitted directly from the Udacity-provided workspace. It requires only 
npm install and npm start to install and launch.


## Implementation Notes

There are 4 main pages in the application, plus one error page:

  o the Home screen  (available at /)
  o the New Question screen (available at /add)
  o the Leader Board screen (available at /leaderboard)
  o the Signout/Signin screen (available at /signin)
  
The Not Found screen is available at /notfound.

This project uses a data structure to simulate a persisitent database. When the
application is first accessed, this data is loaded into the Redux store and
the vast majority of the application's components retrieve state information
from here. All of the initial data and logic for the application is downloaded
at once, and as long as all the actions performed on the application are done
by clicking on links and buttons, the state is preserved, and one would not know
that there is no actual database involved. However, if the address bar in 
the browser is used to access a page, this causes a fresh reload of the store,
and thus all changes made up to this point will be flushed, as the app reverts
back to what is stored as initial data. 
  

## Required Files

