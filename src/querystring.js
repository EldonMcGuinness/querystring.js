/*
 *  querystring.js - v1.1.0
 *  Querystring utility in Javascript
 *  https://github.com/EldonMcGuinness/querystring.js
 *
 *  Made by Eldon McGuinness
 *  Under MIT License
 *
 *  Parameters:
 *  str - A string that you want the script to treat as the querystring
 *        instead of the actual page's querystring.
 */

var querystring = function( str ) {

    function buildQueryStringObject( qs ){
        var item = qs.split( "=" );

        item = item.map( function (n) {return decodeURIComponent(n);} );
        var key = item[0];
        var val = ( item[1] === "" ) ? null : item[1];

        // If a key already exists then make this an object
        if ( qso[ key ] !== undefined ){
            
            if ( typeof( key ) == "string" ) {
                qso[ key ] = [ qso[ key ], val ];

            }else if (typeof( qso[ item[0] ] ) == "object"){
                qso[ key ].push( val );

            }
        }else{
            // If no key exists just set it as a string
            qso[ key ] = val;
        }
    }

    var qso = {};
    var qs = ( str || document.location.search );

    // Check for an empty querystring
    if ( qs === "" ){
        return qso;
    }
    
    // Normalize the querystring
    qs = qs.substring( qs.indexOf( "?" ) +1 )
      .replace( /;/g, '&' )
      .replace( /&&+/g, '&' )
      .replace(/&$/,'');

    // Break the querystring into parts
    qs = qs.split( "&" );

    // Build the querystring object
    qs.map( buildQueryStringObject );
    
    return qso;
}

module.exports = querystring;

