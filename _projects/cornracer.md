---
layout: page
title: Corn Racer
description: Using evolutionary algorithms to simulate a self-driving car in Python.
category: computing
semester: Spring 2017
subject: Software Design
elements: Python
---

For the final project in my Software Design class, I worked on a team of five people to create a Python-based self-driving car simulation. We set out with a variety of learning goals, primarily related to learning about evolutionary algorithms and physics simulation. The end result is an interactive game in which the player can drive a car on the racetrack, watch our pre-trained car drive around the racetrack, or draw their own track and drive around on that.

## Physics Simulation

The first challenge of the project was creating a realistic physics simulation of the car. In order to keep the scope of the project manageable, we chose a two-wheel design with the front wheel steering, as well as features such as slip between the tires and the road. This allowed us to fulfill our goals of creating a fairly realistic simulation of the physics of a car, while also keeping implementation fairly achievable.

{: .Page__image-row }
![A car.](/images/car.png){: .Page__image .Page__image-3 }
![A car.](/images/car.png){: .Page__image .Page__image-9 }

## Autonomous Driving and Evolution

In deciding how to have our simulated car "drive" itself, we aimed to pick a method of simulation that was grounded in reality while also being implementable with our goal of using evolutionary algorithms. The system we devised is essentially a simulated LIDAR; the car has 20 beams that point in all directions from the car; the car detects how far each beam travels before hitting the edge of the road.

![The LIDAR.](/images/LIDAR.png){: .Page__image }

It takes the direction and distance of each LIDAR beam as a vector quantity and uses the linear combination these vectors and a series of weights in order to determine the vector (direction and magnitude of acceleration) of where to drive. These weights are simply a series of scalars with arbitrary starting values; by making these values the traits in our evolutionary algorithm, we can "evolve" the way in which the car drives to eventually come to a point where the car can drive around the track by itself. Note, however, that each evolution of the car only works on the track on which it was evolved.

## Track Drawing and Graphics

Much of my work on this project was focused on the graphical performance of the program. One of the features we wanted was to allow the user to draw the own tracks, which they could then drive on or have the self-driving car attempt to learn. Because the car's LIDAR has to be able to tell which pixels are road vs. not road, we chose to represent the track through a matrix where different values represent road and ground. However, because we used [PyGame](https://www.pygame.org) as the primary engine for handling graphics and user input, updating the track in real-time (while also randomly generating a number of background elements) proved to be somewhat difficult as PyGame isn't very optimized for what we were trying to do. To get around this, we optimized the graphics code by only updating the frames (and the track matrix) when necessary, and "blitting" all the unchanging elements to a single frame that we could quickly draw the moving car on top of. Additionally, there was some work involved with drawing minor graphical elements, such as determining the starting direction of the car and finish line based on the initial direction of the track. Ultimately, we were able to make the graphical updates occur as fast as we needed them to be!

## Try it out

To read our full documentation and try the game for yourself, check out our [project website](https://ggrice.github.io/cornracersite).
