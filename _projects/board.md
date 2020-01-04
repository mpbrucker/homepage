---
layout: page
title: InfinityBoard
description: Building a real-time, collaborative whiteboard.
category: computing
semester: Spring 2018
subject: Hacking the Library
elements: React.js, AWS, Heroku
included: true
---

## Provocation

Our second project in Hacking the Library tasked us with creating an add-on for the Idea Harvester, a rolling installation in the Library intended to help with team projects, ideation, and creation. In three weeks. We decided to build off of the Idea Harvester's uses in team collaborative work and create *InfinityBoard:* a virtual whiteboard, a space for team collaboration and free-form ideation that can be set up with low activation energy and used to organize thoughts. It's a real-time collaborative web app allowing multiple users to easily add and manipulate text and images in real time. 

![An example of text being added.](/images/board/pic1.png){: .Page__image}

### Building the Frontend

On the team, my role was crafting the frontend of the app. I wrote the frontend controls and state management in Javascript/React. After building state management functionality locally, we built out functionality for deployment: uploaded images are hosted and loaded in an S3 bucket.

![A filled-out board, with images loading.](/images/board/pic2.png){: .Page__image}

### State Management

The biggest challenge of the project was handling state across multiple clients. We used websockets to send updates to the server, and then propagate those changes to everyone else viewing the same board. However, this raised a number of challenges. In order to simplify the process of propagating and handling changes to state, I implemented Redux functionality, which allows state updates to be asynchronously dispatched across all clients.

![InfinityBoard in action.](/images/board/pic3.jpg){: .Page__image}

![InfinityBoard in action.](/images/board/pic4.jpg){: .Page__image}

![What can be done with InfinityBoard.](/images/board/pic5.png){: .Page__image}

Check out our code [here](https://github.com/olinlibrary/infinity-board), and learn more about other Olin Library software projects [here.](https://olin.build/)
