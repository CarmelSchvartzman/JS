// GENERATOR :
function* count(){
  for (var x = 0; true; x++) {
    yield x
  }
}

for (var x of count()) {
  console.log(x)
}

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
PROMISES PATTERN :

//  OBSERVABLE:
const getData = url => {
  return new Promise(function(resolve, reject) {           
       
      if( ){
        resolve(res);         
      } else {       
        reject(              
          
      }  
  });
};

//  SUBSCRIBER :
const retrieve = url => {
  getData(url)
  .then(function(result) {           
      
      
    },
    function(err) {                  
      console.log(err);
    });
}



@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// PROMISES :  test on url : 

<!DOCTYPE html>
<html>
<HEAD><script>

const getData = url => {
  return new Promise(function(resolve, reject) {          <<<<<<<<<<<<<<<<<
  
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      if (request.status === 200) {     resolve(request.response);    <<<<<<<<<<<<<<<<<
      } else {       
        reject(Error('An error occurred while loading image. error code:' + request.statusText));   <<<<<<<<<<<<<<<<<
      }
    };
    request.send();
  });
};


const retrieve = url => {
  getData(url).then(function(result) {   <<<<<<<<<<<<<<<<<<
      const TXT = result;alert( result);  
      
       const e = '<div>' + TXT + '</div>';alert(e);
      document.querySelector('body').innerHTML = e;
    },
    function(err) {                    <<<<<<<<<<<<<<<<<
      console.log(err);
    });
}

</script></HEAD>
<body>

<h2>Promises</h2>

 

<p id="demo"></p>
<input type='button' value='Get data' onclick='retrieve("xmlhttp_info.txt")'></input>


</body>
</html>

@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// another example :
  
  <!DOCTYPE html>
<html>
<HEAD><script>

const getData = url => {
  return new Promise(function(resolve, reject) {          <<<<<<<<<<<<<<<<<
      const res = "Hello from Promise : url = " + url;
      if(res !== null){
        resolve(res);        <<<<<<<<<<<<<<<<<
      } else {       
        reject(             <<<<<<<<<<<<<<<<<
          Error('An error occurred while processing. error code:' + 1000)); 
      }  
  });
};


const retrieve = url => {
  getData(url)
  .then(function(result) {        <<<<<<<<<<<<<<<<<   
      
      const e = '<div>' + result + '</div>';
      document.querySelector('body').innerHTML = e;
    },
    function(err) {                 <<<<<<<<<<<<<<<<<
      console.log(err);
    });
}

</script></HEAD>
<body>
<h2>Promises</h2>
<p id="demo"></p>
<input type='button' value='Get data' onclick='retrieve("xmlhttp_info.txt")'></input>
</body>
</html>

  




