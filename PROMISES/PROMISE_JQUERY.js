<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    
    fnPromise('Hello').then((url) => { alert('DATA = ' + url); },(e) => { alert('ERROR = ' + e); });
    
  });
});

const fnPromise = (url) => { 

	return new Promise((resolve,reject) => {    
    	resolve(url);
    }
    );
}

</script>
</head>
<body>
<button>Call a Promise and get the result back</button>
</body>
</html>
