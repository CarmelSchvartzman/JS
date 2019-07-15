<!DOCTYPE html>
<html>
<body>

<p>Count numbers: <output id="result"></output></p>
 <input id='txt' onchange='fnSetLocalStorage(this)' />
<button onclick="cleanLocalStorage()">Clean Local Storage</button>
<input type='button' value='See LocalStorage' onclick='fnSeeLocalStorage()' />
<input type='button' value='See Data' onclick='fnDisplayData()' />
<button onclick='javascript:clearInterval(i)'>Clear Interval</button>
<div id='msg' ></div> 
<div id='msgPromise' ></div> 
<p><strong>Note:</strong> Internet Explorer 8 and earlier versions do not support LocalStorage.</p>

<script>
 
 function fnSetLocalStorage(domElem){
	localStorage.jcs_count = domElem.value;
 
 }
 
function cleanLocalStorage(){
	localStorage.removeItem("jcs_count");
}

function fnSeeLocalStorage(){

   document.querySelector('#msg').innerHTML = localStorage.jcs_count != null ? 'LocalStorage = ' + localStorage.jcs_count : 'NULL';
}
var i;
var count = 0;
var fn = function fnGetData(url){
	return new Promise(function(resolve,reject){
      if(true){
	     i = setInterval(function(){resolve(count++);},2000);
    	 
        }else {reject(Error('An error occurred while loading .'));}
    
    });

}

function fnDisplayData(url){

	fn(url).then(function(res){
							document.querySelector('#msgPromise').innerHTML = '<div>Promise Resolve/Reject = '+res+'</div>';
						 },function(err){console.log(err);});
     
	
}
 
</script>

</body>
</html>
