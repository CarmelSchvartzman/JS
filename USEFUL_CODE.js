////  DEEP COPY :


const cloned = JSON.parse(JSON.stringify( OldObj ));

/* EXAMPLE :
let a = [{ x:{z:1} , y: 2}];
let b = JSON.parse(JSON.stringify(a));
b[0].x.z=0
console.log(JSON.stringify(a)); //[{"x":{"z":1},"y":2}]
console.log(JSON.stringify(b)); // [{"x":{"z":0},"y":2}]
*/

///  OR :
let cloned = {};
$.extend(cloned, OldObj);

/* example :
    let orig = {id:3,name:'dan'};
    let clone = {};
    $.extend(true, clone,orig);      <<<<<<<<<<<<<<<<<<<<<<<<<
    orig.name = 'CHANGED';
    $('p').html(JSON.stringify(clone));
*/

let a = [{ x:{z:1} , y: 2}];
let b = $.extend(true, [], a);
b[0].x.z=0
console.log(JSON.stringify(a)); //[{"x":{"z":1},"y":2}]
console.log(JSON.stringify(b)); // [{"x":{"z":0},"y":2}]
/////////////////////////////////////////////////////////////////////////////////

////  SHALLOW COPY :

const cloned = Object.assign({}, OldObj);

/////////////////////////////////////////////////////////////////////////////////
