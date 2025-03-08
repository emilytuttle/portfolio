# Overview
This is my Portfolio in React form. I wanted to create a Single Page Application that loads different content depending on how the user interacts. It is not all just sitting there for the user to see, they have to take action to see the whole site. 

To start this program, you can clone the repo, use npm i to install all the dependencies, then enter npm start. It will open a new browser page that allows you to use the site through localhost.

I wrote this software to practice with a new technology, and work on my routing. I also wanted to try different interactive elements that I haven't done before, such as image and content sliders.

{Provide a link to your YouTube demonstration.  It should be a 4-5 minute demo of the software running (starting the server and navigating through the web pages) and a walkthrough of the code.}

[Software Demo Video](https://youtu.be/Q-7HSuBwlmw)

# Web Pages

{Describe each of the web pages you created and how the web app transitions between each of them.  Also describe what is dynamically created on each page.}
Transition between pages: I use BrowserRouter from React in my index.js file. It wraps my App component, so that I can use routing to move from one page to another without reloading the whole site. My App.js file determines the routes. It imports all of my pages, and creates a route path for each

-Home page: The home page gives general page direction. It lets the user know they can use the links above to navigate, and where they can get my contact information. A personalized greeting is displayed dynamically if the user enters their name, in which case it is shown back to them to say hello. 

-About Me: The page gives a little bit of information about me. There are several pictures that are in a carousel that the user can scroll through. The weather is also pulled dynamically from an API so that the weather for my day will be seen, and they can know what I might be doing that day.

-Projects: This page shows all of my projects. The user can click through the carousel to see pictures and descriptions of each. If ther is a video or GitHub repo link, that is also displayed and can be opened in a new tab when clicked. The page dynamically changed the background color, based off of the users input of their favorite color.

-Work History: This page shows my work history for the last few years. They are loaded from an array. The site is dynamic where a message is shown. The user can put an input in saying how many jobs they have had in the last 5 years, and depending on their answer, they will get a message about the amount.

# Development Environment

{Describe the tools that you used to develop the software}
I used VSCode to develop the software. I used Chrome to see the live updates when my project was running

{Describe the programming language that you used and any libraries.}
I used React.js. I needed useState, useEffect, ReactDom, and BrowserRouter to make changes dynamically and to move between pages.

# Useful Websites

{Make a list of websites that you found helpful in this project}
* [React Slick](https://react-slick.neostack.com/)
* [Stack Overflow](https://stackoverflow.com/questions/8824831/make-div-stay-at-bottom-of-pages-content-all-the-time-even-when-there-are-scrol)
* [W3 Schools](https://www.w3schools.com/react/react_usestate.asp)
* [React Docs](https://react.dev/reference/react/useState)

# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}
* I will use a database to load data about work history or projects.
* I can load projects dynamically from an array instead of hardcoding each into their own divs
* Improve some CSS that looks a little bit funny, the carousels had difficult CSS for me and I could improve that.