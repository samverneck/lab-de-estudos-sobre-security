const NOT = x => !x

const getCharCode = String.fromCharCode

const toCharCode = ( letter, i, str ) => 
  str.join( '' ).charCodeAt( i )

const isSpace = ( x ) => ( x === 32 )

const isInRangeA_Z = ( x ) => ( ( x >= 65 ) &&  (x <= 90 ) )

const cryptOutRangeA_Z = ( x ) =>
  ( x >= 78 ) ? getCharCode( x - 13 )  : getCharCode( x + 13 ) 

const cryptThis = ( x ) => 
  NOT ( isInRangeA_Z( x ) ) ? getCharCode( x ) : cryptOutRangeA_Z( x )

const toCypher = ( x ) => 
  ( isSpace( x ) ) ? getCharCode( x ) : cryptThis( x )

const rot13 = ( str ) => 
  str.split( '' )
      .map( toCharCode )
      .map( toCypher )
      .join( '' )

console.log('rot13 LBH QVQ VG!', rot13( 'LBH QVQ VG!' ) )
