<!DOCTYPE html>
<html>
<body>

<h2>Create JSON string from a JavaScript object.</h2>

<p id="demo"></p>

<script>
var obj = { "name":"John", "age":30, "city":"New York"};
var myJSON = JSON.stringify(obj);                     <<<<<<<<<<<<<<<<<<<<<
document.getElementById("demo").innerHTML = myJSON;

const d = JSON.parse('{"name":"Given"}');             <<<<<<<<<<<<<<<<<<<<<<
window.setInterval(function(){document.querySelector('#demo').innerHTML = d.name;},3000);

</script>

</body>
</html>
