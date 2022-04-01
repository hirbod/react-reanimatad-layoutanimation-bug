# react-reanimatad-layoutanimation-bug
This repo demonstrate the REA unmount animation bug

Download and run in Expo GO or in a Custom Dev Client.

## Steps
Simply open Tab One and click on the info icon at the top - as many times as you like. The video will start and stop when the modal is closed. But if you now switch to Tab 2, which uses a Reanimated.View with layout={Layout}, (imported from REA) and you now simply return to Tab 1, you will notice that the video will continue to run as soon as you open and close the modal. If you remove layout from tab 2, you can open and close the modal 1000x and it will work fine. Please note that you need to restart the app when you add or remove layout, fast-refresh is not enough.
