
//  Game.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-18 File created.   2017-08-10 Last modification.

process.stdout.write( "\n This program is a computer game. Please, "
                    + "\n type in a number : " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.

   var given_number = Number( input_from_user ) ;


   var winning_number = given_number * 2;
   var numtwo = winning_number + 1 ;
   var numthree = winning_number + 2 ;
   var pinumb = given_number / Math.PI ;
   var square = Math.sqrt( given_number ) ;

  if ( given_number < 0 )
   {
  process.stdout.write( "\n Negative numbers not allowed! " ) ;
  process.exit() ;
}

   process.stdout.write( "\n You typed in " + given_number + "."
                      +  "\n My number is " + winning_number + ", " + numtwo + " and " + numthree + "."
                      +  "\n Sorry, you lost the game. "
                      +  "\n I have more and larger numbers. "
                      +  "\n Your number divided by Pi is " + pinumb +" "
                      +  "\n The square root of your number is " + square + " ") ;

   process.exit() ;

} ) ;

//  Another possibility to output text is to use the console.log() function.
//  console.log() automatically adds a newline after the given text.
//  process.stdout.write() does not do that.
