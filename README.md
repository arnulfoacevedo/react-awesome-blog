# React Awesome Blog
Build a weblog using reactjs and best frontend practice.

- source code: https://github.com/basir/react-awesome-blog
- demo app:    https://react-awesome-blog.herokuapp.com/

## What you will learn
- Create functional components
- React hooks likes useState and useEffect
- React Context
- Handle forms and validation
- Fetch data from backend api
- Use reducer hook to manage complex state
- Implement user authentication

## Lessons
1. Create Layout
   1. create react app
   2. add header and footer
   3. show brand link and menus on header
2. Create Context
   1. add context 
   2. add theme to context
   3. add button to navbar to change the theme
3. Define Routes
   1. Home Page
   2. Post Page
4. List Posts
   1. define reducers
   2. create load posts function
   3. show loading, error and posts
5. List Users
   1. define reducers
   2. create load users function
   3. show loading, error and users
6. Create Post Details Page
   1. link posts in home page
   2. fetch posts from backend
   3. render post title and body
7. Filter Posts By Keyword and Authors
   1. Add search query to routes
   2. implement filter by query in home screen
   3. Add userId to routes
   4. implement filter by user in home screen
8. Login User
   1. Create Login Page
   2. design login form
   3. handle login action
   4. set user in the context
9. Authenticate User
   1.  Add user to context
   2.  create private route
10. Create Backend API
    1.  Install express
    2.  create express app
    2.  install mongodb
    3.  create .env file and past connection uri there
    4.  Install mongoose and dotenv
    5.  connect to the database
    6.  create user model
    7.  create user list and details 
    8.  seed sample data 
11. Create Backend API - Part 2
    1.  create post model
    2.  create post list and details 
    3.  seed sample data 
12. Switch Between Mock and Real Backend API
    1.  add backendAPI to the context
    2.  add switch button to navbar
    3.  use it in the all screens
13. Create Post
    1.  build input form to create post
    2.  handle input events
    3.  call api to save the post
14. Update User Profile
    1.  build input form to update
    2.  handle input events
    3.  call api to update profile  
15. Register Screen
    1.  Copy login screen
    2.  change to register
16. Persist Theme and API Server
    1.  Use localStorage
    2.  Save and retrieve Theme and API Server
17. Deploy to heroku
    1.  create heroku and mongodb account
    2.  update server.js
    3.  add Procfile
    4.  deploy