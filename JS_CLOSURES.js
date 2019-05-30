var add = (function () {
  var counter = 0;  // PRIVATE VARIABLE
  return function () {counter += 1; return counter}
})();

// AFTER RUNNING ONLY ONCE, self-invoking function "ADD" BECOMES A FUNCTION to be called:
add();
add();
add();

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
