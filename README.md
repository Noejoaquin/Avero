# Edesia

Welcome to Edesia, a point of sale UI system facilitating navigation through tables, checks,
and check items. Have fun at the live site [here](https://noejoaquin.github.io/Edesia/#/)!

## Functionality

Edesia implements a remote API to navigate through several tables, open checks for those tables, and add items to those checks. The user can add any amount of items to a single check, as well as void any item that has already been added to one. Users can then close the check. One check is allowed to be open per table.  

## Technologies Used

I decided to create the front end functionality for this application by implementing `React.js` with `Redux`. The former affords a faster and more dynamic application, while the later makes handling state simpler through its unidirectional flow of data. In conjunction with Redux I implemented `thunk middleware` from the `redux-thunk` library, allowing for the creation of `thunk actions` which when called with `dispatch` could then dispatch one or more actions immediately or later. I also used the transpiler, `Babel`, to ensure that my JSX and ES6 code would be compatible with all browsers through its conversion to ES5.
