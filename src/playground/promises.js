const promise = new Promise((resolve,reject)=>{
  setTimeout(() => {
  resolve({
      producers: [{
          id: 1,
          name: 'Dave Kelly'
                 }, 
        {
          id: 2,
          name: 'Mad House'
      }, {
          id: 3,
          name: 'Workie Workie'
      }]
  })
reject("No data found");
    }, 6000);

});
console.log("before===>");

promise.then((data)=>{
    console.log(data.producers[0]);
}).catch((error)=>{
    console.log(error);
})


console.log("<====after");
