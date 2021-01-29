# Tic Tac Toe AI App

Mobile app development project emulating a professionally designed and functioning app.

Based on a simple and classic game - Tic Tac Toe.

Created December - January 2021.


## About the app

This app was created using React Native and Expo. The app is currently in beta testing phase and is available on Google Play:

https://play.google.com/store/apps/details?id=dev.quikk.tictactoeai



Notes:

* will change readme content before going public :D

This repo contains all the actual app development files and dependencies.

Javascript/React Native

Futher installs required (npm modules for navigating between pages on app):

```npm install @react-navigation/native @react-navigation/stack```

UI libraries to use later:

* Button design
 
 ```react-native-linear-gradient```
 
 * Game Engine
 
 ```react-native-game-engine```
 
 * Animations
 
 ```react-native-animatable```
 
 Additional Notes:
 
 * Use .svg files instead of .png etc (svg files do not lose resolution when resized and are smaller than png files)

## SVG Integration:

1. Convert .svg file into JSX ussing the following site:

https://svg2jsx.com/

2. Convert the JSX into react-native-svg component using the following site (tick the react native box):

https://react-svgr.com/playground/

3. Use that component to display SVG

