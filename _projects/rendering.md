---
layout: page
title: 3D Graphics Engine
description: Writing a 3D graphics engine, from scratch.
category: computing
semester: Spring 2017
subject: Software Design
elements: Python
date: 01-01-2017
---

For our Interactive Programming project in Software Design, my team wanted to stretch our Python skills by deeply exploring the details of an interactive programming concept, and implement that idea from the ground up. We eventually settled on creating a 3D graphics engine, exploring the math behind how 3D graphics work and creating our own rudimentary version of a 3D graphics engine.

## Graphics Math

At its core, our engine is based on a lot of matrix math. The concept behind basic 3D graphics is to take points in an arbitrary "world" coordinate system and use a series of perspective transforms to put them into the "camera" coordinate system, at which point they can be rendered onscreen. Our program makes heavy use of [Numpy](http://www.numpy.org/) to optimize and parallelize as much of the matrix math as possible in order to eke out some reasonable measure of performance. Our program takes in an STL file, which represents 3D models through a series of triangles in 3D space, and converts them to a list of points in 3D space. Next each point is translated and rotated in order to be in the reference frame of the camera, and points outside the view of the camera are culled - note that, because we render each point by drawing pixels on-screen with [PyGame](https://www.pygame.org), these points aren't drawn anyway, but getting rid of them greatly speeds up rendering time. Next, in order to draw lines between points, we simply calculate every pixel that lies between the two endpoints and fill it in.

<div class = "row uniform">
  <div class = "6u">
    <span class = "image fit">
      <img src="images/teapot.png">
    </span>
  </div>
  <div class = "6u">
    <span class = "image fit">
      <img src="images/objects.png">
    </span>
  </div>
</div>

This allows us to render a wireframe of objects - shown above is the famous Utah teapot, among other objects

## User control

A key component of our project is interactivity - we wanted to create a 3D world in which the user could walk and look around. We represent the camera as its own separate object. Thus, in order to achieve user control, we only have to update the vectors representing the location and orientation of the camera; the location is controlled through WASD, and the orientation by moving the mouse. Because the rendering is performed based on these vectors, no additional steps are needed; this allows for easy user control.

## Check it Out

To view the code and try it for yourself, as well as read our full project writeup, check out our [Github repo.](https://github.com/mpbrucker/InteractiveProgramming)
