# Project: Would Your Rather...?
# Noreen Wu 
# Udacity React: August 2019

# Overview

This React Redux app implements the game Would You Rather...?

The game consists of a set of questions in the form Would your rather do Option One or Option Two. 
Each user responds to these questions and the polling responses are collected and displayed. 
Each user may create their own polls as well. A leader board shows which users have created and 
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

Top level (in src)
  index.js - This file contains BrowserRouter wrapper that allows the routing in the app 
  to work and also and Provider, which allows all the components are able to get data from the store. 
  This file calls src/components/App.js
       
Components (in src/components)
  App.js - central, top-level component that incorporates the Navigation bar (Nav.js) and the 
  	definitions for which components to run based on the Route
    
    Nav.js - renders the navigation bar across all the app pages
  
  	NavSignInOut.js - is called by Nav.js to render either "Logout" or "Signin," depending on
      whether a user is logged in or not.
    
  Dashboard.js - the component that defines what shows up on the Dashboard or user's Home screen.
    To do this, it separates the user's answered questions from the unanswered ones and has
    the Question module render each question (only a question teaser is shown at this point, with
    a button to view details about a question, or respond to it). The questions are ordered by time of
    creation, from most recent to least recent
    
    Question.js - called on by Dashboard to handle the rendering of a Question on the home screen.
         Question utilizes Avatar (to display the question creator's avatar) 
         
    Poll.js - if the user clicks on View Poll from a Question on Dashboard, they will be shown either
         a form (displayed by Ballot.js), which allows the user to respond to the question, or 
         the results of the Poll, including which option the user voted for (PollResult.js)
    
        Ballot.js - this module displays the form that allows the user to vote. This module does have
             a little bit of its own state to control when to make the Submit button active, which only
             becomes active when the user has made a selection. If the user submits a vote, then
             Ballot's handleSubmit is called, which dispatches the action for handling and recording
             the vote in the redux store (via src/actions/shared.js: handleVote, src/actions/questions.js: recordVote,
             and src/utils/apis.js: saveQuestionAnswer). The follow-up screen after submitting a vote
             is the PollResult, displaying the collective result in aggregate, as well as the user's response
  
   		PollResults.js - this module is called as a result of the user casting a vote, or if the user
             has already answered the question at some time previously. In order to display the aggregate
             results, the BarGraph module shows the results in a bar graph, and BarResult describes them
             numerically
             
             Option.js - renders the question's Option One or Option Two. It is just a function receiving a prop, not a component.
             
             BarGraph.js - makes use of css to draw a graph representing aggregate vote response
             
   			 BarResult.js - displays the results of the voting for the specified question, making sure that
                the grammar is correct (vote vs votes)
                
             FlagUserResponse.js - PollResult also calls FlagUserResponse, which utilizes css to display an
                emblem indicating which of the 2 responses the user voted for
                
  
  LeaderBoard.js - The LeaderBoard page at /leaderboard is controlled by this component. The total score for
     each user is the sum of the number of questions s/he has created and the number of questions s/he has
     answered. The users are displayed in order of highest score to lowest, and UserStatus is used to
     help display each user's score and the breakdown of the score. UserStatus calls Avatar to help
     with Avatar display.
     
     UserStatus.js  - displays each user's score, plus the breakdown of each score
  
  NewQuestion.js - the NewQuestion component renders the form that allows the user to create a new question.
     It is available at /add, and dispatches the actions/shared/handleAddQuestion function, which calls the 
     src/utils/apis.js: saveQuestion api, and then dispatches the addQuestion reducer, triggering
     the ADD_QUESTION reducer logic for both users (src/reducers/users.js) and questions (src/reducers/questions.js).
     Its only state is to control when the Submit button becomes active and to control, whether the page
     should be redirected to Home (at /), which happens once the user has submitted the form.
     
  
  NotFound.js - displays a not found message if the user types in a url that is not part of the application,
     or if an invalid question id is supplied in the url /questions/:id
            
  
  SignIn.js - This page is shown when the user logs out, or if anything in the address bar is typed (since
     that triggers a reload of the app), and the first time the application is opened
  
     UserSelector.js - displays the drop-down controller that allows a user to login from the SignIn page.
    	 If a user is selected from the dropdown list, then handleChangeAuthedUser is invoked, which then 
         dispatches the setAuthedUser action, resulting in the authed user reducer being executed.
         
     UserOption.js - displays the actual options within the selector from UserSelector. 
   

Actions (in src/actions)
   authedUser.js
       contains functionality for setting the initial authedUser to '' and for changing the authedUser to
       whatever is specified, either '' for logging out or a user's id for logging in
   
   questions.js
       contains functionality for loading the initial questions that are saved in the DATA.js datastructure,
       as well as recordVote and addQuestion actions.
       
   shared.js
       contains functionality that bridges the different slices of state. For example, setting up the initial
       state requires the authedUser to be set and that the users and questions data be loaded. In addition,
       handling votes and adding questions involves saving data to both the users slice and the questions slice.
   
   users.js
       contains functionality for loading the users slice of state


Reducers (in src/reducers)
   authedUser.js
       contains the reducer for updating the authedUser state
       
   index.js
   	   this module contains the combineReducers function, which allows reducers in more than one segment
       to be run for one action, e.g. an update to the questions and users state can be made when handling
       a vote or adding a new question. This allows the Leader Board and the Poll Results page to display
       the connection between the users and the questions they created and their question responses.
   
   questions.js
       updates to the state that involve questions are in this module: loading question data, adding new
       questions, recording votes
       
   users.js
       updates to the users slice of the state are in this module; loading users data, adding new
       questions (the id is saved to the author's created questions list), and voting (user's response
       is saved in the user's profile)

       
   
Utils (in src/utils)
   DATA.js  - contains the initial data for the application, as well as functions that operate on it
   
   apis.js - contains slightly higher level functions that operate on the DATA; these are intended to be
       used by the rest of the application logic
       
   helpers.js - these functions are used throughout; they help to format the data into more convenient forms
   
   
Middleware (in src/middleware)
   index.js - contains the list of middleware pieces that are to be run
   
   logger.js - prints out the current state whenever it changes: very helpful in debugging
   
Css (in src/css)
   App.css - all the styles for the application

Images (in public/images)
   images for this app are in /public/images:
       penguin-100x100.jpg  (avatar for John Doe)
       user-female-100.jpg  (avatar for Sarah Edo)
       user-male-100.jpg    (avatar for Tyler McGinnis)
       would-you-rather-logo.jpg (image for login screen)
       
