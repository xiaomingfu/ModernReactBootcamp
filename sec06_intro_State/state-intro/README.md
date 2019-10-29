#### State

- State is designed to constantly change in response to events
- State track:
  - UI logic: the changing state of the interface
  - business logic: the changing state of data

##### Vanilla / jQuery State

The way to track the state with jQuery was by selecting DOM elements and seeing if they were displayed/hidden, or if they had certain styles or attributes

##### React State

- state is an instance attribute on a component. It's always an object, since you'll want to keep track of several key/values
- internal data specific to a component
- data that changes over time

##### React constructor Function

`constructor(props){ super(props); this.state = {} }`

##### Chaning State

`this.setState()` is the built-in React method

- Can call in amy instance method except the constructor
- Takes an object describing the state changes
- Patches state object
- Asychronous
  - The component state will eventually update
  - React controls when the stae will actually change

##### React Events

- State most commonly changes in direct response to some event
- In React, every JSX element has built-in attribute responsing every kind of browser event
- They are camel-cased, like `onClick` and take callback functions as event listeners
- use `.bind` in the constructor function to bind this to the instance

##### State vs Props

- state stores changing component data
- props stores component configuration

##### State as Props

A common pattern is stateful parent component passing down its state values as props to stateless child components
