## Stream Trailers

#### Summary:

An application help you compare cities information, it can help you decide where to move or visit next.
I am using the [Kiwi API](https://docs.kiwi.com) to get flights data and [AccuWeather API](https://developer.accuweather.com)

## Project Status

That is a study project. A few improvements yet to be donne:

- [ ] Cover 40% of the project with tests
- [ ] Use historical weather data to give a better overview of city weather
- [ ] Add information about living costs
- [ ] Add information about price of hotels
- [ ] Add possibility to save searches
- [ ] Add error handling
- [ ] Add design for no found cities.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm or yarn` installed globally on your machine.

Installation:

`npm install` or `yarn install`

To Run Test Suite:

`npm test` or `yarn install`

To Start Server:

`npm start` or `yarn install`

To Visit App:

`localhost:3000`

## Reflection

A nice project to apply basic concepts of front end development.

The idea here is to solve the problem of someone that it's looking for the next city to visit. So basically It's a city comparator.

For now it's takes in consideration price of flights (most expensive and cheapest) gathering data from [Kiwi API](https://docs.kiwi.com).
Here we face a no-ideal scenario when one api call needs to wait for the result of two others api calls (get id from current city and destiny city),
I used axis.all (a implementation of Promise.All) to wait for the api calls before calling the flights api.

It also provide weather forecasts for the next five days, I use the [AccuWeather API](https://developer.accuweather.com) for that. I would like to use
historical data to provide a general maximum average and minimal average temperature, and the most common weather state (sunny, cloudy, etc), that was
not possible because I'm using the free version of the api so no access to historical data, other similar API also doesn't provide historical data, so
I had a plan B to show the maximal of forecasts possible, 5 days in AccuWeather.

I will implement an optional login functionality to let the user save searches.
