////  DEEP COPY :

const cloned = Object.assign({}, OldObj);

const cloned = JSON.parse(JSON.stringify( OldObj ));


let cloned = {};
$.extend(cloned, OldObj);

/* example :
    let orig = {id:3,name:'dan'};
    let clone = {};
    $.extend(clone,orig);      <<<<<<<<<<<<<<<<<<<<<<<<<
    orig.name = 'CHANGED';
    $('p').html(JSON.stringify(clone));
*/
/////////////////////////////////////////////////////////////////////////////////



