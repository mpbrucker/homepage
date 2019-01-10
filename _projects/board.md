---
layout: page
title: InfinityBoard
description: Building a real-time, collaborative whiteboard.
category: computing
semester: Spring 2018
subject: Hacking the Library
elements: React.js, AWS, Heroku
---

Our second project in Hacking the Library tasked us with creating a use for the Idea Harvester, a rolling installation of the Library with features for ideation and collaboration, in just three weeks. We decided to build off of the Idea Harvester's usefulness for team projects and create InfinityBoard. The motivation behind Infinity Board was to create a virtual whiteboard of sorts, a space for team collaboration that could be set up with low activation energy and used to ideate and organize thoughts. What we ended up with was a real-time collaborative web app where users could quickly create a new board, join the board, and begin adding/editing text and images in real-time. Check out the finished product [here!](http://infinityboard.olin.build)

## Building the Frontend

On the team, my role was crafting the frontend of the app. Because we wrote InfinityBoard in a language that was entirely new to me (JavaScript, with NodeJS on the backend and React on the frontend), I focused on starting from scratch, relying on external libraries as little as possible.

![](images/board1.png)


Early on, most of the challenges in writing the frontend involved building the basic functionality - we had a vision of being able to add, move, resize, and edit boxes of various types, so I focused on building the basic box functionality. After creating the basic box, I began fleshing out the full functionality of the boxes. I created text boxes which could be edited, and image uploading functionality to AWS S3 for image boxes. Additionally, I built a number of minor features for the frontend such as box deletion, pointers that show the positions of other people on the same board, and screen dragging to allow users to move their screen around - making the board actually be infinite!

![](images/board_final.png)


## Handling State

The other main challenge of this project was handling state in realtime. We used websockets to send updates to the server, and then propagate those changes to everyone else viewing the same board. However, this raised a number of challenges. I had to implement functionality to determine how to update the state of each element upon receiving a new websocket message, which ended up requiring a lot of state being held in the board. Additionally, once we implemented functionality to handle the creation of multiple unique boards, we had to create a mapping between clients and boards to ensure that changes were only propagated to the correct client, which proved to be very challenging.

## Testing

As part of my learning goals for the project, I also implemented unit testing on our app. I used the Jest testing framework to create basic snapshot tests as well as tests of things like websocket updates. Given the scope of the project we chose to focus mainly on building functionality, but it still proved useful to implement some basic testing.

## The Final Product; Testing with Users

After building InfinityBoard, a large component of our project was bringing it into the world and letting members of the Olin community test it. We set up InfinityBoard at a number of events in the Library, including community breakfasts and the ACRONYM, a student-run pop-up coffee shop. Ultimately, InfinityBoard ended up being mostly used for fun instead of for productivity at these events, but it was still a valuable experience to build this app and bring it to actual users!

![](images/board_demo.jpg)

*Kyle demonstrating InfinityBoard at an Olin Library event.*

![](images/board_baby.jpg)

*InfinityBoard being run on the Idea Harvester, and on a mini Idea Harvester, another project by Hacking the Library students.*

Check out our code [here](https://github.com/olinlibrary/infinity-board), and learn more about other Olin Library software projects [here.](https://olin.build/)
