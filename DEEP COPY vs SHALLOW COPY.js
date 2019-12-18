//  SHALLOW COPY :  Object.assign([], myArray)

//  Object.assign() copies ONLY property values ( in case of a reference to an object, it only copies the reference value)

  let obj1 = { a: 0 , b: { c: 0}};
  const obj2 = Object.assign({}, obj1);      <<<<<<<<<<<<<<<<<<<<<<<<<<<   SHALLOW CLONING
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
     
  obj2.b.c = 3;
  console.log(JSON.stringify(obj1)); // { a: 1, b: { c: 3}}
  console.log(JSON.stringify(obj2)); // { a: 2, b: { c: 3}}



//  DEEP COPY :    JSON.parse(JSON.stringify( myArray ))

  let obj1 = { a: 0 , b: { c: 0}};
  const obj2 = JSON.parse(JSON.stringify(obj1));      <<<<<<<<<<<<<<<<<<<<<  DEEP CLONING



  obj1.b.c = 4;
  console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
  
  
  
  
  //  MERGING OBJECTS WITH SAME PROPERTIES :
  
  const o1 = { a: 1, b: 1, c: 1 };
  const o2 = { b: 2, c: 2 };
  const o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }


///////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    $.extend(true, clone,orig);      <<<<<<<<<<<<   " TRUE " MUST BE INCLUDED !!! SEE : https://api.jquery.com/jquery.extend/
    orig.name = 'CHANGED';
    $('p').html(JSON.stringify(clone));
*/

let a = [{ x:{z:1} , y: 2}];
let b = $.extend(true, [], a);     <<<<<<<<<<<<   " TRUE " MUST BE INCLUDED !!! SEE : https://api.jquery.com/jquery.extend/
b[0].x.z=0
console.log(JSON.stringify(a)); //[{"x":{"z":1},"y":2}]
console.log(JSON.stringify(b)); // [{"x":{"z":0},"y":2}]
/////////////////////////////////////////////////////////////////////////////////

////  SHALLOW COPY :

const cloned = Object.assign({}, OldObj);

/*
let a = { x: {z:1} , y: 2};
let b = Object.assign({}, a);
b.x.z=0


console.log(JSON.stringify(a)); // {"x":{"z":0},"y":2}
console.log(JSON.stringify(b)); // {"x":{"z":0},"y":2} // wrong !!

*/


/////////////////////////////////////////////////////////////////////////////////
