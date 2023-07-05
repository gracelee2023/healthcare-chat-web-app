Full stack web development - Healthcare Review Web App

Tech stack: HTML CSS, React, JavaScript

The Healthcare Review Web App has six distinct screens: Login/Register, Home, Profile, Search/results, Details.

Home Page: 1. anonymous users can search healthcare providers near the place they input.
           2. anonymous users can view all the reviews posted by users.
           3. MapQuest API fetches the anonymous user’s current location; then yelp API fetches healthcare providers business information based on the user' current location.
              
Profile Page (logged-in user): 
              1. display all the information about the current user. 
              2. allow logged in users to change their personal information by clicking 'Edit profile" button.
              3. display current user's number of followings, and number of followers
              3. display current user's lists of reviwes
              4. display current user's lists of followings
              5. display current user's lists of followers
            
Public Profile Page (other user): 
              1. display the basic information about the user 
              2. allow the current user to follow/unfollow this user
              
Profile Page(ADMIN):
              1. The admin profile page lists all the users’ information including admin him/herself 
              2. The admin can create, update, delete users

Search Page: 1. by inputing location into the "NEAR" box, yelp API fetches healthcare providers business information given the location input by the user
             2. display healthcare provider's infomation including name, address, phone number, rating and catogory

Detail Page: 1. display healthcare provider's basic infomation 
             2. display a list of reviews for this healthcare provider, and there are links to the profile pages of folks who wrote the reviews

Register Page: 1. There are two roles for registration, ADMIN role and PERSONAL role.
               2. If the user is registering as ADMIN role, the user needs to input “Secret Key” correctly to do so. The “Secret 
                   Key” is only available for ADMIN roles. In this program, “Secret Key” is “admin”. 

Login Page




           


