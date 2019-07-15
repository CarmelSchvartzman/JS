const promise = ()=>{ return new Promise((a,b)=>{a(11);});}                          ///////  resolve,reject
promise().then((r)=>{alert('RES=' + r);},(e)=>{alert('ERR=' + e);});
