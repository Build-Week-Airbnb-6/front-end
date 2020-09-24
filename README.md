# front-end
This is a marketing page and about for an Airbnb Optimal Price Application


About Airbnb Optimal Price:

What problem does your app solve?
The app takes the guesswork out of the pricing for your property rental on AirBnB, and delivers the optimal price point for the location,time of year, and other variables (potentially many, depending on the data we can find) in order to make the most money.
Be as specific as possible; how does your app solve the problem?
The app will utilize historical AirBnB data to build machine learning models that will accurately deliver price info with a user-friendly, simple interface. Adjustments can be made to prioritize booking utilization (% of time booked?) and or pricing. 
What is the mission statement?
Making you the most money. 
Optimizing the use of your home by showing you the most likely price at which you will be able to provide a fair offering and excellent experience to your guests
Helping property owners get the most out of their assets,
💡 Features

What features are required for your minimum viable product?
Deployed 
CRUD 
state management
Ability to register
Add, edit, delete listings
On edit, get updated price
Accessible ML predictions for pricing via an API
At least 2 marketing pages
Save property details and user information pertaining to the app
What features may you wish to put in a future release?	
The ability to implement internationally,  also added features(parameters) that weren’t initially modeled on. 
What do the top 3 similar apps do for their users?
Beyond Pricing - expert pricing for vacation rental managers
Swimply - renting out your pool for the day
Turo - Airbnb but for cars
🛠 Frameworks - Libraries

What 3rd party frameworks/libraries are you considering using?
Flask
React 
Material UI
Java Spring
Do the APIs you need require you to contact them to gain access?
Are you required to pay to use said API(s)?
🧮 For Data Scientists

Describe the established data source with at least rough data able to be provided on day one.
Steven: Looks like this is our training file:
https://www.kaggle.com/stevezhenghp/airbnb-price-prediction


Write a description for what the data science problem is. What uncertainty or prediction are you trying to discover? How could this data be used to find a solution to this problem?
Target is a regression problem, given as log_price
Treatment are various different house features
Main features to be shown: city, neighbourhood, #bedroom, #beds, #bathroom, amenities, #guest allowed, room type
What kind of target output can you deliver to the Web/UX/iOS teams to work with? Is it in JSON format or something else?
Probably JSON or floating point
🎯 Target Audience

Airbnb users
Property owners, or prospective property owners who hope to rent.
What feedback have you gotten from potential users?
Have you validated this problem and your solution with a target audience? Describe how

🔑 Prototype Key Feature(s)

How long do you think it will take to implement these features?
	3.5 days.7777777
Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?
	Yes -- maybe international data? Merge other data sources? Too far away to tell.


For backend, the load should be minimal enough to work on additional features to save optimal prices for each property once the machine learning model has already solved that specific property set. This would avoid having the machine learning model being required to calculate the same parameters more than once.
