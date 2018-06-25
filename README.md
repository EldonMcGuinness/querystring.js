[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a4c1281442204b7090a037f8f85e38aa)](https://www.codacy.com/app/EldonMcGuinness/querystring.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=EldonMcGuinness/querystring.js&amp;utm_campaign=Badge_Grade)[![Build Status](https://travis-ci.org/EldonMcGuinness/querystring.js.svg?branch=master)](https://travis-ci.org/EldonMcGuinness/querystring.js)

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
