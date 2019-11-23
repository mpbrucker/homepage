---
layout: page
title: Inverted Pendulum PID Control
description: Applying controls concepts to balance a Segway.
category: computing
semester: Fall 2017
subject: Quantitative Engineering Analysis
elements: Arduino, Mathematica
---

## Inverted Pendulum Control

For our project in Quantitative Engineering Analysis, my team was tasked with creating a control algorithm in order to balance an inverted pendulum robot. In order to accomplish this, we applied control concepts to create and tune a closed-loop PID control system for our robot.

## PID Control

At its heart, our control algorithm is based on PID (proportional, integral, derivative) control:

![](images/PID.png)


In our control system, we have two PID loops:

<div class = "row uniform">
  <div class = "12u">
    <span class = "image fit">
      <img src="images/BlockDiagram.png">
    </span>
  </div>
</div>

The outer PID loop takes the position of robot and compares it to the position setpoint, which by default we define as zero in order to get the robot to return to its original position. Based on the output of this loop, we determine an angle setpoint for the robot - an angle of zero makes the robot stand still, and a nonzero angle causes the robot to move. Because of the inner loop, the robot is always attempting to return to its setpoint angle: any deviations from this angle will be counteracted by moving the robot's wheels in the opposite direction.

## PID Tuning

We wrote Arduino code to perform the control algorithm based on the robot encoder values and angle, as determined by an onboard accelerometer. However, the behavior of our PID loop is determined by constants for each term (proportional, integral, and derivative), so in order to get the robot to stand upright, we must tune the values of the PID constants. We did this heuristically by making fine-tuned adjustments to the constants until we achieved our desired result.

## See it in Action

<iframe width="560" height="315" src="https://www.youtube.com/embed/_gubutSz2GY?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

All of our code can be found [here.](https://github.com/aselker/qea-rocks)
