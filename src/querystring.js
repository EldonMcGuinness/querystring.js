/*
 *  querystring.js - v2.0.0
 *  Querystring utility in Javascript
 *  https://github.com/EldonMcGuinness/querystring.js
 *
 *  Made by Eldon McGuinness
 *  Edited by notJudahRR
 *  Under MIT License
 *
 *  Parameters:
 *  str - A string that you want the script to treat as the querystring
 *        instead of the actual page's querystring.
 */

(function(global, factory, NodeFactory){

  if(global.document){
    factory(global);
  }else{
    NodeFactory(global);
  }

  // typeof window !== "undefined" ? window : module.exports means
  // if window is defined than make the global object window but if it is not than make it module.exports
})(typeof window !== "undefined" ? window : module.exports, function(global){
  "use strict";

   function sortItem(key, val, qso){
      if (typeof(key) === "string"){
          qso[key] = [qso[key], val];

      }else if (typeof(qso[key]) === "object"){
          qso[key].push(val);

      }
    }

    function parseQueryItem(qso, qs){
      var item = qs.split("=");

      item = item.map(function(n){return decodeURIComponent(n);});
      var key = item[0];
      var val = (item[1] === "") ? null : item[1];

      if (key in qso){
          // If a key already exists then make this an object
          sortItem(key, val, qso);

      }else{
          // If no key exists just set it as a string
          qso[key] = val;
      }
    }

  function querystring(str = document.URL){
    // If str is empty than use the URL of the webpage
     var qso ={};
     var qs = (str || document.location.search);

    // Check for an empty querystring
    if (qs === ""){
        return qso;
    }

    // Normalize the querystring
    qs = qs.substring(qs.indexOf("?") +1)
      .replace(/;/g, "&")
      .replace(/&&+/g, "&")
      .replace(/&$/,"");

    // Break the querystring into parts
    qs = qs.split("&");

    // Build the querystring object
    qs.map(parseQueryItem.bind(null, qso));
    
    return qso;
  }

  global.querystring = querystring;

}, function(global){
  "use strict";

  function querystring(str){
    var url = require("url");
    var urlParsed = url.parse(str, true);

    return urlParsed.query;
  }
  global = querystring;
});
