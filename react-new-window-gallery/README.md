## React gallery with big image preview
### Introduction
In the project i implemented a react gallery using [react-slick](https://github.com/akiran/react-slick).
However the main feature isn't the gallery but the image preview that is located in a popup! This is useful 
if you wan't to show the biggest preview possible of the current image.

The popup was implemented using [react-new-window](https://github.com/rmariuzzo/react-new-window) which is an awesome
react wrap over the [window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) api.

### Running the project
In order to run the project you will need to do several things.
1. Run `npm i` in both the main directory and the [backend](backend) directory.
2. Start the express server by running `npm start` inside of the [backend](backend) directory.
3. Compile the frontend by running `npm start` in the main directory.
4. Enjoy :)