# Events

Events are everywhere in our web pages
We use `addEventListener` on a DOM element to do something (callback function)
if a certain event happens

[HTML DOM EVENTS](https://developer.mozilla.org/en-US/docs/Web/Events)
```
DOMContentLoaded  # document
blur              # input / textarea
click             # any visible element
change            # select
focus             # any visible element
keyup             # window / any focused element
mouseover         # any visible element
resize            # window
scroll            # window / any scrollable element
submit            # form
touchstart        # for mobile devices
```

## how to react to an event

[addEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
```javascript
const element = document.querySelector('CSS_SELECTOR');
element.addEventListener(eventType, (event) => {
  // Do something (callback)
});
```

### current target

[Event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

```javascript
const btn = document.querySelector('a');
btn.addEventListener('click', (event) => {
  console.log(event);
  console.log(event.currentTarget);
});
```

if we have multiple elements and we want to toggle a class

```javascript
const buttons = document.querySelectorAll('a');
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.currentTarget);
    event.currentTarget.classList.toggle("active");
  });
});
```
