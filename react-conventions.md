# Conventions for writing react applications
## Type Checking
decide at the beginning of the project what type checker you will
be using and use it for the rest of the project!

__Some type checking options:__

1. PropTypes:  https://reactjs.org/docs/typechecking-with-proptypes.html
2. Static TypeChecking with flow: https://reactjs.org/docs/static-type-checking.html
3. TypeScript: https://www.typescriptlang.org/


## Components
* #### ternaries
    Avoid nested ternaries, it will lead to unreadable and unmanageable code!
    
    instead use the design pattern of writing a function and invoking it immediately.
    
    IIFE - immediately invoked function expression (https://developer.mozilla.org/en-US/docs/Glossary/IIFE):
```js
<div>
{
    (() => {
        if (a) {
            if (b) {
                return <p> b </p>
            } else {
                return <p> not '</p>
            }
        } else {
            if (c) {
                return <p> not a but c </p>
            } else if (d) {
                return <p> not a but d </p>
            } else {
                return <p> not a but a or c or d </p>
            }
        }
    })()    
}
</div>
```

* #### Conditional rendering
    When wanting to render a element on one condition use this syntax:
```js
//Instead of this
isTrue ? <p> Yes! </p> : undefined

//Use this
isTrue && <p> Yes! </p>
``` 
* #### Functional components
    These components have no state and no methods. They’re pure, and easy to reason about. Use them as often as possible.

* #### Controlled Components Vs Uncontrolled

    React has two different approaches to dealing with form inputs:
    
    * An input form element whose value is controlled by React is called a controlled component. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.
    * An uncontrolled component works like form elements do outside of React. When a user inputs data into a form field (an input box, dropdown, etc) the updated information is reflected without React needing to do anything. However, this also means that you can’t force the field to have a certain value.
    
    In most cases you should use controlled components.

* #### Methods
    With class components, when you pass methods to subcomponents, you have to ensure that they have the right this when they’re called. 
    This is usually achieved by passing `this.handleSubmit.bind(this)` to the subcomponent.
    
    __maintaining the correct context automatically via the ES6 arrow function is cleaner and easier.__

* #### state:
    * variable that are purely related to the display of the component (such as a closed or open flag) should
    be written with an underscore: `_open`
    * Whenever you are setting the state based on the previous state you must pass setState a function
    
        __Explanation:__ Here’s the dirty secret about setState  - it’s actually asynchronous. 
            React batches state changes for performance reasons, so the state may not change immediately after setState is called.
            That means you should not rely on the current state when calling setState  -  since you can’t be sure what that state will be!
            
        __Example:__
    
```js
//Bad practice
this.setState({
  _open: !!this.state.data
});

//Good practice
this.setState(prevState => {
    _open: !!prevState.data
});
```
    
* #### Destruction Props
    Components with many props should have each prop on a newline.
```javascript
//Bad Practice
<MyComponent name="Cool name" onClick={this.handleMyComponentClick} onItemDrop={this.handleMyComponentItemDrop}/>
//Good Practice
<MyComponent
  name="Cool name"
  onClick={this.handleMyComponentClick}
  onItemDrop={this.handleMyComponentItemDrop}/>
```
* #### Closures
    __Avoid passing new closures to subcomponents!__
    
    __Explanation:__ every time the parent component renders, a new function is created and passed to the input.
        If the input were a React component, this would automatically trigger it to re-render, 
        regardless of whether its other props have actually changed.
        Reconciliation is the most expensive part of React. Don’t make it harder than it needs to be! Plus, passing a class method is easier to read, debug, and change.
        
    __Example:__
```javascript
<input
  type="text"
  value={model.name}
  // Bad Practice
  onChange={(e) => { model.name = e.target.value }}
  // Good Practice
  onChange={this.handleChange}
  placeholder="Your Name"/>
```
    

## High order Components
For a more in depth explanation about the conventions and HOC in general: https://reactjs.org/docs/higher-order-components.html

* #### Don’t Mutate the Original Component. Use Composition.
* #### Pass Unrelated Props Through to the Wrapped Component
* #### Maximizing Composability
    High order components should have the following signature: 
    `Component => Component`. This is a good practice because it allows use
    to easily compose several HOC with the `compose` function that is provided by many third-party libraries including lodash (as lodash.flowRight), Redux, and Ramda.
    __For a more in depth explanation visit:__ https://reactjs.org/docs/higher-order-components.html#convention-maximizing-composability
* #### Wrap the Display Name for Easy Debugging
    In depth explanation: https://reactjs.org/docs/higher-order-components.html#convention-wrap-the-display-name-for-easy-debugging
* #### Don’t Use HOCs Inside the render Method
    Using HOCS inside a render function will result in bad performance and hard to debug bugs!
    For a in depth explanation: https://reactjs.org/docs/higher-order-components.html#dont-use-hocs-inside-the-render-method
    
## Css

to be decided upon


## Sources

* React Documentation: https://reactjs.org/docs
* Article on react best practices: https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8