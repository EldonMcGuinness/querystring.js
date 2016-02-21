# querystring.js
A pure JS way of gaining access to the querystring.

# How to use
## To copy the entire querystring object into a variable 
```var qs = querystring();```

## To get only the field named "q"
```var qs = querystring()["q"];```

### Remember, if there is more than one item with the same name, you will get an array that contains the responses.
Example URL: /page.html?q=something&q=somethingelse
```
var qs = querystring()["q"];
//qs[0] yields the string "something"
//qs[1] yields the string "somethingelse"
```

# See it in action
[jsfiddle](https://jsfiddle.net/EldonMcGuinness/yhz8umqf/)