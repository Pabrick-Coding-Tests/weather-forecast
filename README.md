# Holition Technical Test - Weather Forecast

## Description
Create a frontend to show the next week(s) weather forecast. The design is down to the candidate to show off their frontend skills. Data is achievable via connecting to [Openweathermap](https://openweathermap.org/forecast5/), etc.  


This is a frontend task and the main priority should be in design, styling, and then logic. We expect the candidate to create a suitable component structure, fun and engaging styling with subtle animations, and use immutable data structures with appropriate state management.  

## Deliverables
The solution should be delivered as a GitHub link and include a readme file on how to build and run the project.  

Please do not submit your solution as one commit, but multiple commits to show your working, and don’t forget to comment your code! 

Please test your submission before sending your link. Always check the node dependencies!  

## Required Technologies / features
- The test should utilise Angular 6+ or React 16+ only.
- Advanced SASS should be used, and if off the shelf components are used we expect these to be customised e.g. Angular Material & ::dg-deep
- CSS3 Animations are expected.
- Modern JavaScript such as RxJS should be used
- A state manager should be used such as Ngrx, Mobx, Redux, etc.
- Responsive design.

## Optional
- Using TypeScript.
- Full TDD and/or BDD testing (via Mocha, Chai, Karma, Jest, etc).
- Using Three.JS / Tween.JS for 3D animations.
- Material Design / Bootstrap.

# Result
The application has been developed to show differents CSS animations for each type of weather. Due to lack of time only 3 animations out of 7 have been designed: SUN, CLOUDS and a GIF for the RAIN.

The forescast returned for the API brings a lot of information for each day, but for this example I have taken the criteria of showing only the forecast at noon (12:00pm).

If by chance the 5 next days have the same weather and you want to see all the forecast animations, it is possible to use another @Selector in the state, which will retrieve the full forecasts.

The @Selector:
````js
/* main.component.ts:27 */
@Select(WeatherState.getForecastNoon) forecast$: Observable<Weather[]>;
````

should be changed to:
````js
/* main.component.ts:27 */
@Select(WeatherState.getForecast) forecast$: Observable<Weather[]>;
````

I hope you like it!

## Thanks!
## Pablo.