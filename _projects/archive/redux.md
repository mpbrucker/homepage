---
layout: page
title: InfinityBoard 2.0
description: Managing shared state.
semester: Summer 2018
subject: Hacking the Library
elements: React.js, Redux
---

After finishing [InfinityBoard](http://infinityboard.olin.build) as a Hacking the Library project, I set out that summer to refactor the frontend of the app into a more usable state. Because InfinityBoard is inherently very stateful, managing state proved to be a massive challenge, and in my first pass at the frontend, the state ended up getting very messy. In particular, handling websocket messages proved to be very difficult, as more websocket messages kept being added, with each of them mutating the board state in their own way. What's more, a single function was handling the state mutation based on these messages. So, in order to put InfinityBoard in a more usable state, I refactored the frontend to using [Redux](https://redux.js.org/).

## About Redux

Redux is a JavaScript library that manages state, making state mutation a more pre-defined and predictable operation. In short, it places the app state in a single `store` object; every React component subscribes to the portion of the store that it needs, and it uses actions and reducers to manipulate the state in predetermined ways. This helped the state of InfinityBoard's frontend to be mutated in much smaller, more manageable chunks.

## Refactoring Components

Another major refactoring I did was to change how the frontend was structured into React components. Initially, the frontend consisted of a single `Board` component, with any number of `TextBox` or `ImageBox` components inside of it. However, I realized that there were two distinct groupings of actions and elements with `Board` - things that directly change the board state (e.g. box position, box size, etc.), and things that involve other interactions. So, everything not directly related to the board got moved to `BoardWindow`: window position, buttons to add boxes, client markers, etc.

## Redux and Websockets

Perhaps the biggest improvement I found through implementing Redux was in the websockets' state propagation. Originally, updating boards through websockets was a nightmare, as a number of different action types were needed for various things. 
