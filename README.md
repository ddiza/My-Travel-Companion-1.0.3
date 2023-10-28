# My-Travel-Companion-App
Landing Page:
![Image.png](https://github.com/ddiza/My-Travel-Companion-1.0.3/blob/main/public/HomePage.png)
<br>
## Introduction
In this project, we build and deploy a Travel Companion Application using Google Maps. With the Travel Advisor API from Rapid API, Geolocation, Google Maps API, the app enables searching for places, fetching restaurants, hotels and major attractions based on a requested location. Specialized Rapid APIs are used and includes data filtering. This App includes dynamic map features and weather data as part of the request for specific locations.

Throughout the process we follow:
- Basic authentication to enable unique, individual end-user experience
- Advanced React Best Practices such as folder & file structure, hooks and refs
- Creating a User Interface using Material UI
- Working with Google Maps API
- Fetching data from unlimited sources using RapidAPI
- The project's intent is to exercise becoming better at working with APIs

## ROUTES : Basic Authentication
The database we use contains end-user's information, a specifically selected geographical location, then a choice of either restaurants, hotels, or major attractions listed in the selected specific location. For this project we will not incorporate the end-user's input of reviews, reservations, reservation or purchasing of services. These enhanced features can be added in later versions of the app.


GET /user
no authentication needed, anyone can use this route and get a message back

POST /login
no authentication needed, send username and password, returns a token
when the username is in the system, and the password hash matches the username
otherwise return a 400

GET /registeredUser
requires authentication, and returns a special message that includes your full name
if user is not authenticated, return a 400

GET /location
authenticated user submits geographical location and gets a message back

POST /location/city
user gets back message displaying geographical map

GET /location/city/restaurants
authenticated user sees a list of restaurants within 25 miles of geographical location and gets a message back

POST /location/city/restaurants/restaurant
user selects a restaurant from the list of restaurants: displaying restaurant address, customer review star rating, and price category expensive rating

GET /location/city/hotels
authenticated user sees a list of hotels within 25 miles of geographical location and gets a message back

POST /location/city/hotels/hotel
user selects a hotel from the list of hotel: displaying hotel address, customer review star rating, and price category expensive rating

GET /location/city/attractions
authenticated user sees a list of attractions within 25 miles of geographical location and gets a message back

POST /location/city/attractions/attraction
user selects an attraction from the list of attractions: displaying attraction address, customer review star rating, and price category expensive rating

## API's Used
[Google Maps API](https://developers.google.com/maps)

[My Travel Companion API](https://rapidapi.com/apidojo/api/travel-advisor)

[Open Weather Map API](https://openweathermap.org/api)

## Technologies
React.js was used for client-side presentation
Axios was used to fetch API's
Next.js was used for server-side processes

Run the app in the development mode.
### 'npm run dev'
url: http://localhost:3000 to view in the browser