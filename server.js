const express = require( 'express' );
const cors = require( 'cors' );
const path = require( 'path' );

const app = express();

app.use( express.json() );
app.use( cors() );

app.get( '/', ( req, res ) => {
  res.send( 'Hello world. This is an heroku app' );
} );

const PORT = process.env.PORT || 5000;

if ( process.env.NODE_ENV ) {
  app.use( express.static( 'client/build' ) )
  
  app.get( '*', ( req, res ) => {
    res.sendFile( path.join( __dirname, 'client', 'build', 'index.html' ) );
  })
}

app.listen( PORT, () => console.log( `Server is set and started on port: ${ PORT }` ) );
