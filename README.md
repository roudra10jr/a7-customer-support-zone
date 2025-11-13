## 1. What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows you to write HTML-like code directly inside JavaScript. JSX is used in React because:

-   It makes the code more readable and easier to write.
-   It allows you to describe the UI declaratively.
-   React converts JSX into `React.createElement()` calls behind the scenes, which constructs the virtual DOM.

## 2. What is the difference between State and Props?

Key Differences Between State and Props in React:
Definition:  
Props: Data passed from a parent component to a child component (like arguments in a function call).  
State: Internal data managed and stored within a single component.

Source:  
Props: Comes from external sources (e.g., parent component).  
State: Initialized and maintained inside the component itself.

Mutability:  
Props: Immutable (read-only) in the receiving component; cannot be directly modified by the child.  
State: Mutable; can be updated using setState (class components) or the setter from useState (functional components).

Purpose/Usage:
Props: Used to pass data, functions, or callbacks down the component tree for communication between parent and child.  
State: Handles dynamic, local data like user inputs, counters, or toggles that change based on interactions or logic within the component.

## 3. What is the useState hook, and how does it work?

useState is a built-in React Hook that allows functional components to add and manage local state. Introduced in React 16.8, it enables stateful logic in functions without needing class components, promoting simpler, more reusable code.  
const [state, setState] = useState(initialValue);  
state : the current value of the state.  
setState : a function to update the state.  
initialValue : the initial value of the state.

## 4. How can you share state between components in React?

To share state between components in React, you can lift the state up to the nearest common parent and pass it down via props, or use the Context API to provide a shared state accessible by any nested component. For larger applications, state management libraries like Redux, Zustand, or Recoil can also be used.

## 5. How is event handling done in React?

Event handling in React is done using camelCase syntax and by passing a function reference instead of a string. React wraps native events into its own SyntheticEvent system for better cross-browser compatibility and performance. Event handlers are usually defined as functions and can access component state or props to update the UI dynamically.
