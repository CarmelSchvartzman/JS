////   https://www.w3schools.com/js/js_function_closures.asp

var add = (function () {
  var counter = 0;  // PRIVATE VARIABLE : seen only from inside "ADD()"
  return function () {counter += 1; return counter}
})();

// AFTER RUNNING ONLY ONCE, self-invoking function "ADD" BECOMES A FUNCTION to be called:
add();
add();
add();

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
