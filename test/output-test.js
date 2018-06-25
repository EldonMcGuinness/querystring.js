var assert = require("assert"),
    querystring = require("../src/querystring");


var sourceURL = "www.google.com/?foo=bar&foo=boo&roo=bar;bee=bop;=ghost;=ghost2;&;checkbox%5B%5D=b1;checkbox%5B%5D=b2;dd=;http=http%3A%2F%2Fw3schools.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab&http=http%3A%2F%2Fw3schools2.com%2Fmy%20test.asp%3Fname%3Dst%C3%A5le%26car%3Dsaab";
var validMessage = JSON.stringify({
  "foo": [
    "bar",
    "boo"
  ],
  "roo": "bar",
  "bee": "bop",
  "": [
    "ghost",
    "ghost2"
  ],
  "checkbox[]": [
    "b1",
    "b2"
  ],
  "dd": null,
  "http": [
    "http://w3schools.com/my test.asp?name=ståle&car=saab",
    "http://w3schools2.com/my test.asp?name=ståle&car=saab"
  ]
});

var currentMessage = JSON.stringify(querystring(sourceURL));

assert.deepStrictEqual( currentMessage, validMessage, "Invalid output from parsing!" );
