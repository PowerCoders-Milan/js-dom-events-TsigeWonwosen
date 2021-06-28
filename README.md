# javascript-DOM-events

DOM is the tree of HTML elements created by the browser in order to show the html page

## Selecting Elements
```javascript
const element = document.querySelector('CSS_SELECTOR');
// element is now a Object of the DOM
const multipleElements = document.querySelectorAll('CSS_SELECTOR');
// multipleElements is now a nodeList of elements
element.insertAdjacentHTML('beforeend', '<tag>content</tag>'); // adds HTML to content
```


## How to import the assignment
To start the exercises
1. go in your **code** folder `cd ~/code`
2. go inside your github username folder with `cd your_github_username`
3. `git clone paste_here_ssh_link_to_your_assignment`
4. go inside the repo you've just cloned `cd js-DOM-events-your-github-username` (`if` you press `cd` + `tab` it will be easier)
5. go inside the exercise folder `cd 01-select-element`
6. open VS_CODE `code .`

## how to test the code
1. print values and messages to understand what the code is doing
  ```javascript
  cosole.log()
  ```
2. run the programm
open the `index.html` file in your browser

## how to save your changes
Every time you complete an exercise remember to
```zsh
git add .
git commit -m "exercise # done"
git push origin master
```

Good Hacking :rocket:
