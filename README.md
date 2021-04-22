[![Codacy Badge](https://api.codacy.com/project/badge/Grade/a4c1281442204b7090a037f8f85e38aa)](https://www.codacy.com/app/EldonMcGuinness/querystring.js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=EldonMcGuinness/querystring.js&amp;utm_campaign=Badge_Grade) [![Build Status](https://travis-ci.org/EldonMcGuinness/querystring.js.svg?branch=master)](https://travis-ci.org/EldonMcGuinness/querystring.js) [![Github License](https://img.shields.io/badge/license-MIT-blue)](https://github.com/EldonMcGuinness/querystring.js/blob/master/LICENSE)

# querystring.js
A pure JS way of gaining access to the querystring.

# Installation
## Via CDN
There is an unminified and minified version of the code. We recommend the minified version (the top one) for best use in web development but the unminified version (the bottom one) for development.
```html
<script crossorigin src="https://cdn.jsdelivr.net/gh/notJudahRR/querystring.js/dist/querystring.min.js"></script>
<script crossorigin src="https://cdn.jsdelivr.net/gh/notJudahRR/querystring.js/src/querystring.js"></script>
```

## Via Node.js
You can also import through Node.js
```javascript
const querystring = require("querystring.js")
```

# How to use
## To copy the entire querystring object into a variable 
```javascript
var qs = querystring();
```

## To get only the field named "q"
```javascript
var qs = querystring()["q"];
```

### Remember, if there is more than one item with the same name, you will get an array that contains the responses.
Example URL: /page.html?q=something&q=somethingelse
```javascript
var qs = querystring()["q"];
//qs[0] yields the string "something"
//qs[1] yields the string "somethingelse"
```

# See it in action
[jsfiddle](https://jsfiddle.net/EldonMcGuinness/yhz8umqf/)
