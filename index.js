//1)¿Cuál es el código que se muestra a continuación?
alert( null || 2 || undefined );
//muestra 2
//2) ¿Cuál es el resultado de las alertas?
alert( alert(1) || 2 || alert(3) );
//muestra 1 y después 2
//3) ¿Qué va a mostrar este código?
alert( 1 && null && 2 );
//4) ¿Cuál es el resultado de las alertas?
alert( alert(1) && alert(2) );
//5) El resultado de OR AND OR
alert( null || 2 && 3 || 4 );
//6) Escriba una condición de "si" para verificar que la edad sea entre 14 y 90 inclusive.
"Inclusive" significa que la edad puede alcanzar los bordes 14 o 90.
//7) ¿Cuál de estas alertas se ejecutará? ¿Cuáles serán los resultados de las expresiones dentro si (...)?
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' );
