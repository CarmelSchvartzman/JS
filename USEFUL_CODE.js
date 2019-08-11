////  DEEP COPY :

const cloned = Object.assign({}, OldObj);

const cloned = JSON.parse(JSON.stringify( OldObj ));


let cloned = {};
$.extend(cloned, OldObj);


