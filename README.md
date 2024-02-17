# querystring.js
A pure JavaScript way of parsing query strings or hash strings with ease.

# How to use
```js
// Set your query/hash string you want to parse
var qs = "https://www.google.com/?foo=bar";
var hs = "https://www.google.com/#ping=pong";

// Parse through querystring, or queryhash
var query_result = querystring(qs);
var hash_result = queryhash(qs);

// Get a specific query from the paramater
console.log(qs["foo"]); // bar
console.log(hs["ping"]); // pong

// Or get the entire query stringified into JSON
console.log(JSON.stringify(qs, null, 2));
/*
{
  "foo": "bar"
}
*/

```

## See it in action through [JSFiddle!](https://jsfiddle.net/EldonMcGuinness/yhz8umqf/)
