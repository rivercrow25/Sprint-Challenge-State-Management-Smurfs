1. What problem does the context API help solve?

A. it helps to stop prop drilling and side effects of passing state down multiple component trees

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

A. the `store` is where all of the state in redux is held which is why it can be called a single source of truth, `reducers` is how we update our state depending on a user input using an `actions` for a switch statement case

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

A. i would use component state when just a single component needs to know what is going on otherwise i use application state

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

A. `redux-thunk` allows us to use actions asynchronously which will let us have loading and success/fail states inside our action creators

1. What is your favorite state management system you've learned and this sprint? Please explain why!

A. context api seems alot easier to use for smaller applications but i really do like the flexibility of redux
